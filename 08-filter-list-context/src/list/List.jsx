import { useState } from "react";
import exampleList from "./items";
import ListView from "./ListView";
import { SearchContext } from "../contexts/SearchContext";

function List() {
  let [items, setItems] = useState(exampleList);

  function filterItems(pattern) {
    if (pattern === "") {
      setItems(exampleList);
    } else {
      let newItems = filterItemsBySearch(pattern);
      setItems(newItems);
    }
  }

  function filterItemsBySearch(pattern) {
    let filterItems = exampleList.map((item) =>
      item.toLowerCase().includes(pattern.toLowerCase()) ? item : null
    );
    return filterItems;
  }

  return (
    <div>
      <SearchContext.Provider value={{ filterItems: filterItems }}>
        <ListView elements={items} />
      </SearchContext.Provider>
    </div>
  );
}

export default List;
