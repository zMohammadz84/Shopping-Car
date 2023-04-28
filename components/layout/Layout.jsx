import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container relative grow mx-auto xl:px-20 flex flex-col ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
