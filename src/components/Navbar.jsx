import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <img src="/logos/logo-reptiles.png" className="logo-nav" alt="Logo Reptiles"></img>
                </div>
                <div className="menu">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/lagartos">Lagartos</NavLink>
                    <NavLink to="/serpientes">Serpientes</NavLink>
                    <NavLink to="/quelonios">Quelonios</NavLink>
                    <NavLink to="/geckos-camaleones">Geckos y camaleones</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;