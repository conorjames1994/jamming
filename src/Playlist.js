
import React, {useState} from 'react';
import Tracklist from './Tracklist';

function Playlist (props) {

const handleNameChange = ({target}) => {
  props.onChangePlaylistName(target.value)
}
  return (
    <div>
      <form>
      <input defaultValue="Playlist name" onChange={handleNameChange}/>
      </form>
      
      <h1>{props.userPlaylistName}</h1>
      <Tracklist onRemove={props.onRemove} isRemoval={true} userSearchResults={props.userPlaylist} userPlaylistName={props.userPlaylistName}/>
      <button onClick={props.onSave}>save to spotify</button>
    </div>
  )


  
}

export default Playlist;