function SpeciesCard({ nombre, imagen }){
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
        </div>
    );
}