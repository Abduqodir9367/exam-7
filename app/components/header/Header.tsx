import React from "react";
import "./Header.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-links flex items-center">
            <Link href={"/home"}>
              {" "}
              <img src="../logo.png" alt="img" className="logo" />
            </Link>
            <Link href={"/home"}>Home</Link>
            <Link href={"dishes"}>Dishes</Link>
          </div>
          <div className="nav-items">
            <Link href={"/cart"}>
              <img src="../cart.png" alt="icon" />
            </Link>
            <div className="btns">
              <Link href={"signin"}>
                <button className="btn1">Login</button>
              </Link>
              <Link href={"signup"}>
                <button className="btn2">Sign up</button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="line mt-4"></div>
      </div>
    </header>
  );
};

export default Header;
