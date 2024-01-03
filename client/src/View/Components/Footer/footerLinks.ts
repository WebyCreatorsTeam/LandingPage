import FaceBook from "../../../images/footer/facebook.png";
import LinkedIn from "../../../images/footer/linkedin.png";
// import Email from '../../../images/footer/instagram.png'
import { FooterLinks } from "./types";

export const footerlinks: Array<FooterLinks> = [
    {
        img: FaceBook,
        alt: "facebook",
        url: "https://www.facebook.com/profile.php?id=61554785497612",
    },
    {
        img: LinkedIn,
        alt: "linkedin",
        url: "www.linkedin.com/in/weby-creators-team",
    },
    { img: "Email", alt: "email", url: "mailto:webycreatorsteam@gmail.com" },
];
