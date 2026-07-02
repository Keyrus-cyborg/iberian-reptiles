function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <img src="/logos/logo-reptiles.png" className="logo-nav" alt="Logo Reptiles"></img>
                </div>
                <div className="menu">
                    <a href='#'>Inicio</a>
                    <a href='#'>Lagartos</a>
                    <a href='#'>Serpientes</a>
                    <a href='#'>Quelonios</a>
                    <a href='#'>Geckos y camaleones</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;