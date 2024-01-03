import { FC } from "react";
import Logo_Big from "../../../images/logo-big.png";

const WhyUs: FC = () => {
    return (
        <div>
            <h1>למה לבחור דווקא בנו?</h1>
            <div>
                {" "}
                {/* display: flex */}{" "}
                {/*חשבתי לשים את האלמנטים בפלקס על מנת שיהיו אחד ליד השני */}
                <p>
                    כחברה חדשה, המחויבות שלנו ברורה - אנו מציעים את שירותינו
                    המצוינים בחינם שבו כל אחד מאיתנו מומחה בתחום אחר.
                </p>
                <img
                    src={Logo_Big}
                    alt="Big Weby Logo"
                />
            </div>
        </div>
    );
};

export default WhyUs;
