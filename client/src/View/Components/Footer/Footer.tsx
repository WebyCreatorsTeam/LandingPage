import { FC } from "react";
// import { footerlinks } from "./footerLinks";
// import LogoImage from '../../../style/../images/footer/logo.png'
// import { footerContactInfo } from './footerContactInfo'
import Logo from "../../UI/Logo/Logo";
import Phone from "../../../images/footer/phone.svg"
import Mail from "../../../images/footer/email.svg"
import Linkedin from "../../../images/footer/linkedin.svg"
import Facebook from "../../../images/footer/facebook.svg"

const Footer: FC = () => {
    return (
        <footer className="footer-container">
            <div>
                <Logo />
                <div className="footer-container__social">
                    <img src={Facebook} alt="פייסבוק" width={40} height={40} />
                    <img src={Linkedin} alt="לינקדאין" width={40} height={40} />
                    <img src="" alt="יוטיוב" width={40} height={40} />
                </div>
                <div className="footer-container__phone">
                    <div className="footer-container__phone--deal">
                        <a href="tel:+972547991963">ראות 054-799-1963</a>
                        <a href="tel:+972526299431">קטיה 052-629-9431</a>
                    </div>
                    <img src={Phone} alt="אייקון טלפון" width={25} height={40} />
                </div>
                <div className="footer-container__email">
                    <a href="mailto:webycreatorsteam@gmail.com">webycreatorsteam@gmail.com</a>
                    <img src={Mail} alt="אייקון אימייל" width={40} height={32} />
                </div>
            </div>
            {/* <div className="footer-contact-container" >
             צרו קשר 
             {footerContactInfo.map((contact,index) => (
            < div className="footer-contact-container__div" key={index}>
                <img
                 className="footer-contact-container__div--img"
                 src={contact.img}
                 alt={contact.alt}
                />
                <p  className="footer-contact-container__div--img--p">{contact.text}</p>
                </div>
             ))}
            </div>

            <div>
                {footerlinks.map((lnk, index) => (
                    <a
                        className="footer-container__link"
                        target="_blank"
                        rel="noreferrer"
                        href={lnk.url}
                        key={index}
                    >
                        <img
                            className="footer-container__link--img"
                            src={lnk.img}
                            alt={lnk.alt}
                        />
                    </a>
                ))}
            </div>
            <img src={LogoImage} alt="footer- logo"></img> */}

        </footer>
    );
};

export default Footer;
