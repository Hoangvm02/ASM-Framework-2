import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './pages/layout/HomeLayout'
import AdminLayout from './pages/layout/AdminLayout'
import Products from './pages/admin/products/Products'
import DashboardLayout from './componnent/Dassboard/Dassboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
      <Route>
        <Route index element={< HomeLayout/>} />
      </Route>
      <Route path='/admin' element={< DashboardLayout/>}>
        {/* <Route index element={<AdminLayout/>} /> */}
        <Route path='products' element={< Products/>}/>
      </Route>
   </Routes>
  )
}

export default App
