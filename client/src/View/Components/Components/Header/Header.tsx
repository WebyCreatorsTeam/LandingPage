import { FC, useEffect } from 'react'
import HeaderImage from '../../../../images/header/header-img/header-image.webp'
import { useLocation } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header id="header" className='header'>
            <div className='header__text'>
                <p>יש לכם עסק? מיזם? סטארטפ?</p>
                <h1>
                    בואו לבנות את האתר שלכם,
                    <br />
                    שיקח אתכם צעד אחד
                    <span style={{ color: "#8902FF" }}> קדימה </span>
                </h1>
                <button>כתבו לנו</button>
            </div>
            <div className='header__image'>
                <img src={HeaderImage} alt="אישה יושבת" />
            </div>
        </header>
    )
}


export default Header