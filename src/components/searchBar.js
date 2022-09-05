import MagnifyingGlass from '../misc/magnifying-glass.svg'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {

    async function fetchMusicData() {
        const searchTrack = getInputValue()
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${searchTrack}&f_has_lyrics=1&s_track_rating=desc&s_artist_rating=desc&apikey=${props.apiKey}`, {
            mode: 'cors'
        });
        const musicInfo = await response.json()
        props.setMusicData(musicInfo["message"]["body"]["track_list"])
    }
    
    const getInputValue = () => {
        let inputValue = document.getElementById("trackInfo").value;
        return inputValue;
    }

    return (
        <div>
            <form className="search-bar-form">
                <label htmlFor="trackInfo"></label>
                <input type="text" id="trackInfo" placeholder="Search for music" className="search-field"/>
                <button type="button" onClick={()=>fetchMusicData()} className="search-button">
                    <Link to='/search'> <img src={MagnifyingGlass} alt="magnifying glass"/> </Link>
                </button>
            </form>
        </div>
    )
};

export default SearchBar;   