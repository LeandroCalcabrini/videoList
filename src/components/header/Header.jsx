import React from 'react'
import { NavLink } from 'react-router-dom'
import '../header/header.css'
const Header = () => {
  return (
    <header>
        <span>Logo</span>
        <form action="">
            <input type="text" />
            <button>Buscar</button>
        </form>
        <nav>
            <NavLink to={"/"}>Inicio</NavLink>
            <NavLink to={"/user"}>Usuario</NavLink>
        </nav>
    </header>
  )
}

export default Header