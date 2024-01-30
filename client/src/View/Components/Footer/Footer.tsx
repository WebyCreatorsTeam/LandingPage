import { FC } from "react";
import { footerlinks } from "./footerLinks";
import LogoImage from '../../../style/../images/footer/logo.png'

const Footer: FC = () => {
    return (
        <footer
            className="footer-container"
        >
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
