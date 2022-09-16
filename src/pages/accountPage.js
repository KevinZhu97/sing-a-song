import { getDatabase, ref, child, get } from "firebase/database";
import TrackCard from '../components/trackCard'
import { useState, useEffect } from "react";


const SearchPage = (props) => {

    const [favorites, setFavorites] = useState(null);
    const [keys, setKeys] = useState(null)

    useEffect(()=>{
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${props.currentUser}`)).then((snapshot)=>{
            if (snapshot.exists()) {
                setFavorites(snapshot.val()["favorites"]);
                setKeys(Object.keys(snapshot.val()["favorites"]))
            } else {
                console.log("No Data available")
            }
        });
    })

    while (keys === null) {
        return (<span>Still loading</span>)
    };
      
    const Track = () => { 
        return keys.map((key, index) => {
            return (
                <div className="search-page">
                    <TrackCard
                        // signedIn={props.signedIn}
                        artistName={favorites[keys[index]]["artist_name"]}
                        trackName={favorites[keys[index]]["track_name"]}
                        trackId={favorites[keys[index]]["track_id"]}
                        key={favorites[keys[index]]["track_id"]}
                        apiKey={props.apiKey}
                        setMusicLyrics={props.setMusicLyrics}
                        setCurrentUser={props.setCurrentUser}
                        // setSignedIn={props.setSignedIn}
                        // currentUser={props.currentUser}
                    />
                </div>
            )
        })
    }

    return (
        <div>
            <Track/>
            <span>Hello</span>
        </div>
    )
}

export default SearchPage;