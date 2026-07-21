function HeroBanner({ categoria }) {

    const banners = {
        inicio: [
            "/images/banner/lagarto-ocelado-banner.jpg",
            "/images/banner/vibora-hocicuda-banner.jpg",
            "/images/banner/tortuga-mora-banner.jpg",
            "/images/banner/salamanquesa-comun-banner.jpg",
            "/images/banner/camaleon-comun-banner.jpg"
        ],
        lagartos: [
            "/images/banner/lagarto-ocelado-banner.jpg",
            "/images/banner/lagarto-tizon-banner.jpg",
            "/images/banner/lagarto-verdinegro-banner.jpg",
            "/images/banner/lagarto-gigante-hierro-banner.jpg",
            "/images/banner/lagarto-agil-banner.jpg"
        ],
        serpientes: [
            "/images/banner/vibora-hocicuda-banner.jpg",
            "/images/banner/culebra-bastarda-banner.jpg",
            "/images/banner/culebra-cogulla-banner.jpg",
            "/images/banner/culebra-escalera-banner.jpg",
            "/images/banner/culebra-verdiamarilla-banner.jpg"
        ],
        quelonios: [
            "/images/banner/tortuga-mora-banner.jpg",
            "/images/banner/galapago-europeo-banner.jpg",
            "/images/banner/galapago-leproso-banner.jpg",
            "/images/banner/tortuga-boba-banner.jpg",
            "/images/banner/tortuga-laud-banner.jpg"
        ],
        "geckos-camaleones": [
            "/images/banner/salamanquesa-comun-banner.jpg",
            "/images/banner/salamanquesa-comun-banner2.jpg",
            "/images/banner/salamanquesa-rosada-banner.jpg",
            "/images/banner/camaleon-comun-banner.jpg",
            "/images/banner/camaleon-comun-banner2.jpg"
        ],

    }

    const imagenes = banners[categoria];

    return (
        <div className="hero-banner">
            {imagenes.map((imagen) => (
                <img key={imagen} src={imagen} alt="Imagen de reptiles" />
            ))}
        </div>
    );
}

export default HeroBanner;