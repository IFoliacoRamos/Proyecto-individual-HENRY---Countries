// React
import { useState } from "react";
// Axios 
import axios from "axios";
// Redux
import { useSelector } from "react-redux";
// Router
import { useNavigate } from "react-router-dom";
// Helpers
import PATHROUTES from "../../helpers/PathRoutes.helper";
// Components
import Filter from "../../Filters/Filter";
// Styles
import styles from './Form.module.css';

const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    dificultad: 1,
    duracion: 1,
    temporada: "",
    countries: [],
  });

  const countryNames = useSelector((state) => state.countries.map((country) => country.name));
   //manejador de eventos
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  //manejador de eventos
  const handleSelectChange = (event) => {
    const selectedCountries = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setValues({
      ...values,
      countries: selectedCountries,
    });
  };
  //manejador de eventos
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!values.name || /[^a-zA-Z ]/.test(values.name)){
      alert('El nombre es obligatorio, solo se permiten letras');
      return;
    }
    try {
      const response = await axios.post(
        '/activities',
        values
      )
      const successfulMessage = `Se ha creado la nueva actividad turística: ${values.name}`;
      alert(successfulMessage);
      setValues({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries: []
      });
      navigate(PATHROUTES.HOME)
    } catch (error) {
      if (error.response && error.response.data) alert('Ya existe una actividad con ese nombre.');
      else console.error(error);
    }
  };


  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Nombre: <input className={styles.input} type="text" name="name" value={values.name} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Dificultad: <input className={styles.input} type="number" min="1" max="5" name="dificultad" value={values.dificultad} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Duracion(hs): <input className={styles.input} type="number" min="0" name="duracion" value={values.duracion} onChange={handleChange} />
        </label>
          Temporada: 
        <select className={styles.select} name="temporada" value={values.temporada} onChange={handleChange} required>
            <option value="">Temporada: </option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        Continente:
        <Filter />
        <label className={styles.label}>
          Países: 
          <select className={styles.input} name="countries" multiple value={values.countries} onChange={handleSelectChange}>
            {countryNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className={styles.btn}>Crear actividad turística</button>
      </form>
    </div>
  )
}

export default Form;