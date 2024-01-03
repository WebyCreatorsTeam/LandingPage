import { FC } from "react";
import Logo from "../../UI/Logo/Logo";
import { footerlinks } from "./footerLinks";

const Footer: FC = () => {
    return (
        <footer
        // className="footer-base"
        >
            <Logo />
            {footerlinks.map((lnk, index) => (
                <a
                    href={lnk.url}
                    key={index}
                    // className="footer-base__link"
                >
                    <img
                        src={lnk.img}
                        alt={lnk.alt}
                        // className="footer-base__link--img"
                    />
                </a>
            ))}
        </footer>
    );
};

export default Footer;
