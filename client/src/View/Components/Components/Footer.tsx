import { FC } from "react";
import Logo from "../../UI/Logo/Logo";
import Phone from "../../../images/footer/phone.svg"
import Mail from "../../../images/footer/email.svg"
import Linkedin from "../../../images/footer/linkedin.svg"
import Facebook from "../../../images/footer/facebook.svg"
import YouTube from "../../../images/footer/yt icon.svg"

const Footer: FC = () => {
    return (
        <footer className="elementWidth footer-container">
            <div>
                <Logo />
                <div className="footer-container__social">
                    <a href="https://www.facebook.com/profile.php?id=61554785497612" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="פייסבוק" width={40} height={40} loading="lazy" title="פייסבוק" />
                    </a>
                    <a href="https://www.linkedin.com/company/101561570/admin/feed/posts" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="לינקדאין" width={40} height={40} loading="lazy" title="לינקדאין" />
                    </a>
                    <a href="https://www.youtube.com/@Weby-Create-team" target="_blank" rel="noreferrer">
                        <img src={YouTube} alt="יוטיוב" width={40} height={40} loading="lazy" title="יוטיוב" />
                    </a>
                </div>
                <div className="footer-container__phone">
                    <div className="footer-container__phone--deal">
                        <a href="tel:+972547991963" title="התקשר לראות לפרטים">ראות 054-799-1963</a>
                        <a href="tel:+972526299431" title="התקשר לקטיה לפרטים">קטיה 052-629-9431</a>
                    </div>
                    <img src={Phone} alt="אייקון טלפון" width={25} height={40} loading="lazy" />
                </div>
                <div className="footer-container__email">
                    <a href="mailto:webycreatorsteam@gmail.com">webycreatorsteam@gmail.com</a>
                    <img src={Mail} alt="אייקון אימייל" width={40} height={32} loading="lazy" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
