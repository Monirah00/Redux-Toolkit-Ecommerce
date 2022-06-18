import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from '../Btn/CartBtn'
import LoginBtn from '../Btn/LoginBtn'
import SingIn from '../Btn/SingIn'



const Header = () => {
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Ecommerece</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Cart">CART</NavLink>
        </li>
    <LoginBtn />
    <SingIn />
    <CartBtn />
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header