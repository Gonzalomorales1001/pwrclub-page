import React from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'
import logoDark from '../assets/logo-dark.png'
import logolight from '../assets/logo-light.png'

const Navbar = () => {

  return (
<nav className={`navbar navbar-expand-lg bg-body-tertiary p-0 bg-black navbar-dark sticky-top`}>
  <div className="container-fluid p-0">
    <a className="navbar-brand mx-auto mx-md-0 ms-md-3" href="#">
    <img src={logoDark} alt="" />
    </a>
  </div>
    <button className="navbar-toggler flex-grow-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon d-inline-block"></span> */}
      <h3><i className="fa fa-arrow-down" aria-hidden="true"></i> MENU</h3>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto">
      <NavLink className={`text-center py-4 nav-link nav-link--dark`} to="/">Inicio</NavLink>
      <NavLink className={`text-center py-4 nav-link nav-link--dark`} to="/asesorias">Asesorías</NavLink>
      <NavLink className={`text-center py-4 nav-link nav-link--dark`} to="/catalogo">Catálogo</NavLink>
      <NavLink className={`text-center py-4 nav-link nav-link--dark`} to="/calculadoras">Calculadoras</NavLink>
      <NavLink className={`text-center py-4 nav-link nav-link--dark`} to="/aboutus">Sobre Nosotros</NavLink>
    </div>
    </div>
</nav>
  )
}

export default Navbar