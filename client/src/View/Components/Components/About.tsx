import { FC } from 'react'
import { Element } from 'react-scroll';
import AboutImage from '../../../images/whoAreWe/about.webp';
import WebyLogo from '../../../images/logo2_without_bkgr.svg';

const About: FC = () => {
    return (
        <Element name="about" id="about">
            <section className='about'>
                <h2>מי אנחנו?</h2>
                <div className='elementWidth about__info'>
                    <p className='about__info--text'>
                        <span>WEBY</span> היא בית תוכנה המתמקדת בפתרונות דיגיטליים מותאמים אישית לצרכי הלקוחות.
                        <br />
                        אנחנו שמים דגש על עיצוב נגיש, ידידותי ומתקדם.
                        <br />
                        המטרה שלנו היא לספק לך את הכלים והפיתרונות המתקדמים ביותר כדי להבטיח
                        <br />
                        שהאתר שלך יהיה לא רק מרהיב מבחינה חזותית, אלא גם יעיל ויעיל מבחינה טכנולוגית.
                    </p>
                    <div className='about__info--logo'>
                        <img src={WebyLogo} alt="וובי לוגו" loading="lazy" />
                    </div>
                    <div className='about__info--image'>
                        <img src={AboutImage} alt="שולחן עם מכשירים אלקטרוניים" loading="lazy" width={617} height={523} />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default About