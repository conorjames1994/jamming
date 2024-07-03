import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import SearchResults from './SearchResults';
import Playlist from './Playlist';


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

const [playlistName, setPlaylistName] = useState('Playlist name example');
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

  return (
    <div className="App">
      <header className="App-header">
        
        <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
        <Playlist  userPlaylist={playlist} userPlaylistName={playlistName} onRemove={removeTrack}/>
        
    
      </header>
    </div>
  );
}

export default App;
