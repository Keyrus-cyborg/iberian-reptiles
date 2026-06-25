import { useState } from 'react'
import { reptiles } from './data/reptiles'
import Navbar from "./components/Navbar";
import SpeciesCard from "./components/SpeciesCard";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        {reptiles.map((reptil) => (
          <SpeciesCard
            key={reptil.id}
            reptil={reptil}
          />
        ))}
      </main>
    </>
  )
}

export default App;
