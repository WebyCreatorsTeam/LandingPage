import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import AboutImage from '../../../images/whoAreWe/Component 21.webp';
import WebyLogo from '../../../images/logo2_without_bkgr.svg';

const About: FC = () => {
    // const { state } = useLocation();
    // console.log(state)

    // const { targetId } = state || {};

    // useEffect(() => {
    //     const el = document.getElementById(targetId);
    //     if (el) {
    //         el.scrollIntoView({ block: "start" });
    //     }
    // }, [targetId]);

    return (
        <Element name="about" id="about">
            <section className='about'>
                <div className='elementWidth about__info'>
                    <h2>מי אנחנו?</h2>
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
                        <img src={WebyLogo} alt="וובי לוגו" />
                    </div>
                    <div className='about__info--image'>
                        <img src={AboutImage} alt="שולחן עם מכשירים אלקטרוניים" />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default About