export default function SearchBox({ filterValue, setFiletrValue }) {
  const handleChange = event => {
    let search = event.target.value;
    setFiletrValue(search);
  };

  return (
    <div>
      <label>
        <input type="text" value={filterValue} onChange={handleChange} />
      </label>
    </div>
  );
}
