import { FC } from "react";
import Weby from "../../../images/logo.png";

const Logo: FC = () => {
    return (
        <a href="/">
            <img
                className="logo-img"
                src={Weby}
                alt="Weby Logo"
            />
        </a>
    );
};

export default Logo;
