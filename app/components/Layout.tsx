"use client";
import React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Provider } from "react-redux";
import store from "../store/store";
// const defaultTheme = createTheme();

function Layout({ children }: any) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default Layout;
