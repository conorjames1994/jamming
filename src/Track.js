import React from 'react';

function Track (props){

  function renderAction (){
    if (props.isRemoval){
      return <button onClick={removeTrack}>-</button>
    } else {
      return <button onClick={passTrack}>+</button>
    }
  }

  const passTrack = () => {
    props.onAdd(props.track)
  }


  const removeTrack = () => {
    props.onRemove(props.track)
  }

  return(
    <div>
      <h3>{props.track.song}</h3>
      <h3>{props.track.artist} {props.track.album}</h3>
      <br />
      {renderAction()}
    </div>
  )

  
}

export default Track;