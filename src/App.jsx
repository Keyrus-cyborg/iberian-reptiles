import { useState } from 'react'
import { reptiles } from './data/reptiles'
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SpeciesCard from "./components/SpeciesCard";
import './App.css'

function App() {
  const [search, setSearch] = useState('');

  const reptilesFiltrados = reptiles.filter((reptil) => {
        const texto = search.toLowerCase();

        return (
            reptil.nombre.toLowerCase().includes(texto) ||
            reptil.nombreCientifico.toLowerCase().includes(texto) ||
            reptil.subtipo.toLowerCase().includes(texto) ||
            reptil.estadoConservacion.toLowerCase().includes(texto)
        )
    });

  return (
    <>
      <Navbar />
       <div className="search-container">
        <SearchBar
        search={search}
        setSearch={setSearch}
      />
       </div>
      <main>
        <div className="cards-container">
        {reptilesFiltrados.map((reptil) => (
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
