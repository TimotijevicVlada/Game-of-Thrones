import React from 'react';
import css from "./Header.module.scss";
import { useRouter } from 'next/router';

//assets
import Logo from "assets/stark_logo.png";

const Header = () => {

  const router = useRouter();


  return (
    <div className={css.container}>
      <span onClick={() => router.push("/")} className={router.pathname === "/" ? css.active : ""} >Caracters</span>
      <span>Continents</span>
    </div>
  )
}

export default Header;