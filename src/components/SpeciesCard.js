function SpeciesCard({ nombre, imagen }){
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <span className="scientific-name">{nombreCientifico}</span>
            <span className="subtype">{subtipo}</span>
            <span className={`status ${estadoConservacion}`}>{estadoConservacion}</span>
        </div>
    );
}