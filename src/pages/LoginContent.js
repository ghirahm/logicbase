import React from 'react'

import Logo from '../assets/logicBase.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';

const LoginContent = () => {

    const navigate = useNavigate();
    
    return (
        <>
            <section className='w-full h-screen flex flex-row bg-[var(--color-tertiary)] pt-[36px]'>
                <div className='w-[40%] h-full flex flex-col justify-center items-center gap-6 mx-auto'>
                    <Link smooth to='/'>
                        <img src={Logo} alt='Logic Base Logo' className='mx-auto h-[72px] w-auto cursor-pointer transition-all ease-in-out duration-300 hover:scale-110'/>
                    </Link>
                    <div className='w-full'>
                        <form action='#' className='space-y-4'>
                            <label htmlFor='email' className='flex flex-row items-center gap-2 text-[var(--color-primary)]'>
                                <FontAwesomeIcon icon={faMailBulk} className='w-[12px] h-[12px]' />
                                <p className='font-bold'>Email Address</p>
                            </label>
                            <input id='email' name='email' type='email' required autoComplete='email'  placeholder='Email' className='w-full rounded-full p-4 text-[var(--color-secondary)] bg-[var(--color-primary)] placeholder:text-[var(--color-non-primary)] focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]' />
                            
                            <label htmlFor='password' className='flex flex-row items-center gap-2 text-[var(--color-primary)]'>
                                <FontAwesomeIcon icon={faKey} className='w-[12px] h-[12px]' />
                                <p className='font-bold'>Password</p>
                            </label>
                            <input id='password' name='password' type='password' required autoComplete='current-password' placeholder='Password' className='w-full rounded-full p-4 text-[var(--color-secondary)] bg-[var(--color-primary)] placeholder:text-[var(--color-non-primary)] focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]'/>

                            <button onClick={() => navigate('/main')} className='flex w-full justify-center items-center rounded-full font-bold bg-[var(--color-primary)] text-[var(--color-secondary)] p-4 ease-in-out duration-300 hover:border-b-8 hover:border-[var(--color-accent)]'>
                                <p className='z-10'>Sign In</p>
                            </button>
                        </form>
                    </div>

                    <p className='text-center text-[var(--color-primary)]'>Not a Member? {' '}<Link smooth to='/register' className='font-bold text-[var(--color-primary)] hover:underline hover:underline-offset-2 '>Sign Up</Link></p>
                </div>
                <div className='w-[40%] h-screen bg-black'>
                </div>
            </section>
        </>
    )
}

export default LoginContent;