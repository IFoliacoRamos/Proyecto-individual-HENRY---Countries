// Routing
import { Link, Route, Routes, useLocation } from 'react-router-dom';
// Components
import SearchBar from '../SearchBar/SearchBar';
// Helpers
import PATHROUTES from '../helpers/PathRoutes.helper';
// Styles
import styles from './NavBar.module.css'


const NavBar = () => {
    const location = useLocation();
    
    //manejador de eventos
    const handleHomeClick = () => {
        if (location.pathname === PATHROUTES.HOME){
            window.location.reload();
        }
    }


    return (
        <div className={styles.navMain}>
            <div className={styles.links}>
                <Link to={PATHROUTES.LANDING} className={styles.title}><h1> EXIT </h1></Link>
                <Link to={PATHROUTES.HOME} className={styles.title} onClick={handleHomeClick}><h1> Home </h1></Link>
                <Link to={PATHROUTES.FORM} className={styles.title}><h1>  Create Activities</h1></Link>
            </div>
            <Routes>
                <Route path={PATHROUTES.HOME} element={<SearchBar />} />
            </Routes>
        </div>
    )
}

export default NavBar;