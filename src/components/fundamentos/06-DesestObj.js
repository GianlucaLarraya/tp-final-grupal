import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const DesestObj = () => {

    const persona ={
        nombre: 'Tony',
        edad: 45,
        clave: 'Ironman',
        // rango: 'Lider de equipo', 
    }

    console.log(persona)
    // 1 Notación por punto

    // 2 Desesctructuración de Objetos

    // 3 Desectructuración en el cuerpo de la función

    // 3.1 Desectructuración en el argumento de la función

    // 4 Retornar un objeto

    // 4.1 Desectructurar objetos anidados

  return (
    <>
        <h2>Desestructuración Objetos</h2>
            <p>La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.</p>
            <h6>Temas relacionados</h6>
            <ul>
                <li>
                    Renombrar variable " : nuevoNombre "
                </li>
                <li>
                    valor por defecto
                </li>
                <li>
                    Desectructurar objetos anidados " :{` { objetoAnidado }`} "
                </li>
            </ul>  
          <BtnPrimary 
              url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos'} 
            targ={'_blanck'}
            btnTxt={'Desestructuración'}
            />
        <hr/>
    </>
  )
}
