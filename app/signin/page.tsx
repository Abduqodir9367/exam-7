"use client";

import Link from "next/link";
import React, { memo } from "react";
import "./SignIn.scss";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  return (
    <div className="SignIn">
      <div className="container">
        <img src="../logo2.png" alt="img" />
        <div className="big">
          <div className="left">
            <h1>Sign In To eatly</h1>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-control"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="form-control"
                required
              />

              <button type="submit" onClick={() => router.push("/home")}>
                SIGN IN
              </button>
            </form>
            <div className="end">
              <p>Create A New Account?</p>
              <Link href={"signup"}>Sign Up</Link>
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

export default memo(SignIn);
