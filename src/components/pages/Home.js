import React from 'react'
import { productos } from '../../data/productos'
import { Contact } from '../ContactPP/Contact'
import { Footer } from '../FooterPP/Footer'
import { HeroBanner } from '../HeroBannerPP/HeroBanner'
import { Portfolio } from '../PortfolioPP/Portfolio'
import { Servicios } from '../ServiciosPP/Servicios'
import { Team } from '../TeamPP/Team'


export const Home = () => {

  
  return (
    <>
          <HeroBanner />
          <Servicios />
          <Team />
          <Contact />
          <Footer />

    </>
  ) 
}
