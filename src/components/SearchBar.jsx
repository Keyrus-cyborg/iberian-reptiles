import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }){
    return (
        <div className="search-wrapper">
            <FiSearch className="search-icon" />
            
            <input
            className="search-input"
            type="text"
            placeholder="Buscar por nombre, categoría..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>        
    );
}

export default SearchBar;