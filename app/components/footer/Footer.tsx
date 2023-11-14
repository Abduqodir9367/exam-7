import React, { memo } from "react";
import "./Footer.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src="../logo.png" alt="img" className="logo" />
        <div className="line">.</div>
        <div className="foter">
          <p>© 2023 EATLY All Rights Reserved.</p>
          <div className="icons">
            <Link
              href={"https://www.instagram.com/_qobilov1ch_/"}
              target="_blank"
            >
              <img src="../inst.png" alt="icon" />{" "}
            </Link>
            <Link href={"https://uz.linkedin.com/"} target="_blank">
              <img src="../in.png" alt="icon" />{" "}
            </Link>
            <Link href={"https://www.facebook.com/"} target="_blank">
              <img src="../face.png" alt="icon" />{" "}
            </Link>
            <Link href={"https://twitter.com/"} target="_blank">
              <img src="../twit.svg" alt="icon" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
