import { FC } from "react";
import Jet from "../../../../images/whyus/why-us.png";
import ContactInfo from "../../../UI/ContactInfo/ContactInfo";

const WhyUs: FC = () => {
    return (
        <>
            <div className="whyUs-mobile">
                <div className="whyUs-container">
                    <div className="whyUs-container__text">
                        <h2 className="whyUs-container__text--bold">מי אנחנו?</h2>
                        <p className="whyUs-container__text--bold--p">
                            Weby היא בית תוכנה המתמקדת  פתרונות דיגיטליים מותאמים אישית לצרכי הלקוחות, עם דגש על עיצוב משתמש נגיש, ידידותי ומתקדם.<br />
                            המטרה שלנו היא לספק לך את הכלים והפיתרונות המתקדמים ביותר כדי להבטיח שהאתר שלך יהיה לא רק מרהיב מבחינה חזותית, אלא גם יעיל ויעיל מבחינה טכנולוגית.
                        </p>
                        {/* <h1 className="whyUs-container__text--bold">למה לבחור דווקא בנו?</h1>
                        <p className="whyUs-container__text--bold--p" >
                            כחברה חדשה, המחויבות שלנו ברורה -
                            <br />
                            אנו מציעים את שירותינו המצוינים בחינם,
                            <br />
                            כל אחד מאיתנו מומחה בתחום אחר.
                        </p> */}
                    </div>
                    <img
                        className="whyUs-container__img"
                        src={Jet}
                        alt="Big Weby Logo"
                    />
                </div>

                {/* <div className="contact-container">
                    <ContactInfo />
                </div> */}
            </div>
        </>
    );
};

export default WhyUs;
