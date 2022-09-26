import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const JsArray = () => {

    
  return (
      <>
          <h2>Array</h2>
          <p>
              Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.
          </p>
          <h6>Temas relacionados</h6>
          <ul>
              
              <li>push</li>
              <li>pop</li>
              <li>
                <a 
                    href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
                    target='_blanck'
                >
                    map
                </a>
            </li>
          </ul>

          <BtnPrimary
              url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array'}
              targ={'_blanck'}
              btnTxt={'Array'}
          />
          <hr />
      </>
  )
}
