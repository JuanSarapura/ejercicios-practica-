import SearchInput from "../form/SearchInput";

function ListView({ elements }) {
  return (
    <div>
      <SearchInput />
      <ul>
        {elements.map((name, index) => name && <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
}

export default ListView;
