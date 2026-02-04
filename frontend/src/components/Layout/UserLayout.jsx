import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
    <>
    {/* Header */}
    <Header className="border-b bg-amber-500"/>
    {/* Main Content */}
    <main>
      {/* when we use outlet it is a child component when we use when footer header are fix and we want to change only the middle part */}
      <Outlet/>    
    </main>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default UserLayout