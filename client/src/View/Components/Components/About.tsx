import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

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
                <div className='about__info'>
                    <h2>מי אנחנו?</h2>
                    <p>
                        Weby היא בית תוכנה המתמקדת פתרונות דיגיטליים מותאמים אישית לצרכי הלקוחות, עם דגש על עיצוב משתמש נגיש, ידידותי ומתקדם.
                        המטרה שלנו היא לספק לך את הכלים והפיתרונות המתקדמים ביותר כדי להבטיח שהאתר שלך יהיה לא רק מרהיב מבחינה חזותית,
                        אלא גם יעיל ויעיל מבחינה טכנולוגית.
                    </p>
                </div>
            </section>
        </Element>
    )
}

export default About