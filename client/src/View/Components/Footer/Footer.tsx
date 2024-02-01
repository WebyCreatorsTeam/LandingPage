import { FC } from "react";
import { footerlinks } from "./footerLinks";
import LogoImage from '../../../style/../images/footer/logo.png'
import {footerContactInfo} from './footerContactInfo'

const Footer: FC = () => {
    return (
        <footer
            className="footer-container"
        >
             <div className="contact-container" >
             צרו קשר 
             {footerContactInfo.map((contact,index) => (
            < div className="contact-container__div" key={index}>
                <img
                 className="contact-container__div--img"
                 src={contact.img}
                 alt={contact.alt}
                />
                <p  className="contact-container__div--img--p">{contact.text}</p>
                </div>
             ))}
            </div>

            <div>
                {footerlinks.map((lnk, index) => (
                    <a
                        className="footer-container__link"
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
            <img src={LogoImage} alt="footer- logo"></img>

        </footer>
    );
};

export default Footer;
