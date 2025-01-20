import React from 'react';

import Logo from '../assets/logicBase.png';
import { useNavigate } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../context.jsx/AuthContext';

const BasicHeader = () => {
    const { isLogin } = useAuth();
    const navigate = useNavigate();

    const scrollOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    
    return (
    <header className='w-full'>
        <nav className='w-full h-[100px] fixed top-0 flex justify-between items-center bg-[var(--color-tertiary)] text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] px-20 z-20'>
            <ul className='flex w-fit h-full items-center gap-[40px] text-[16px] font-normal'>
                <Link smooth to='/#home' scroll={scrollOffset}>
                    <img src={Logo} alt='Logic Base Logo' className='w-auto h-[30px] cursor-pointer transition-all ease-in-out duration-300 hover:scale-110'/>
                </Link>
                <li className='hover:-translate-y-1 ease-in-out duration-300'>
                    <Link smooth to='/#home' scroll={scrollOffset}>Home</Link>
                </li>
                <li className='hover:-translate-y-1 ease-in-out duration-300'>
                    <Link smooth to='/#blog' scroll={scrollOffset}>Blog</Link>
                </li>
                <li className='hover:-translate-y-1 ease-in-out duration-300'>
                    <Link to='/login'>Course</Link>
                </li>
            </ul>
            <ul className='flex w-fit h-full items-center gap-[20px] text-[16px] font-normal'>
                <li>
                    {
                        !isLogin ? 
                    <button onClick={() => navigate('/login')} className='relative w-fit flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-tertiary)] text-[var(--color-primary)] rounded-full pt-[8px] pb-[10px] px-[20px] overflow-hidden ease-in-out duration-300 hover:text-[var(--color-secondary)] hover:-translate-y-1 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--color-primary)] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                        <p className='z-10'>Sign In</p>
                    </button>
                    :
                    <button onClick={() => navigate('/main')} className='relative w-fit flex items-center justify-center border border-[var(--color-primary)] bg-[var(--color-tertiary)] text-[var(--color-primary)] rounded-full pt-[8px] pb-[10px] px-[20px] overflow-hidden ease-in-out duration-300 hover:text-[var(--color-secondary)] hover:-translate-y-1 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--color-primary)] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                        <p className='z-10'>Sign In</p>
                    </button>
                    }
                </li>
                <li>
                    <button onClick={() => navigate('/register')} className='relative w-fit flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] overflow-hidden ease-in-out duration-300 hover:text-[var(--color-primary)] hover:-translate-y-1 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--color-accent)] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                        <p className='z-10'>Sign Up</p>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default BasicHeader;