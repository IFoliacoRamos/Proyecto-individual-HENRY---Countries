// Router
import { Link } from 'react-router-dom'
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper'
// Styles
import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.body}>
      <div className={styles.errorDiv}>
        <h1 className={styles.titulo}>¡Oops!</h1>
        <p> Are you lost baby girl? </p>
        <p>Haz clic en este enlace para volver: </p>
        <Link to={PATHROUTES.HOME}>
          <button className={styles.btn}>Llevame al inicio.</button>
        </Link>
      </div>
    </div>
  )
}

export default Error