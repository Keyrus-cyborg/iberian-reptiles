function SpeciesCard({ reptil }) {

    const statusClass = reptil.estadoConservacion
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

    return (
        <div className="card">
            <img src={reptil.imagen} alt={reptil.nombre} />
            <div className="card-content">
                <h3>{reptil.nombre}</h3>
                <div className="card-info">
                    <span className="scientific-name">{reptil.nombreCientifico}</span>
                    <span className="subtype">{reptil.subtipo}</span>
                    <span className={`status ${statusClass}`}
                    >{reptil.estadoConservacion}</span>
                </div>
            </div>
        </div>
    );
}

export default SpeciesCard;