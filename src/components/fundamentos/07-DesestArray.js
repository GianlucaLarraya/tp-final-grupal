import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const DesestArray = () => {

    const personajes = ['Goku', 'Vegeta', 'Trunks']

    // 1 mediante comas elejimos la posición del array

    // 2 
 
    // 3 Array con funciones - Ejecucuón


  return (
    <>
        <h2>Desestructuración Array</h2>
            <p>La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.</p>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Renombrado automático de variables en VsCode <b>Windows "F2" Mac " fn + F2 "</b> </li>

            </ul>  
          <BtnPrimary 
              url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'} 
            targ={'_blanck'}
            btnTxt={'Desestructuración'}
            />
        <hr/>
    </>
  )
}
