import React from 'react'
import MemberCard from '../components/MemberCard.jsx'
import {entrenadores,nutricionistas} from '../data/members.js'

const AsesoriasScreen = () => {

  return (
    <section className='bg-asesorias text-light'>
        <h1 className='text-center'>Asesorías</h1>

        <h3 className='text-center ms-md-5 text-md-start'>Asesorías Deportivas</h3>
        <hr />
        <div className="container">
            <div className="row">
                {entrenadores.map((trainer,index)=>{
                    return (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <MemberCard key={trainer.id} img={trainer.img} name={trainer.name} specialization={trainer.specialization} description={trainer.description}  />
                        </div>
                    )
                })}
            </div>
        </div>
        <br />
        <h3 className='text-center ms-md-5 text-md-start'>Asesorías Nutricionales</h3>
        <hr />
        <div className="container">
            <div className="row">
                {nutricionistas.map((nutri,index)=>{
                    return (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <MemberCard key={nutri.id} img={nutri.img} name={nutri.name} specialization={nutri.specialization} description={nutri.description} />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default AsesoriasScreen