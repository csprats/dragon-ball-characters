import { useEffect, useState } from "react";
import { Character } from "./Character";

export const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let characterList = []
      try {
        for (let i = 1; i <= 58; i++) {
          const response = await fetch(`https://dragonball-api.com/api/characters/${i}`)
          
          if (response.ok) {
            const result = await response.json()
            
            characterList.push({ ...result, uniqueKey: `main-${result.id}` })
            
            if (result.transformations && result.transformations.length > 0) {
              result.transformations.forEach((transformation, index) => {
                characterList.push({ ...transformation, uniqueKey: `trans-${result.id}-${index}`, affiliation: `${result.affiliation}`, race: `${result.race} (transformed)` })
              });
            }
          } else {
            console.error(`Error ${i}: ${response.status}`)
          }
        }
        setCharacter(characterList);
      } catch (error) {
        console.error("Error ", error)
      }
    };
    fetchData()
  }, [])

  if (character.length === 0) {
    return (
      <>
        <header>
          <h1>Dragon Ball Characters</h1>
          <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="Dragon Ball Api" width='250'/>
        </header>
        <div>Chargin data...</div>
      </>
    )
  }

  return (
    <>
      <header>
        <h1>Dragon Ball Characters</h1>
        <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="Dragon Ball Api" width='250'/>
      </header>
      
      {character.map((chr) => (
          <Character 
            key={chr.uniqueKey}
            name={chr.name} 
            ki={chr.ki} 
            image={chr.image} 
            afilliation={chr.affiliation}
            race={chr.race}
          />
      ))}
    </>
  );
};