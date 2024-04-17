// React
import { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { getCountries, setCurrentPage } from '../../redux/actions';
// Components
import Cards from '../../Cards/Cards';
import Filter from '../../Filters/Filter';
import ActivityFilter from '../../Filters/ActivityFilter';
import Sort from '../../Sort/Sort';
// Styles
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const currentPage = useSelector((state) => state.currentPage);
    const cardsPorPagina = 12;
    const indexUltimaCarta = currentPage*cardsPorPagina;
    const indexPrimerCarta = indexUltimaCarta - cardsPorPagina;
    const currentCards = countries.slice(indexPrimerCarta, indexUltimaCarta);
    const primerPagina = () => dispatch(setCurrentPage(1));
    const siguientePagina = () => dispatch(setCurrentPage(currentPage+1));
    const anteriorPagina = () => dispatch(setCurrentPage(currentPage-1));
    useEffect (() => {
        dispatch(getCountries());
    }, [dispatch]);
    return(
        <div>
            <div className={styles.sortDiv}>
                <Sort />
                <Filter />
                <ActivityFilter />
            </div>
            <div>
                <Cards currentCards={currentCards} />
            </div>
            <div className={styles.paginado}>
                <button onClick={primerPagina} disabled={currentPage===1} className={styles.btn}>Primer página</button>
                <button onClick={anteriorPagina} disabled={currentPage===1} className={styles.btn}>Página Anterior</button>
                <button onClick={siguientePagina} disabled={indexUltimaCarta >= countries.length} className={styles.btn}>Página siguiente</button>
            </div>
        </div>
    )
}

export default Home;