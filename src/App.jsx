import { useEffect, useState } from "react"
import { Character } from "./Character"

export const App = () => {
  const [character, setCharacter] = useState([])
  const [character2, setCharacter2] = useState([])
  const [character3, setCharacter3] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters')
        const result = await response.json()
        setCharacter(result.items) // <--- Aquí guardamos directamente el arreglo de personajes
        console.log(result.items)

        const response2 = await fetch('https://dragonball-api.com/api/characters?page=2&limit=10')
        const result2 = await response2.json()
        setCharacter2(result2.items) // <--- Aquí guardamos directamente el arreglo de personajes
        console.log(result2.items)

        const response3 = await fetch('https://dragonball-api.com/api/characters?page=3&limit=10')
        const result3 = await response3.json()
        setCharacter3(result3.items) // <--- Aquí guardamos directamente el arreglo de personajes
        console.log(result3.items)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    };
    fetchData()
  }, [])

  if (character.length === 0) {
    return <div>Chargin...</div>;
  }

  return (
    <>
      <header>
        <h1>Dragon Ball Characters</h1>
        <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="Dragon Ball Api" width='250'/>
      </header>


      {character.map((chr, i) => (
          <Character key={i} name={chr.name} ki={chr.ki} maxki={chr.maxKi} image={chr.image} afilliation={chr.affiliation}/>
      ))}
      {character2.map((chr2, i2) => (
          <Character key={i2} name={chr2.name} ki={chr2.ki} maxki={chr2.maxKi} image={chr2.image} afilliation={chr2.affiliation}/>
      ))}
      {character3.map((chr3, i3) => (
          <Character key={i3} name={chr3.name} ki={chr3.ki} maxki={chr3.maxKi} image={chr3.image} afilliation={chr3.affiliation}/>
      ))}
    </>
  )
}