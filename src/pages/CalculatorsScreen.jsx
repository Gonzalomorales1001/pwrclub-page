import React from 'react'
import Calc from '../components/Calc'
import '../css/Calculators.css'
//importing calculator images
import Wilks_img from '../assets/img/calculators/wilks.png'
import RM_img from '../assets/img/calculators/RM.png'
import RPE_img from '../assets/img/calculators/RPE.png'
import Percentage_img from '../assets/img/calculators/percentage.png'
import Attempts_img from '../assets/img/calculators/attempts.png'
import Plates_img from '../assets/img/calculators/plates.png'

const CalculatorsScreen = () => {

    const handleOnMouseMove=(e)=>{
        const {currentTarget:target}=e
        const rect=target.getBoundingClientRect(),
        x=e.clientX - rect.left,
        y=e.clientY - rect.top

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }

  return (
    <section className="bg-black text-light py-4">
        <div className="cards">
        <Calc title="Wilks" description="Calcula tu fuerza relativa con el coeficiente de puntos Wilks" img={Wilks_img} handleOnMouseMove={handleOnMouseMove}/>
        <Calc title="1RM" description="Calcula tu repetición máxima según el numero de repeticiones realizado" img={RM_img} handleOnMouseMove={handleOnMouseMove}/>
        <Calc title="RPE" description="Calcula tu máximo diario basado en la tabla RPE de Mike Tuchscherer" img={RPE_img} handleOnMouseMove={handleOnMouseMove}/>
        <Calc title="Porcentajes" description="Calcula los porcentajes de tu 1RM" img={Percentage_img} handleOnMouseMove={handleOnMouseMove}/>
        <Calc title="Intentos" description="Prepara un aproximado de tus intentos de competencia" img={Attempts_img} handleOnMouseMove={handleOnMouseMove}/>
        <Calc title="Discos" description="Calcula rápidamente cuantos discos tienes que cargar en la barra" img={Plates_img} handleOnMouseMove={handleOnMouseMove}/>
        </div>
    </section>
  )
}

export default CalculatorsScreen