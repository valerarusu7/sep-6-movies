import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <Navbar />
        <main
          style={{
            width: "100%",
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
