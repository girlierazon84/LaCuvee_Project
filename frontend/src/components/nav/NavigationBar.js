import React from 'react'
import '../../utils/global/css/global.css'
import LC_Icon from '../../utils/images/LC_Icon.png'
import LC_text from '../../utils/images/LC_text.png'
import subtext_transparent from '../../utils/images/subtext_transparent.png'


export default function NavigationBar() {
    return (
        <nav>
            <div className='nav__container'>
                <div className='nav__logo__container'>
                    <img className='nav__logo' src={ LC_Icon } alt='La_Cuvée logo' />
                </div>
                <div className='nav__logo__text__container'>
                    <img className='nav__logo__text' src={ LC_text } alt='La_Cuvée logo text' />
                </div>
                <div className='nav__logo__subtext__container'>
                    <img className='nav__logo__subtext' src={ subtext_transparent } alt='La_Cuvée logo subtext' />
                </div>
            </div>
            <div className='nav__items__container'>
                <ul className='list__item'>
                    <li className='list__items__link'><a href='#startsida' className='active'>Startsida</a></li>
                    <li className='list__items__link'><a href='#om oss'>Om oss</a></li>
                    <li className='list__items__link'><a href='#Om tjänsten'>Om tjänsten</a></li>
                    <li className='list__items__link'><a href='#pris'>Pris</a></li>
                    <li className='list__items__link'><a href='#boka'>Boka</a></li>
                    <li className='list__items__link'><a href='#kontakt'>Kontakt</a></li>
                </ul>
            </div>
        </nav>
    )
}