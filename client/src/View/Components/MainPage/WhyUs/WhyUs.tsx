import { FC } from "react";
import Jet from "../../../../images/whyus/why-us.png";
import ContactInfo from "../../../UI/ContactInfo/ContactInfo";
import Feedback from "../../../UI/feedback/Feedback";

const WhyUs: FC = () => {
    return (
        <>
            <div className="whyUs-mobile">
                <div className="whyUs-container">
                    <div className="whyUs-container__text">
                        <h1 className="whyUs-container__text--bold">מה לקוחות אומרים עלינו   </h1>
                        <img
                        className="whyUs-container__img"
                        src={Jet}
                        alt="Big Weby Logo"
                    />
                     </div>
                      <Feedback/>

                        <div className="whyUs-container__pointes">***</div>
                    </div>
                  
               

                <div className="contact-container">
                    <ContactInfo />
                </div>
            </div>
        </>
    );
};

export default WhyUs;
