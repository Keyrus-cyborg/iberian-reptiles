function SearchBar({ search, setSearch }){
    return (
        <input
            className="search-input"
            type="text"
            placeholder="Buscar por nombre, nombre científico, categoría o estado..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
    );
}

export default SearchBar;