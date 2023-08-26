import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function SearchInput() {
  const { filterItems } = useContext(SearchContext);
  return (
    <div>
      <input
        placeholder="Buscar pais..."
        type="text"
        onChange={(e) => filterItems(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
