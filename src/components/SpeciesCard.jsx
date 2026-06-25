function SpeciesCard({ reptil }){
    return (
        <div className="card">
            <img src={reptil.imagen} alt={reptil.nombre} />
            <h3>{reptil.nombre}</h3>
            <span className="scientific-name">{reptil.nombreCientifico}</span>
            <span className="subtype">{reptil.subtipo}</span>
            <span className={`status ${reptil.estadoConservacion}`}>{reptil.estadoConservacion}</span>
        </div>
    );
}

export default SpeciesCard;