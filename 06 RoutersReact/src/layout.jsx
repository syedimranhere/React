import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';

const Layout = () => {
    return (
        <>

            <Header />
            <Outlet />
            <Footer />

        </>
    );
};

export default Layout; 