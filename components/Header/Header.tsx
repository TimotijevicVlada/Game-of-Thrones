import React from 'react';
import css from "./Header.module.scss";
import { useRouter } from 'next/router';

//assets
import Logo from "../../assets/stark_logo.png";
import ReactLogo from "../../assets/react.svg";

const Header = () => {

  const router = useRouter();


  return (
    <div className={css.container}>
      <div className={css.reactLogo}>
        <ReactLogo />
        React Query
      </div>
      <div className={css.iconsWrapper}>
        <img src={Logo.src} alt="logo" />
        <span onClick={() => router.push("/")} className={router.pathname === "/" ? css.active : ""}>Caracters</span>
        <span onClick={() => router.push("/continents")} className={router.pathname === "/continents" ? css.active : ""}>Continents</span>
        <img src={Logo.src} alt="logo" />
      </div>

    </div>
  )
}

export default Header;