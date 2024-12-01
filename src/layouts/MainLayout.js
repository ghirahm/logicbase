import { useEffect } from 'react';
import React from 'react'
import MainNavigation from '../components/MainNavigation';
import { Outlet, useLocation } from 'react-router';

const MainLayout = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout