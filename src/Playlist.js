
import React, {useState} from 'react';
import Tracklist from './Tracklist';

function Playlist (props) {


  return (
    <div>
      <h1>My Playlist</h1>
      <Tracklist onRemove={props.onRemove} isRemoval={true} userSearchResults={props.userPlaylist} userPlaylistName={props.userPlaylistName}/>
      <button>save to spotify</button>
    </div>
  )


  
}

export default Playlist;