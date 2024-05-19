import React, { useState } from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import css from './header.module.css'
const Header = ()=>{
    return (      <header className={css.header}>
    <img src={logo} alt="logo" />
    <h1>Investment Calculator</h1>
  </header>);
}

export default Header;