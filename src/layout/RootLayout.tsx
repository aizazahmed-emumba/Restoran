import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoTopTopButton from "../components/GoTopButton";
import { Toaster } from "react-hot-toast";

const RootLayout: React.FC = () => {
  return (
    <>
      <GoTopTopButton />
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default RootLayout;
