import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer'
import UserForm from '../Form/Form'

const Layout: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <UserForm /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Layout