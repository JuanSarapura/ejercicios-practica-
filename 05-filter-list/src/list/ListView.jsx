function ListView({ elements, filterItems }) {
  return (
    <div>
      <input
        placeholder="Buscar pais..."
        type="text"
        onChange={(e) => filterItems(e.target.value)}
      />
      <ul>
        {elements.map((name, index) => name && <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
}

export default ListView;
