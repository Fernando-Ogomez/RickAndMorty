import { useState, useEffect } from "react";
import RenderCard from './cards.jsx'

function RenderApi(URL) {
  const [characters, setCharacter] = useState([]);
  const charactersUrl = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(charactersUrl)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log(error));
  }, []);

  return <>
    <RenderCard characters={characters}/>
  </>;
}

export default RenderApi;
