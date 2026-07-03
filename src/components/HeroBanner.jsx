function HeroBanner() {

    const imagenes = [
        "/images/banner/lagarto-ocelado-banner.jpg",
        "/images/banner/vibora-hocicuda-banner.jpg",
        "/images/banner/tortuga-mora-banner.jpg",
        "/images/banner/salamanquesa-comun-banner.jpg",
        "/images/banner/camaleon-comun-banner.jpg"
    ]

    return (
        <div className="hero-banner">
            {imagenes.map((imagen) => (
                <img key={imagen} src={imagen} alt="Imagen de reptiles" />
            ))}
        </div>
    );
}

export default HeroBanner;