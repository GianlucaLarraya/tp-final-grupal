import React from 'react';
import { Link } from 'react-router-dom';
import { LogoSvg, } from '../../assets/svg/logomz';
import { navButtos } from '../../data/navButtos';
import { Cart } from '../CartPP/Cart';
import './NavBar.css'

export const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg py-3 sticky-top bg-light">
          <div class="container">
            <a class="navbar-brand">
               <LogoSvg iconWidht='120' />
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            {navButtos.map(
                            ({ text, link }) => (<li key={text} className='nav-item'>
                                <Link className='nav-link' aria-current='page' to={link} target='_self'> {text} </Link>
                            </li>)
                        )}
                        <li class="nav-item">
                <a class="nav-link" href="#servicios">Servicios</a>
              </li>
              <li>
                <Cart />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )

}