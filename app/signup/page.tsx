import React from "react";
import "./SignUp.scss";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="container">
        <img src="../logo2.png" alt="img" />
        <div className="big">
          <div className="left">
            <h1>Sign Up To eatly</h1>
            <form>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <Link href={"home"}>
                {" "}
                <button type="submit">SIGN UP</button>
              </Link>
            </form>
            <div className="end">
              <p>Already Have An Account?</p>
              <Link href={"signin"}>Log in</Link>
            </div>
          </div>

          <div className="right">
            <img src="./login-right.png" alt="img" />
            <h1>Find Foods With Love </h1>
            <p>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
        <div className="foter">
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
