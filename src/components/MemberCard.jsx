import React from 'react'
import '../css/MemberCard.css'

const MemberCard = ({id,name,img,specialization,description}) => {
  return (
    <>
    <div className="card member-card my-2">
    <div className="card-header">{specialization}</div>
    <img src={img} className="card-img-top member-card__img rounded-0" alt={name}/>
    <article className="card-body card-body--member d-flex flex-column justify-content-between">
      <header>
        <h5 className="card-title member-card__name">{name}</h5>
        <hr />
      </header>
      <main>
        <p className="card-text">{description}</p>
      </main>
      <footer>
        <a href="#" className="btn btn-outline-light d-grid rounded-0">Ver Más</a>
      </footer>
    </article>
  </div>
    </>
  )
}

export default MemberCard