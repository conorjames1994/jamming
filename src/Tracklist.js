import React from 'react';
import Track from './Track';


function Tracklist (props) {

return (
  <div>
  {props.userSearchResults.map((track) => (
    
    <Track 
    track={track} 
    key={track.id} 
    onRemove={props.onRemove}
    onAdd={props.onAdd} 
    isRemoval={props.isRemoval}/>
    
    
  ))}
  
  <br />
  </div>
)
}

export default Tracklist;


  

 