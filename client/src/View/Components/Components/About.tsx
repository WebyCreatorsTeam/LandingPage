import { FC } from 'react'
import { Element } from 'react-scroll';

const About: FC = () => {
    return (
        <Element name="about">
            <section
            // style={{ margin: "100vh  0" }}
            >
                <h2>מי אנחנו?</h2>
                <p>
                    Weby היא בית תוכנה המתמקדת פתרונות דיגיטליים מותאמים אישית לצרכי הלקוחות, עם דגש על עיצוב משתמש נגיש, ידידותי ומתקדם.
                    המטרה שלנו היא לספק לך את הכלים והפיתרונות המתקדמים ביותר כדי להבטיח שהאתר שלך יהיה לא רק מרהיב מבחינה חזותית,
                    אלא גם יעיל ויעיל מבחינה טכנולוגית.
                </p>
            </section>
        </Element>
    )
}

export default About