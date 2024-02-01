import { FC } from "react";
import Jet from "../../../images/whyus/why-us.png";
import ContactInfo from "../../UI/ContactInfo/ContactInfo";

const WhyUs: FC = () => {
    return (
        <>
        <div className="whyUs-container">
            <div className="whyUs-container__text">
                <h1 className="whyUs-container__text--bold">למה לבחור דווקא בנו?</h1>
                <p className="whyUs-container__text--bold--p" >
                    כחברה חדשה, המחויבות שלנו ברורה -
                    <br />
                    אנו מציעים את שירותינו המצוינים בחינם
                    <br />
                    שבו כל אחד מאיתנו מומחה בתחום אחר.
                </p>
            </div>
            <img
                className="whyUs-container__img"
                src={Jet}
                alt="Big Weby Logo"
            />
        </div>

        <div style={{backgroundColor: "white", width:'100%', padding: " 10px 0", margin: "0"}}>
          <ContactInfo/>
        </div>
        </>
    );
};

export default WhyUs;
