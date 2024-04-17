// Redux
import { useDispatch } from "react-redux";
// Actions
import { resetCountries, filterCountriesByContinent , setCurrentPage} from '../redux/actions';
// Styles
import styles from './Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();
    
    //manejador de eventos
    const handleChange = (event) => {
        dispatch(setCurrentPage(1))
        const continent = event.target.value;
        if (continent === "all") {
            dispatch (resetCountries());
        } else {
            dispatch(filterCountriesByContinent(continent));
        }
    };


    return (
        <div>
            <select onChange={handleChange} className={styles.select}>
                <option value="all">Todos los continentes</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antartida</option>
            </select>
        </div>
    )
}

export default Filter;