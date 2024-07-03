import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SearchBar from './SearchBar';


function App() {
const [searchResults, setSearchResults] = useState([
  {artist: "Kanye West", 
    song: "stronger",
    album: "graduation",
    id: 1
},
{artist: "Kanye West",
  song: "We dont care",
  album: "graduation",
  id: 2
},
{artist: "Kanye West",
  song: "through the wire",
  album: "graduation",
  id: 3

}]);

const [playlistName, setPlaylistName] = useState('Enter playlist name ');
const [playlist, setPlaylist] = useState([
  {artist: "K", 
    song: "example1",
    album: "graduation",
    id: 4
},
{artist: "Kanye West",
  song: "example 2",
  album: "graduation",
  id: 5
},
{artist: "Kanye West",
  song: "example 3",
  album: "graduation",
  id: 6

}]);

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
  const trackURIs= playlist.map((t) => t.uri)
}

const search = (term) => {
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
