import { FC } from 'react'
import HeaderImageDesc from '../../../images/whoAreWe/about-desc.webp'
import HeaderImageMob from '../../../images/whoAreWe/about-modile.webp'
import Scroll from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
;

const Header: FC = () => {
    const desktop = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <header id="header" className='elementWidth header'>
            <div className='header__text'>
                {/* <p>יש לכם עסק? מיזם? סטארטפ?</p> */}
                <h1>
                    בואו לבנות את 
                    ה
                    <span style={{ color: "#8902FF" }}>אתר </span>
                     שלכם,
                    <br />
                    שיקח אתכם צעד אחד
                    <span style={{ color: "#8902FF" }}> קדימה </span>
                </h1>
                <button>
                    <Scroll.Link
                        to="contact"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        כתבו לנו
                    </Scroll.Link>
                </button>
            </div>
            <div className='header__image'>
                <img src={desktop ? HeaderImageDesc : HeaderImageMob} alt="שולחן עם מחשב עליו מספר מסכים שמציגים עמודים שונים" width={desktop ? 720 : 370 } height={desktop ? 378 : 194} />
            </div>
        </header>
    )
}


export default Header