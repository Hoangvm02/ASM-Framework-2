import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../componnent/banner/Banner'
import Footer from '../../componnent/footer/Footer'
import Header from '../../componnent/header/Header'

type Props = {}

const HomeLayout = () => {
  return (
    <div>
       <div>
       <Header/>
        <Banner/>
       </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout