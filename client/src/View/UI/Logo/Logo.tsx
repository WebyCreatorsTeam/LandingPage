import { FC } from "react";
import Weby from '../../../images/logo2_without_bkgr.svg'
import { Link } from "react-router-dom";
//import Scroll from 'react-scroll';

const Logo: FC = () => {
    return (
        <Link to="/" className="logo-url" title="לעמוד הבית">
            <img
                className="logo-img"
                src={Weby}
                alt="Weby Logo"
                width={230}
                height={60}
                loading="lazy"
            />
        </Link>
    );
};

export default Logo;
