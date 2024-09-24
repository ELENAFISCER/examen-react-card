import React from "react";
import './layout.css'; 

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Mi Card Gatsby</h1>
      </header>
      <main>{children}</main>

    </div>
  );
};

export default Layout;
