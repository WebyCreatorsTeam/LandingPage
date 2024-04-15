import { FC } from 'react'
import Logo from '../../UI/Logo/Logo'
import { navigationLinks } from './navigationLinks'
import { Link } from 'react-router-dom'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Scroll from 'react-scroll';

const NavBar: FC = () => {
  return (
    <nav>
      <div className='navigation'>
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
      </div>
      <Logo />
    </nav>
  )
}

export default NavBar