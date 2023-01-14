import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../style.css'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavLink className={({active}) => active && 'active'} to={"/"} style={{
                    margin:"10px"
                }}>
                    Home
                </NavLink>
                <NavLink to={"/login"} style={{
                    margin:"10px"
                }}>
                    Giriş
                </NavLink>
                <NavLink to={"/signup"} style={{
                    margin:"10px"
                }}>
                    Kayıt
                </NavLink>
                <NavLink to={"/product"} style={{
                    margin:"10px"
                }}>
                    Product
                </NavLink>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout