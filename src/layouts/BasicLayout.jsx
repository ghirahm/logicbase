import React, { useEffect } from 'react'

/* Components */
import BasicHeader from '../components/BasicHeader.jsx';
import BasicFooter from '../components/BasicFooter.jsx';
import { Outlet, useLocation } from 'react-router';

const BasicLayout = () => {

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
        <BasicHeader />
        <main>
            <Outlet />
        </main>
        <BasicFooter />
    </>
  )
}

export default BasicLayout;