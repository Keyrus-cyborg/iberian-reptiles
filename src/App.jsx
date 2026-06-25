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
        <div className="cards-container">
        {reptiles.map((reptil) => (
          <SpeciesCard
            key={reptil.id}
            reptil={reptil}
          />
        ))}
        </div>
      </main>
    </>
  )
}

export default App;
