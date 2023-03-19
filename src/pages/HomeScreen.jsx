import React from 'react'
import Section from '../components/Section'
import '../css/Section.css'

const HomeScreen = ({darkMode}) => {
  return (
    <div className='grayscale-80'>   

    <section className={`p-2 pwr-section pwr-section-bg-venyto1`}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className={`pwr-section__info p-4 col-12 text-center`}>
                    <h2 className='pwr-section__title'>Bienvenido a PWRClub Powerlifting!</h2>
                    <p className="pwr-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum voluptatibus doloremque reiciendis consectetur est debitis dolorum accusamus tempore natus enim, neque eos reprehenderit vitae commodi laboriosam autem rem! Inventore ipsam minima omnis quisquam voluptates ea a ducimus, architecto aperiam accusamus, maiores eveniet, provident ullam. Porro voluptatem voluptatum beatae quibusdam?</p>
                </div>
            </div>
        </div>
    </section>

    <Section title={"Asesorías"} text={"aaaaaaaaaaaaaaaaaaaaaaa  2aaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaaa"} textEnd={false} background={"negrasq2"}/>
    <Section title={"Nuestro Catálogo"} text={"aaaaaaaaaaaaaaaa  2aaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa"} textEnd={true} background={"venytobp1"}/>
    <Section title={"Calculadoras"} text={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   jjj  jk aaaaaaaaaaaaaa"} textEnd={false} background={"gonchobp1"}/>
    <Section title={"Conocenos"} text={"a  2aaaaaa aaaaa aaaaa a  2aaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaa"} textEnd={true} background={"venyto2"}/>
    </div>
  )
}

export default HomeScreen