import React from 'react'
import '../css/Navbar&Footer.css'

const Footer = () => {
  return (
    <footer className='text-white p-5 pwr-footer d-flex justify-content-around align-items-center'>
        <div className="pwr-footer__title">
          <h5>PowerClub</h5>
          <small className='d-block'>Powerlifting</small>
        </div>
        <div className="pwr-footer__social">
          <table>
            <caption>Nuestras Redes Sociales</caption>
            <tbody>
              <tr>
                <td><i className="fa fa-instagram" aria-hidden="true"></i></td>
                <td>@pwrclubpowerlifting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pwr-footer__aboutus">

        </div>
    </footer>
  )
}

export default Footer