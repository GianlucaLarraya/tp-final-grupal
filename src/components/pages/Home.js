import React from 'react'
import { productos } from '../../data/productos'
import { Footer } from '../Footer/Footer'
import { HeroBanner } from '../HeroBannerPP/HeroBanner'
import { Portfolio } from '../PortfolioPP/Portfolio'
import { Servicios } from '../ServiciosPP/Servicios'
import { Team } from '../Team/Team'


export const Home = () => {

  
  return (
    <>
          <HeroBanner />
          <Servicios />
          <Portfolio  data={productos}/>
          <Team />
          <Footer />

    </>
  ) 
}
