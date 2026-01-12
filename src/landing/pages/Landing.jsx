import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <main className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Landing;
