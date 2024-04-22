import { FC } from 'react'
import Logo from '../../../UI/Logo/Logo'
import { navigationLinks } from './navigationLinks'
import { Link, useNavigate } from 'react-router-dom'
import Scroll from 'react-scroll';

const NavBar: FC = () => {
  const navigate = useNavigate(); // From react-router v6

  return (
    <nav >
      <div className='navigation'>
        <div className='navigation__logo'>
          <Logo />
        </div>
        <div className='navigation__links'>
          {navigationLinks.map((nav, ind) => (
            nav.link.includes("/") ? <Link to={nav.link}>{nav.title}</Link> :
              <Scroll.Link
                key={ind}
                to={nav.link}
                smooth={true}
                offset={50}
                duration={500}
              // onClick={() => navigate("/", { state: { targetId: nav.link } })}
              >{nav.title}</Scroll.Link>
          ))}
          <Link to="/blog">בלוג</Link>
        </div>
        <div className='navigation__contact'>
          <Scroll.Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
          // containerId="containerElement"
          // onClick={() => navigate("/", { state: { targetId: "contact" } })}
          >
            דברו איתנו
          </Scroll.Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar