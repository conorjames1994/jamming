import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import { Spotify } from './spotify.js';


function App() {
const [searchResults, setSearchResults] = useState([]);

const [playlistName, setPlaylistName] = useState('Enter playlist name ');
const [playlist, setPlaylist] = useState([]);

const addTrack = (track) => {
const existingTrack = playlist.find((t) => t.id === track.id);
const newTrack = playlist.concat(track)
if(existingTrack){
  console.log('Track already exists')
} else {
  setPlaylist(newTrack)
}
}

const removeTrack = (track) => {
  const trackToRemain = playlist.filter((t) => t.id  !== track.id )
  setPlaylist(trackToRemain)
}

const changePlaylistName = (name) => {
  setPlaylistName(name);
}


const savePlaylist = () => {
  const trackURIs= playlist.map((t) => t.uri);
  Spotify.savePlaylist(playlistName, trackURIs).then(() => {setPlaylistName("New Playlist"); 
    setPlaylist([])})
}

const search = (term) => {
  Spotify.search(term).then(result => setSearchResults(result))
  console.log(term)
}
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={search}/>
        <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
        <Playlist  onSave={savePlaylist} onChangePlaylistName={changePlaylistName} userPlaylist={playlist} userPlaylistName={playlistName} onRemove={removeTrack}/>
        
    
      </header>
    </div>
  );
}

export default App;
