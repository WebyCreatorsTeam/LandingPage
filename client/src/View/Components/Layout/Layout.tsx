import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer'

const Layout: FC = () => {
  return (
    <>
      <NavBar />
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      <Footer />
    </>
  )
}

export default Layout