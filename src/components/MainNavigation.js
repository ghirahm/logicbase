import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPaperPlane, faBook, faCircleQuestion, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../assets/logicBase.png'

const MainNavigation = () => {

    const scrollOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
    <aside className='fixed top-0 left-6 w-fit h-screen flex justify-start items-center transition-transform translate-x-0'>
        <div className='w-[10vw] h-[98%] py-12 flex flex-col justify-between items-center gap-12 bg-[var(--color-tertiary)] rounded-full transition-all ease-in-out duration-300'>
            <ul className='flex flex-col justify-around items-center gap-4'>
                <li>
                    <Link smooth to='/main#dashboard' scroll={scrollOffset}>
                        <img src={Logo} alt='Logic Base Logo' className='w-auto h-[24px] cursor-pointer transition-all ease-in-out duration-300 hover:scale-110'/>
                    </Link>
                </li>
                <li>
                    <Link smooth to='/main#dashboard' scroll={scrollOffset} className='flex flex-col items-center justify-center gap-2 w-24 h-24 text-[var(--color-primary)] rounded-full ease-in-out duration-300 hover:bg-[var(--color-shadow)] group'>
                        <FontAwesomeIcon icon={faHome} className='w-[24px] h-[24px]'></FontAwesomeIcon>
                        <p className='hidden text-xs ease-in-out duration-300 group-hover:block'>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link smooth to='/main#test' scroll={scrollOffset} className='flex flex-col items-center justify-center gap-2 w-24 h-24 text-[var(--color-primary)] rounded-full ease-in-out duration-300 hover:bg-[var(--color-shadow)] group'>
                        <FontAwesomeIcon icon={faPaperPlane} className='w-[24px] h-[24px]'></FontAwesomeIcon>
                        <p className='hidden text-xs ease-in-out duration-300 group-hover:block'>Test</p>
                    </Link>
                </li>
                <li>
                    <Link smooth to='/main#class' scroll={scrollOffset} className='flex flex-col items-center justify-center gap-2 w-24 h-24 text-[var(--color-primary)] rounded-full ease-in-out duration-300 hover:bg-[var(--color-shadow)] group'>
                        <FontAwesomeIcon icon={faBook} className='w-[24px] h-[24px]'></FontAwesomeIcon>
                        <p className='hidden text-xs ease-in-out duration-300 group-hover:block'>Class</p>
                    </Link>
                </li>
                <li>
                    <Link smooth to='/main#help' scroll={scrollOffset} className='flex flex-col items-center justify-center gap-2 w-24 h-24 text-[var(--color-primary)] rounded-full ease-in-out duration-300 hover:bg-[var(--color-shadow)] group'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='w-[24px] h-[24px]'></FontAwesomeIcon>
                        <p className='hidden text-xs ease-in-out duration-300 group-hover:block'>Help</p>
                    </Link>
                </li>
            </ul>
            <ul className=''>
                <li>
                    <Link smooth to='/' className='flex flex-col items-center justify-center gap-2 w-24 h-24 text-[var(--color-primary)] rounded-full ease-in-out duration-300 hover:bg-[var(--color-shadow)] group'>
                        <FontAwesomeIcon icon={faSignOut} className='w-[24px] h-[24px]'></FontAwesomeIcon>
                        <p className='hidden text-xs ease-in-out duration-300 group-hover:block'>Sign Out</p>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
    )
}

export default MainNavigation