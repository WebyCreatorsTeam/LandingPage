import { FC, useState } from 'react'
import Logo from '../../../UI/Logo/Logo'
import { navigationLinks } from './navigationLinks'
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll';
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar: FC = () => {
  const desktop = useMediaQuery({ query: '(min-width: 768px)' })
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className='navigation'>
        {desktop ? <> {/* desktop */}
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
                >{nav.title}</Scroll.Link>
            ))}
            {/* <Link to="/blog">בלוג</Link> */}
          </div>
          <div className='navigation__contact'>
            <Scroll.Link
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              דברו איתנו
            </Scroll.Link>
          </div>
        </>
          :
          <> {/* mobile */}
            <div className='menu-btn' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}</div>
            {(toggleMenu) && (
              <div className='navigation__menu'>
                <div className='navigation__links'>
                  {navigationLinks.map((nav, ind) => (
                    nav.link.includes("/") ? <Link to={nav.link}>{nav.title}</Link> :
                      <Scroll.Link
                        key={ind}
                        to={nav.link}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >{nav.title}</Scroll.Link>
                  ))}
                  {/* <Link
                    to="/blog"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >בלוג</Link> */}
                </div>
                <div className='navigation__contact'>
                  <Scroll.Link
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    דברו איתנו
                  </Scroll.Link>
                </div>
              </div>)}
            <div className='navigation__logo' onClick={() => setToggleMenu(false)}>
              <Logo />
            </div>
          </>}
      </div>
    </nav>)
}

export default NavBar