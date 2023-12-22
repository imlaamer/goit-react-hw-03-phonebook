import css from './Filter.module.css';

function Filter({ filterValue, filterChange }) {
  const { filterBox, filterText, filterInput } = css;
  return (
    <div className={filterBox}>
      <p className={filterText}>{'Find contacts by name 🔎'}</p>
      <input
        type="text"
        name="filter"
        placeholder="Name..."
        className={filterInput}
        value={filterValue}
        onChange={filterChange}
        autoFocus
      />
    </div>
  );
}

export default Filter;
