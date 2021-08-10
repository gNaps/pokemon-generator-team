import { Component } from "react";
import Sidebar from "../Sidebar";
import styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="row vh-min-100 w-100 no-margin">
        <div className="col-2 d-md-flex d-none no-padding">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10 no-padding">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
