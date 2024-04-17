// Router
import { Link } from "react-router-dom";
// React
import { useState, useEffect } from 'react';
// Styles
import styles from './Landing.module.css'
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper'
// Img
import img from '../../images/Henry.png'

const Landing = () => {
    const textoBienvenida = ["BIENVENIDO", "DISFRUTA", "DE TU", "PLANEACION"]
    const [ textoIndex, setTextoIndex ] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextoIndex((prevIndex) => (prevIndex + 1) % textoBienvenida.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [textoBienvenida])

    return (
        <div className={styles.body}>
            <div className={styles.textDiv}>
            <h1 className={styles.changinTitle}>{textoBienvenida[textoIndex]}</h1>
            <Link to={PATHROUTES.HOME}>
                <button className={styles.btn}>► ENTER HERE </button>
            </Link>
            </div>
            <img src={img} alt='' className={styles.img}></img>
        </div>
    )
}

export default Landing;