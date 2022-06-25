import React from "react";
import NavBar from "./Components/NavBar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
