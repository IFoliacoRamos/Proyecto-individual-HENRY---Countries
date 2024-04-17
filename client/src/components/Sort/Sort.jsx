// Redux
import { useDispatch } from 'react-redux';
// Actions
import {
    sortCountriesByNameAscending,
    sortCountriesByNameDescending,
    sortCountriesByPopulationAscending,
    sortCountriesByPopulationDescending,
    resetCountries
} from '../redux/actions';
// Styles
import styles from './Sort.module.css'

const Sort = () => {
    const dispatch = useDispatch();
    const actions = {
        'unsorted': resetCountries,
        'name-ascending': sortCountriesByNameAscending,
        'name-descending': sortCountriesByNameDescending,
        'population-ascending': sortCountriesByPopulationAscending,
        'population-descending': sortCountriesByPopulationDescending
    };

    //manejador de eventos
    const handleChange = (event) => {
        const selectedAction = actions[event.target.value];
        if (selectedAction){
            dispatch(selectedAction());
        }
    }


    return (
        <select onChange={handleChange} className={styles.select}>
            <option value="unsorted">Ordenar por...</option>
            <option value="name-ascending">Name A↑</option>
            <option value="name-descending">Name D↓</option>
            <option value="population-ascending">Population A↑</option>
            <option value="population-descending">Population D↓</option>
        </select>
    )
}

export default Sort;