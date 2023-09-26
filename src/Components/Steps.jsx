import React from 'react'

import stepOne from '../assets/01.jpg'
import stepTwo from '../assets/02.jpg'
import stepThree from '../assets/03.jpg'
import stepFour from '../assets/04.jpg'


const stepArray = [
    {
      id: 1,
      imagen: stepOne,
      nombre: 'Registrarse',
      descripcion: 'Esta es una prueba para cachar cuanto sube esta parte de la imagen osi '
    },
    {
      id: 2,
      imagen: stepTwo,
      nombre: 'postea',
      descripcion: 'Este es el paso 2'
    },
    {
      id: 3,
      imagen: stepThree,
      nombre: 'interactua',
      descripcion: 'Este es el paso 3'
    },
    {
      id: 4,
      imagen: stepFour,
      nombre: 'vende',
      descripcion: 'Este es el paso 4'
    }
  ]
const Steps = () => {
  return (
    <div className='steps section'>
    <div className="sectionContainer">
      <h2>
        ¿Quieres usar nuestra plataforma?
      </h2>
      <h4>
        ¡Sigue estos sencillos pasos!
      </h4>

      <div className="stepsContainer flex">
          {
            stepArray.map((step)=>{
              return(
                <div key={step.id} className="singleCard">
                <img src= {step.imagen} className='stepImage'/>
                  <div className="stepDetails">
                    <div className="travelerPicture">
                      <img src= {step.imagen} className='stepNumber'/>
                    </div>
                    <div className="stepName">
                      <span>{step.nombre}</span>
                      <p>{step.descripcion}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }




      </div>
    </div>

  </div>
  )
}

export default Steps