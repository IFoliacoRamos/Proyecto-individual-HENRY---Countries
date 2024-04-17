axios.defaults.baseURL = 'https://pi-countries-back-soyhenry-production.up.railway.app'
// Router
import { Routes, Route, useLocation } from 'react-router-dom'
// Styles
import './App.css'
// Helpers
import PATHROUTES from './components/helpers/PathRoutes.helper'
// Views
import Landing from './components/views/Landing/Landing.view'
import Home from './components/views/Home/Home.view'
import Detail from './components/views/Detail/Detail.view'
import Form from './components/views/Form/Form.view'
import Error from './components/views/Error/Error.view'
// Component
import NavBar from './components/NavBar/NavBar'
// Axios
import axios from 'axios'

function App() {
  const { pathname } = useLocation();
  const noNavBar = pathname === PATHROUTES.LANDING || pathname === PATHROUTES.ERROR; 
  return (
    <div className='App'>
      {!noNavBar && <NavBar />}
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Landing />} />
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.FORM} element={<Form />} />
        <Route path={PATHROUTES.ERROR} element={<Error />} />
      </Routes>
    </div>
  )
}

export default App