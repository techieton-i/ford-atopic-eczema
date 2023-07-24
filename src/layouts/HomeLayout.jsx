import React from "react";
import Navbar from "./Navbar/Navbar";
import Cart from "../modules/Cart/Cart";
import { Content, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100vw",
          backgroundColor: "#fff",
          lineHeight: "2rem",
        }}
        className="header bg-white"
      >
        <Navbar />
      </Header>
      {/* <Content className="content"> */}
      <motion.div
        // key={location.pathname}
        initial="pageInitial"
        animate="pageAnimate"
        className="container mx-auto"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
      {/* </Content> */}
      <Cart />
    </div>
  );
};

export default HomeLayout;
