import React from "react";
import "./layout.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CheckoutPreview from "../checkoutPreview/CheckoutPreview";
import Menu from "../Menu/Menu";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <CheckoutPreview />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
