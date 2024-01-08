import { FC } from "react";
import Logo from "../../UI/Logo/Logo";
import { footerlinks } from "./footerLinks";

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

             <Logo /> 
             
        </div>
        </footer>

    );
};

export default Footer;
