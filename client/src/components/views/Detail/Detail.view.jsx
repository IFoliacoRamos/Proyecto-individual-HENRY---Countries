// React
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper';
// Dependencia
import axios from 'axios';
// Styles
import styles from './Detail.module.css'

const Detail = () => {
    const [country, setCountry] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios(`/countries/${id}`)
        .then((res) => {
            setCountry(res.data);
        })
        .catch((err) => {
            console.log(err)
            alert('Hubo un error al buscar el país.')
        })
    }, [id]);


    return (
        <div className={styles.body}>
            <div className={styles.dataDiv}>
                    <h1 className={styles.titulo}>{country?.name}</h1>
                    <h2>Continente:{country?.continente}</h2>
                    <h2>Capital:{country?.capital}</h2>
                    <h2>Subregion:{country?.subregion}</h2>
                    <h2>Área:{country?.area}</h2>
                    <h2>Población:{country?.poblacion}</h2>
            </div>
            <div className={styles.rightContainer} >
                <img src={country?.image} alt='' className={styles.image} />
                <Link to={PATHROUTES.HOME}>
                    <button className={styles.btn}>BACK</button>
                </Link>
            </div>
        </div>
    )
}

export default Detail