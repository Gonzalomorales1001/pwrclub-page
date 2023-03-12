import React from 'react'
import '../css/Calculators.css'

const Calc = ({title,description,img,handleOnMouseMove}) => {
  return (
<div className="card--calc" onMouseMove={handleOnMouseMove}>
    <div className="card--calc__border"></div>
    <div className="card--calc__content">
        <div className="card--calc__content-detail w-100 text-center">
        <img src={img} alt={title} className="card--calc__img mb-4"/>
        <h4 className='text-lg-start'>Calculadora de {title}</h4>
        <small className='text-muted text-lg-start d-block'>{description}</small>
        </div>
    </div>
</div>
  )
}

export default Calc