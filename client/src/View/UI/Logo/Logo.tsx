import { FC } from "react";
import Weby from "../../../images/logo.png";

const Logo: FC = () => {
    return (
        <img
            className="logo-img"
            src={Weby}
            alt="Weby Logo"
        />
    );
};

export default Logo;
