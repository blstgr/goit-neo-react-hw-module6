import { Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';
import { selectNameFilter } from '../../redux/selectors.js';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.wrapper}>
      <span className={css.label}>Find contacts</span>
      <span className={css.inputWrap}>
        <Search className={css.icon} size={18} aria-hidden="true" />
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search by name or number"
        />
      </span>
    </label>
  );
}

export default SearchBox;
