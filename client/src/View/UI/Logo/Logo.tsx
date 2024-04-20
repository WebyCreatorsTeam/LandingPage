import { FC } from "react";
import Weby from '../../../images/logo2_without_bkgr.svg'

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
