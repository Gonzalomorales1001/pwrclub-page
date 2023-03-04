import React from 'react'
import '../css/Navbar.css'
import logoDark from '../src/assets/logo-dark.png'
import logolight from '../src/assets/logo-light.png'

const Navbar = ({darkMode, toggleDarkMode}) => {

  return (
    // <header>
    // <section className={`d-flex justify-content-between align-items-center p-4 ${darkMode?'bg-black navbar-dark':'navbar-light'}`}>
    //   <div className='nav-social'>
    //     <a href="">
    //       <i className="fa fa-instagram" aria-hidden="true"></i>
    //     </a>
    //   </div>
    //   <div className='nav-logo'>
    //     <img src={darkMode?logoDark:logolight} alt="" />
    //   </div>
    //   <div className='toggleDarkMode'>
    //     <i className="fa fa-lightbulb-o light" onClick={toggleDarkMode} aria-hidden="true"></i>
    //   </div>
    // </section>
    // <nav className='bg-black d-flex justify-content-center align-items-center nav'>
    //   <a className={`text-center text-decoration-none py-4 ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Inicio</a>
    //   <a className={`text-center text-decoration-none py-4 ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Asesorías</a>
    //   <a className={`text-center text-decoration-none py-4 ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Catálogo</a>
    //   <a className={`text-center text-decoration-none py-4 ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Calculadoras</a>
    //   <a className={`text-center text-decoration-none py-4 ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Sobre Nosotros</a>
    // </nav>
    // </header>


//     <nav className={`navbar navbar-expand-lg bg-body-tertiary p-0 ${darkMode?'bg-black navbar-dark':'navbar-light'}`}>
//   <div className="">

//     <div className="nav-buttons w-100 d-flex justify-content-between align-items-center">
//     <a href="navbar-social">
//       <i className="fa fa-instagram" aria-hidden="true"></i>
//     </a>
//     <a className="mx-auto navbar-brand" href="#">
//     </a>
//     </div>
//     <div className='d-block w-100'>
//       <h2 className="navbar-toggler mx-auto py-3 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Menu</h2>
//     </div>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <div className="navbar-nav ms-auto">
//         <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Inicio</a>
//         <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Asesorías</a>
//         <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Catálogo</a>
//         <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Calculadoras</a>
//         <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Sobre Nosotros</a>
//       </div>
//     </div>
//   </div>
// </nav>

<nav className={`navbar navbar-expand-lg bg-body-tertiary p-0 ${darkMode?'bg-black navbar-dark':'navbar-light'}`}>
  <div className="container-fluid p-0">
    <a className="navbar-brand" href="#">
    <img src={darkMode?logoDark:logolight} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto">
      <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Inicio</a>
      <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Asesorías</a>
      <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Catálogo</a>
      <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Calculadoras</a>
      <a className={`text-center py-4 nav-link ${darkMode?'nav-link--dark':'nav-link--light'}`} href="#">Sobre Nosotros</a>
    </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar