import { useParams } from "react-router-dom";
import { reptiles } from "../data/reptiles";

function SpeciesDetail() {

    const { id } = useParams();

    const reptil = reptiles.find(r => r.id === Number(id));

    const statusClass = reptil.estadoConservacion
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

    return (
        <div className="detail">
            <div className="detail-image">
                <img src={reptil.imagen} alt={reptil.nombre} />
            </div>
            <div className="detail-content">
                <h1>{reptil.nombre}</h1>
                <div className="detail-info">
                    <p><strong>Nombre científico:</strong> {reptil.nombreCientifico}</p>
                    <p><strong>Categoría:</strong> {reptil.categoria.charAt(0).toUpperCase() + reptil.categoria.slice(1)}</p>
                    <p><strong>Subtipo:</strong> {reptil.subtipo}</p>
                    <p><strong>Tamaño:</strong> {reptil.tamano}</p>
                    <p><strong>Distribución:</strong> {reptil.distribucion}</p>
                    {reptil.endemico && (
                        <p><strong>Endemismo:</strong> {reptil.endemismo}</p>
                    )}
                </div>
                <div className="detail-status">
                <strong>Estado de conservación</strong><span className={`status ${statusClass}`}
                >{reptil.estadoConservacion}</span></div>
                <div className="detail-description">
                    <h2>Descripción</h2><p> {reptil.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default SpeciesDetail;