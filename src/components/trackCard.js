import albumCover from '../misc/album-cover.jpeg'
import { Link } from 'react-router-dom'


const trackCard = (props) => {

    async function fetchMusicLyrics() {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.trackId}&apikey=${props.apiKey}`, {
            mode: 'cors'
        });
        const musicLyrics = await response.json()
        props.setMusicLyrics(musicLyrics["message"]["body"]["lyrics"]["lyrics_body"])
    }
    

    return (
        <Link to='/lyrics'><div className="track-card" onClick={()=>fetchMusicLyrics()}>
            <img className="album-cover" src={albumCover} alt="album cover"/> 
            <div className="track-details-container">
                <span>{props.artistName}</span>
                <span>{props.trackName}</span>
                <span>{props.trackId}</span>
                <span>{props.apiKey}</span>
            </div>
        </div> </Link>
    )
}

export default trackCard