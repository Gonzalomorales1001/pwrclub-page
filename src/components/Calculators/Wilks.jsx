import React, { useState } from 'react'
import '../../css/Calculators.css'

const Wilks = () => {
    const [squat, setSquat] = useState(0)
    const [bench, setBench] = useState(0)
    const [deadlift, setDeadlift] = useState(0)
    const [total, setTotal] = useState(0)
    
    const [bodyweight, setBodyweight] = useState(0)

    const [wilks, setWilks] = useState(0)   

    const calculateTotal=()=>{
        const sq=parseFloat(squat)
        const bp=parseFloat(bench)
        const dl=parseFloat(deadlift)

        setTotal(sq+bp+dl)
    }

    const calculateForMen=()=>{
        setWilks(total)
    }

    const calculateForWomen=()=>{
        setWilks(total)
    }
  return (
    <section className='bg-black text-light p-1'>
        <h1 className='text-center'>Calculadora de puntos Wilks</h1>
        <div className="container bg-white-transparency p-4 rounded-3px">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <div className=''>
                        <h4>Completa</h4>
                        <div className='d-flex gap-4 align-items-center my-3'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">Kilos (KG)</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">Libras (lb)</label>
                            </div>
                        </div>
                        <div className="">
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text wilks__inputs" id="inputGroup-sizing-lg">Squat</span>
                                <input type="text" className="form-control wilks__inputs" onInput={(e)=>setSquat(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text wilks__inputs" id="inputGroup-sizing-lg">Bench Press</span>
                                <input type="text" className="form-control wilks__inputs" onInput={(e)=>setBench(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text wilks__inputs" id="inputGroup-sizing-lg">Deadlift</span>
                                <input type="text" className="form-control wilks__inputs" onInput={(e)=>setDeadlift(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text wilks__inputs" id="inputGroup-sizing-lg">Peso Corporal</span>
                            <input type="text" className="form-control wilks__inputs" onInput={(e)=>setBodyweight(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2">
                        <button href="#" onClick={calculateTotal} className="btn btn-outline-light w-100 rounded-0">Fórmula para Hombres</button>
                        <button href="#" onClick={calculateTotal} className="btn btn-outline-light w-100 rounded-0">Fórmula para Mujeres</button>
                    </div>
                </div>
                <div className="col text-center pt-4">
                    <h2>Puntos Wilks</h2>
                    <p className='wilks'>{total}</p>
                    <h4>Dots</h4>
                    <p className="dots">420</p>

                    <button href="#" className="btn btn-outline-light btn-sm rounded-0">Limpiar</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Wilks