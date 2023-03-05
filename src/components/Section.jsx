import React from 'react'
import '../css/Section.css'

//images

const Section = ({darkMode,title,text,textEnd,background}) => {
  return (
    <section className={`p-2 pwr-section pwr-section-bg-${background}`}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className={`pwr-section__info p-4 col-12 col-md-8 ${textEnd?'offset-md-4 offset-lg-6 text-md-end':'text-md-start'} col-lg-6 text-center`}>
                    <h2 className='pwr-section__title'>{title}</h2>
                    <p className="pwr-section__text">{text}</p>
                    <a href="#" className={`btn btn-outline-light rounded-0`} data-bs-toggle="modal" data-bs-target="#ModalTicket">Button</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section