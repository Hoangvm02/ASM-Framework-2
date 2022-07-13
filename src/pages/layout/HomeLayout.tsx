import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../componnent/footer/Footer'
import Header from '../../componnent/header/Header'

type Props = {}

const HomeLayout = (props: Props) => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout