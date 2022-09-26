import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const ObjetosLiterales = () => {


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
