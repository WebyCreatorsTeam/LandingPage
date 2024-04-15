import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

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