import React, { useState, useEffect, memo } from "react";
import "./Header.scss";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShrinkNavbar(true);
    } else {
      setShrinkNavbar(false);
    }
  };

  // Add event listener to handle scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={shrinkNavbar ? "shrink" : ""}>
      <div className="container">
        <nav>
          <div className="nav-links flex items-center">
            <Link href={"/home"}>
              {" "}
              <img src="../logo.png" alt="img" className="logo" />
            </Link>
            <Link href={"/home"} className="href1">
              Home
            </Link>
            <Link href={"dishes"} className="href1">
              Dishes
            </Link>
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
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <img src="../menu.png" alt="menu" />
          </div>
        </nav>
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href={"/home"}>Home</Link>
            <Link href={"/dishes"}>Dishes</Link>
            <Link href={"/cart"}>Cart</Link>
            <Link href={"signin"}>Login</Link>
            <Link href={"signup"}>Sign up</Link>
          </div>
        )}
        <div className="line mt-4"></div>
      </div>
    </header>
  );
};

export default memo(Header);
