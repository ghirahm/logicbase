import React from 'react';

import Logo from '../assets/logicBase.png';
import { HashLink as Link} from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ClassHeader = () => {
  return (
    <header className='w-screen'>
        <nav className='w-full h-[100px] fixed top-0 flex justify-between items-center bg-[var(--color-tertiary)] text-[var(--color-primary)] px-20 z-30'>
            <ul className='flex w-fit h-full items-center gap-[40px] text-[16px] font-normal'>
                <li>
                    <Link smooth to='/main'>
                        <img src={Logo} alt='Logic Base Logo' className='w-auto h-[30px] cursor-pointer transition-all ease-in-out duration-300 hover:scale-110'/>
                    </Link>
                </li>
            </ul>
            <ul className='flex w-fit h-full items-center gap-[20px] text-[16px] font-normal'>
                <li>
                    <Link smooth to='/main' className='relative w-fit flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] overflow-hidden ease-in-out duration-300 hover:text-[var(--color-primary)] before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--color-accent)] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                        <FontAwesomeIcon icon={faClose} className='z-10 hover:text-[var(--color-primary)]'></FontAwesomeIcon>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default ClassHeader;