import React from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./header.css"
function Header() {
  return (
      <div className="header">
                <div className="header-logo">
                      <div className="logo"><StorefrontIcon fontSize='2em'/></div>
                      <h1>eShop</h1>
                </div>

                <div className="header-search">
                    <input type="text" name= "search" />
                    <div className="search-icon"><SearchIcon/></div>

                </div>

                <div className="header-nav"> 
                     <div className="header-nav-signin">
                        <span>Hello Guest </span>
                        <h4>Sign In</h4>

                     </div>

                     <div className="header-nav-your-shop">
                     <span>Your</span>
                     <h4>Shop</h4>
                     </div>
                    <div  className="header-nav-cart">
                    <h1><ShoppingBasketIcon fontSize='3em'/></h1>
                    <h3 className='nav__basketCount'>0</h3>
                    </div>
                </div>
        </div>
  )
}

export default Header
