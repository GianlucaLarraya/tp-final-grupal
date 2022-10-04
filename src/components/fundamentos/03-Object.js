import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const ObjetosLiterales = () => {

    const persona ={
        nombre: 'Claudio',
        apellido: 'Uccello',
        edad: 46,
        address: {
            calle: 'calle uno',
            puerta: 1234,
            zip: 1419,
        }
    }

    console.log(persona)

    persona.edad = 35

    console.log(persona)

    console.log(persona.address.puerta)

    const persona2 = {...persona}
    
    persona2.nombre = 'Pedro'
    persona2.apellido = 'Gommes'

    console.log(persona2)
    console.log(persona)


    return (
        <>
            <h2>Objetos Literales</h2>
            <p>
                Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.
            </p>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Console.table</li>
                <li>Operador Spread</li>
            </ul>

            <BtnPrimary
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects'}
                targ={'_blanck'}
                btnTxt={' Objetos Literales'}
            />
            <hr />
        </>
    )
}
