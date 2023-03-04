import React from 'react'
import '../css/Section.css'

const Section = ({textEnd,textDark,background}) => {
  return (
    <section className='p-2 pwr-section text-light'>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className={`pwr-section__info p-4 col-12 col-md-8 ${textEnd?'offset-md-4 offset-lg-6 text-md-end':'text-md-start'} col-lg-6 text-center`}>
                    <h2>Maxi Zeballos</h2>
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi architecto nihil voluptatum sint molestiae libero illum laudantium possimus necessitatibus deserunt.</p>
                    <a href="#" className="btn btn-outline-light rounded-0" data-bs-toggle="modal" data-bs-target="#ModalTicket">Button</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section