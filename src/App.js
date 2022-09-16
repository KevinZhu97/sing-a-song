import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import Header from './components/header'
import HomePage from './pages/homePage'
import SearchPage from './pages/searchPage'
import LyricsPage from './pages/lyricsPage'
import AccountPage from './pages/accountPage'

let apiKey = "920558b59bdccd102c42d9bad243289f";

function App() {

  const [musicData, setMusicData] = useState(null)
  const [musicLyrics, setMusicLyrics] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [signedIn, setSignedIn] = useState(false)

  return (
    <BrowserRouter>
      <Header apiKey={apiKey} musicData={musicData} setMusicData={setMusicData} setCurrentUser={setCurrentUser} signedIn={signedIn} setSignedIn={setSignedIn} />
        <Routes>
          <Route path="/" element={<HomePage apiKey={apiKey} musicData={musicData} setMusicData={setMusicData}/>}/>
          <Route path="/search" element={<SearchPage currentUser={currentUser} setSignedIn={setSignedIn} setCurrentUser={setCurrentUser} signedIn={signedIn} musicData={musicData} apiKey={apiKey} setMusicLyrics={setMusicLyrics}/>} currentUser={currentUser}/>
          <Route path="/lyrics" element={<LyricsPage musicLyrics={musicLyrics}/>}/>
          <Route path="/account" element={<AccountPage currentUser={currentUser} setSignedIn={setSignedIn} setCurrentUser={setCurrentUser} signedIn={signedIn} musicData={musicData} apiKey={apiKey} setMusicLyrics={setMusicLyrics}/>} currentUser={currentUser}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
