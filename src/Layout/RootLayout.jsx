import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { ToastContainer } from 'react-toastify'

export const RootLayout = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
