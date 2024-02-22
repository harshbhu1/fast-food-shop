import React, { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.js';
import CartContext from './store/CartContext.js';
import UserProgressContext from './store/UserProgressContext.js';

const Header = () => {

  const cartCtx = useContext(CartContext);
 
   const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item) =>{
    return totalNumberOfItems + item.quantity;
  },0);

   function handleShowCart(){
    userProgressCtx.showCart();
   }


  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="logo img" />
            <h1>food order app</h1>
        </div>
        <nav><Button textOnly onClick={handleShowCart} >Cart ({totalCartItems})</Button></nav>
    </header>
  )
}

export default Header;