import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Carousel from 'react-bootstrap/Carousel';

//Importar imágenes
import img1 from '../assets/c1.png'

const Carrusel = () => {
    //Animación de entrada
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])

  return (
    <div className='Carrusel section' data-aos='fade-up' data-aos-duration='2500'>
       <Carousel>
        <Carousel.Item>
          <img className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrusel