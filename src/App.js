import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import Header from './components/header'
import HomePage from './pages/homePage'
import SearchPage from './pages/searchPage'
import LyricsPage from './pages/lyricsPage'

let apiKey = "920558b59bdccd102c42d9bad243289f";

function App() {

  const [musicData, setMusicData] = useState(null)
  const [musicLyrics, setMusicLyrics] = useState(null)

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage apiKey={apiKey} musicData={musicData} setMusicData={setMusicData}/>}/>
          <Route path="/search" element={<SearchPage musicData={musicData} apiKey={apiKey} setMusicLyrics={setMusicLyrics}/>}/>
          <Route path="/lyrics" element={<LyricsPage musicLyrics={musicLyrics}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
