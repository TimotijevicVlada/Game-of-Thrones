import React from 'react';
import css from "./Header.module.scss";

//assets
import Logo from "assets/stark_logo.png";

const Header = () => {

  // console.log("LOGO", Logo)

  return (
    <div className={css.container}>
      {/* <img src={Logo.src} alt="logo" /> */}
      Header
    </div>
  )
}

export default Header;