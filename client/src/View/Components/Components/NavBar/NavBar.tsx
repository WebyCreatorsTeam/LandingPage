import { FC, useState } from 'react'
import Logo from '../../../UI/Logo/Logo'
import { navigationLinks } from './navigationLinks'
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavHashLink } from 'react-router-hash-link';

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
              <NavHashLink
                key={ind}
                smooth
                to={`/#${nav.link}`}
              >{nav.title}</NavHashLink>
            ))}
            <NavHashLink to="/blog#">בלוג</NavHashLink>
          </div>
          <div className='navigation__contact'>
            <NavHashLink
              to="/#contact"
              smooth
            >
              דברו איתנו
            </NavHashLink>
          </div>
        </>
          :
          <> {/* mobile */}
            <div className='menu-btn' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}</div>
            {(toggleMenu) && (
              <div className='navigation__menu'>
                <div className='navigation__links'>
                  {navigationLinks.map((nav, ind) => (
                    <NavHashLink
                      key={ind}
                      smooth
                      to={`/#${nav.link}`}
                      onClick={() => {
                        setToggleMenu(!toggleMenu)
                      }}
                    >{nav.title}</NavHashLink>
                  ))}
                  <NavHashLink
                    to="/blog#"

                    onClick={() => {
                      setToggleMenu(!toggleMenu)
                    }}
                  >בלוג</NavHashLink>
                </div>
                <div className='navigation__contact'>
                  <NavHashLink
                    to="#contact"
                    smooth
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    דברו איתנו
                  </NavHashLink>
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