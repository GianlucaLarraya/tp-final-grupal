import React from 'react';
import { LogoSvg, } from '../../assets/svg/logomz';
import './Footer.css'

export const Footer = () => {

    return(
        <footer>
            <div class="footer-top">
                <div class="container">
                    <div class="row justify-content-between gy-4">
                        <div class="col-sm-4">
                            <LogoSvg iconWidht="120" class="logo2" src="assets/mz solutions 2.png" alt="logo"/>
                        </div>
                    
                        <div class="col-sm-4">
                            <h5 class="text-white">Contacto</h5>
                            <ul class="list-unstyled text-white">
                                <li>Dirección: Reconquista 735</li>
                                <li>Email: malenalopez.mz@gmail.com</li>
                                <li>Tel: 1144178877</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-0">© 2022 copyright all right reserved | Designed by Malena López</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}