import albumCover from '../misc/album-cover.jpeg'
import { Link } from 'react-router-dom'
import Button from './button';
import { getDatabase, ref, update, child, push } from "firebase/database";
import { app } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";


const trackCard = (props) => {

    const authentication = getAuth(app)

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            console.log(re)
            console.log("Signed in through favorites")
            props.setCurrentUser(re["user"]["uid"]) 
            props.setSignedIn(true) 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    async function fetchMusicLyrics() {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.trackId}&apikey=${props.apiKey}`, {
            mode: 'cors'
        });
        const musicLyrics = await response.json()
        props.setMusicLyrics(musicLyrics["message"]["body"]["lyrics"]["lyrics_body"])
    }


    function addTrackToFavorites(artistName, trackName, trackId) {
        if (props.signedIn === false) {
            signInWithGoogle()
            console.log("logging in")
        } else {
            const db = getDatabase(app)
            console.log("Added track successfully!")
            const postData = {
                artist_name: artistName,
                track_name: trackName, 
                track_id: trackId,
            }
        
            const newPostKey = push(child(ref(db), 'favorites')).key;
        
            const updates = {};
        
            updates['users/' + props.currentUser + '/favorites/' + newPostKey] = postData;

            update(ref(db), updates);
        }
    }

    return (
        <div>
        <Link to='/lyrics'><div className="track-card" onClick={()=>fetchMusicLyrics()}>
            <img className="album-cover" src={albumCover} alt="album cover"/> 
            <div className="track-details-container">
                <span>{props.artistName}</span>
                <span>{props.trackName}</span>
                <span>{props.trackId}</span>
                <span>{props.apiKey}</span>
            </div>
        </div> </Link>
        <Button purpose="Add to favorites" onClick={()=>addTrackToFavorites(props.artistName, props.trackName, props.trackId)}></Button>
        </div>
        
    )
}

export default trackCard