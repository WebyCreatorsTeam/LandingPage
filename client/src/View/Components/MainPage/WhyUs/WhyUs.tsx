import { FC } from "react";
import Jet from "../../../../images/whyus/why-us.png";
import ContactInfo from "../../../UI/ContactInfo/ContactInfo";

const WhyUs: FC = () => {
    return (
        <>
            <div className="whyUs-mobile">
                <div className="whyUs-container">
                    <div className="whyUs-container__text">
                        <h1 className="whyUs-container__text--bold">למה לבחור דווקא בנו?</h1>
                        <p className="whyUs-container__text--bold--p" >
                            כחברה חדשה, המחויבות שלנו ברורה -
                            <br />
                            אנו מציעים את שירותינו המצוינים בחינם,
                            <br />
                            כל אחד מאיתנו מומחה בתחום אחר.
                        </p>
                    </div>
                    <img
                        className="whyUs-container__img"
                        src={Jet}
                        alt="Big Weby Logo"
                    />
                </div>

                <div className="contact-container">
                    <ContactInfo />
                </div>
            </div>
        </>
    );
};

export default WhyUs;
