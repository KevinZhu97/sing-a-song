import SearchBar from "../components/searchBar";

const HomePage = (props) => {
    return (
        <div className="homepage">
            <span className="homepage-text">
                Any song, any language, at the tip of your fingers!
            </span>
            <SearchBar className="homepage-search-field" apiKey={props.apiKey} musicData={props.musicData} setMusicData={props.setMusicData}/>
        </div>
    )
}

export default HomePage;