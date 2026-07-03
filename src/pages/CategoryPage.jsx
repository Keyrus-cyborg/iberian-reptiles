import { useState } from 'react'
import { reptiles } from '../data/reptiles';
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import SpeciesCard from "../components/SpeciesCard";

function CategoryPage({ categoria }) {
    const [search, setSearch] = useState('');

    const reptilesCategoria = reptiles.filter(
        (reptil) => reptil.categoria === categoria
    )

    const reptilesFiltrados = reptilesCategoria.filter((reptil) => {
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
            <div className="hero-banner-container">
                <HeroBanner />
            </div>
            <div className="search-container">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />
            </div>
            <div className="cards-container">
                {reptilesFiltrados.map((reptil) => (
                    <SpeciesCard
                        key={reptil.id}
                        reptil={reptil}
                    />
                ))}
            </div>
        </>
    )
}

export default CategoryPage;