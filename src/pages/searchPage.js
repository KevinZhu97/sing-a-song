import TrackCard from '../components/trackCard'

const SearchPage = (props) => {
    
    while (props.musicData === null) {
        return (<span>Still loading</span>)
    };

    const Track = () => { 
        return props.musicData.map((track) => {
            return (
                <div className="search-page">
                    <TrackCard
                        artistName={track.track.artist_name}
                        trackName={track.track.track_name}
                        trackId={track.track.track_id}
                        key={track.track.track_id}
                        apiKey={props.apiKey}
                        setMusicLyrics={props.setMusicLyrics}
                    />
                </div>
            )
        })
    }

    return (
        <div>
            <Track/>
        </div>
    )
}

export default SearchPage;