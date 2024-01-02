import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const Layout: FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout