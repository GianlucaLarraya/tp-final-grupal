import React from 'react'
import { productos } from '../../data/productos'
import { HeroBanner } from '../HeroBannerPP/HeroBanner'
import { Portfolio } from '../PortfolioPP/Portfolio'
import { Servicios } from '../ServiciosPP/Servicios'


export const Home = () => {

  
    return (
      <>
            <HeroBanner />
            <Servicios />
            <Portfolio  data={productos}/>
  
      </>
    )
  }
  