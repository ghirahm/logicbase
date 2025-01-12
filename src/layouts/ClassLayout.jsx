import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import ClassHeader from '../components/ClassHeader';

const ClassLayout = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <>
            <ClassHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default ClassLayout;