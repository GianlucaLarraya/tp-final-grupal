import React from 'react';
import { LogoSvg, } from '../../assets/svg/logomz';
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
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#servicios">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )

}