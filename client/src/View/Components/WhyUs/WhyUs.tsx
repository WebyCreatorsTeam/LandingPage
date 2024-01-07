import { FC } from "react";
import Logo_Big from "../../../images/logo-big.png";

const WhyUs: FC = () => {
    return (
        <div className="whyUs-container">
              <div className="whyUs-container__text">
            <h1 className="whyUs-container__text--bold">למה לבחור דווקא בנו?</h1>
                {" "}
                {/* display: flex */}{" "}
                {/*חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
                <p className="whyUs-container__text--bold--p" >
                    כחברה חדשה, המחויבות שלנו ברורה - 
                    <br/>
                    אנו מציעים את שירותינו המצוינים בחינם 
                   <br/>
                    שבו כל אחד מאיתנו מומחה בתחום אחר.
                </p>
                </div>
                <img
                className="whyUs-container__img"
                    src={Logo_Big}
                    alt="Big Weby Logo"
                />
        </div>
    );
};

export default WhyUs;
