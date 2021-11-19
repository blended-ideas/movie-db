import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
