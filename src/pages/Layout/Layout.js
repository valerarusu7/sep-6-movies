import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ marginTop: 70 }}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
