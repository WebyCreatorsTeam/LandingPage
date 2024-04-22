import { FC } from "react";
import Weby from '../../../images/logo2_without_bkgr.svg'
import { Link, useNavigate } from "react-router-dom";
import Scroll from 'react-scroll';

const Logo: FC = () => {
    return (
        <Link to="/">
            <img
                className="logo-img"
                src={Weby}
                alt="Weby Logo"
            />
        </Link>
    );
};

export default Logo;
