import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "../../styles/Main.module.css";
const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={{ display: "flex", flexDirection: "column" }}>
      <div className={{ display: "flex", flexGrow: 1 }}>
        <Navbar />
        <main className={style.main__children}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
