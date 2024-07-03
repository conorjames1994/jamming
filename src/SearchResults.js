import React, {useState} from 'react';
import Tracklist from './Tracklist';
import Playlist from './Playlist';

function SearchResults (props) {
 
  return (
    <div>
      <h1>Spotify</h1>
    <Tracklist userSearchResults={props.userSearchResults} onAdd={props.onAdd} isRemoval={false}/>
    </div>
  )
}

export default SearchResults; 