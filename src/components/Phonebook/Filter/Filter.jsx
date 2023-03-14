import { useDispatch, useSelector } from "react-redux"
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selector';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value))
    };


    return (
        <div>
            <p>Find contacts by name:</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}></input>
        </div>
  )
}

