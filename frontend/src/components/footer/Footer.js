import React from 'react'
import '../../utils/global/css/global.css'
import LaCuvee_Logo from '../../utils/images/LaCuvee_Logo.png'

export default function Footer () {
    return (
        <footer className='footer__container'>
            <div className='footer__logo__container'>
                <img className='footer__logo'
                     src={ LaCuvee_Logo }
                     alt='La_Cuvée logo'/>
            </div>
            <div className='links__item__faq'>
                <a href='#faq'>FAQ</a>
            </div>
            <div className='links__item__vag'>
                <a href='#vagbeskrivning&karta'>Vägbeskrivning & Karta</a>
            </div>
            <div className='contact__info__container'>
                <h5><u>Nå oss här:</u></h5>
                <div className='contact__details'>
                    <i className="far fa-envelope"/>
                    <h6>www.lacuvee@tokali.se</h6>
                    <i className="fas fa-phone-alt"/>
                    <h6>031 799 78 78</h6>
                    <i className="fas fa-mobile-alt"/>
                    <h6>0768 024 032</h6>
                    <i className="fas fa-map-marker-alt"/>
                    <h6>Ättestigen 8, 41674 Göteborg</h6>
                </div>
                <h5><u>Följa oss:</u></h5>
                <div className='social__media__container'>
                    <i className="fab fa-facebook-f"/>
                    <i className="fab fa-instagram"/>
                    <i className="fab fa-youtube"/>
                    <i className="fab fa-twitter"/>
                    <i className="fab fa-snapchat-ghost"/>
                    <i className="fab fa-pinterest"/>
                </div>
            </div>

            <div className='copyright__container'>
                <h5>LC</h5>
                <i className="far fa-copyright"/>
                <h5 className='year'>2022</h5>
            </div>
        </footer>
    )
}