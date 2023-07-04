import { useState } from "react";
import exampleList from "./items";
import ListView from "./ListView";

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
      <ListView elements={items} filterItems={filterItems} />
    </div>
  );
}

export default List;
