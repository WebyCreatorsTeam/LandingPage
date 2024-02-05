import { FC } from 'react'
import Logo from '../../UI/Logo/Logo'
import { navigationLinks } from './navigationLinks'
import { Link } from 'react-router-dom'


const NavBar: FC = () => {
  return (
    <nav>
      <Logo />
      {navigationLinks.map((nav, ind) => (
        <Link to={nav.link}>{nav.title}</Link>
      ))}
    </nav>
  )
}

export default NavBar