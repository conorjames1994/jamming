import React, {useState} from 'react';
import  "./button.module.css";
import "./input.module.css";

function SearchBar (props) {
const [term, setTerm] = useState('')

const passTerm = (term) => {
  props.onSearch(term)
}

const handleTerm = ({target}) => {
  setTerm(target.value)
}
  return (
<div >
  
  <input id="search" type="search" onChange={handleTerm}></input>
  <button  onClick={passTerm}>Search</button>
</div>

  )
};

export default SearchBar;