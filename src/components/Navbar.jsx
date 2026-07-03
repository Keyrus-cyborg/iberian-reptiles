import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <img src="/logos/logo-reptiles.png" className="logo-nav" alt="Logo Reptiles"></img>
                </div>
                <div className="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/lagartos">Lagartos</Link>
                    <Link to="/serpientes">Serpientes</Link>
                    <Link to="/quelonios">Quelonios</Link>
                    <Link to="/geckos-camaleones">Geckos y camaleones</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;