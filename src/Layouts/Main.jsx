import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Main = () => {
    return (
        <>
           <Header></Header>
           <Outlet></Outlet>
           <ToastContainer/>
           <Footer></Footer>
        </>
    );
};

export default Main;