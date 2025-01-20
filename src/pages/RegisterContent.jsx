import React, { useEffect } from 'react';

import Logo from '../assets/logicBase.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faMailBulk, faUser } from '@fortawesome/free-solid-svg-icons';

import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router';

import Alert from '../utils/Alert';
import WelcomeBanner from '../assets/banner-welcome.jpg';
import { useAuth } from '../context/AuthContext';

const RegisterContent = () => {

    const { isError, setIsError, isLoading, setUsername, setEmail, setPassword, handleSubmit, onSubmitRegister, isRegister, setIsRegister } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isRegister === true){
            setIsRegister(false)
            navigateLogin();
        }
    }, [isRegister])

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <section className='w-full h-screen flex flex-row bg-[var(--color-tertiary)] mt-[36px]'>
            {
                isError && <Alert isError={isError}  setIsError={setIsError}/>
            }

            <div className='w-[40%] h-full flex flex-col justify-center items-center gap-6 mx-auto'>
                <Link smooth to='/'>
                    <img src={Logo} alt='Logic Base Logo' className='mx-auto h-[72px] w-auto cursor-pointer transition-all ease-in-out duration-300 hover:scale-110' />
                </Link>
                <div className='w-full'>
                    <form className='space-y-4' onSubmit={handleSubmit(onSubmitRegister)}>
                        <label htmlFor='username' className='flex flex-row items-center gap-2 text-[var(--color-primary)]'>
                            <FontAwesomeIcon icon={faUser} className='w-[12px] h-[12px]' />
                            <p className='font-bold'>Full Name</p>
                        </label>
                        <input id='username' name='username' type='username' required autoComplete='name' placeholder='Full Name'
                            className='w-full rounded-full p-4 text-[var(--color-secondary)] bg-[var(--color-primary)] placeholder:text-[var(--color-non-primary)] focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]'
                            onChange={(event) => setUsername(event.target.value)} />

                        <label htmlFor='email' className='flex flex-row items-center gap-2 text-[var(--color-primary)]'>
                            <FontAwesomeIcon icon={faMailBulk} className='w-[12px] h-[12px]' />
                            <p className='font-bold'>Email Address</p>
                        </label>
                        <input id='email' name='email' type='email' required autoComplete='email' placeholder='Email'
                            className='w-full rounded-full p-4 text-[var(--color-secondary)] bg-[var(--color-primary)] placeholder:text-[var(--color-non-primary)] focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]'
                            onChange={(event) => setEmail(event.target.value)} />

                        <label htmlFor='password' className='flex flex-row items-center gap-2 text-[var(--color-primary)]'>
                            <FontAwesomeIcon icon={faKey} className='w-[12px] h-[12px]' />
                            <p className='font-bold'>Password</p>
                        </label>
                        <input id='password' name='password' type='password' required autoComplete='current-password' placeholder='Password'
                            className='w-full rounded-full p-4 text-[var(--color-secondary)] bg-[var(--color-primary)] placeholder:text-[var(--color-non-primary)] focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]'
                            onChange={(event) => setPassword(event.target.value)} />

                        <button type='submit' className='flex w-full justify-center items-center rounded-full font-bold bg-[var(--color-primary)] text-[var(--color-secondary)] p-4 ease-in-out duration-300 hover:border-b-8 hover:border-[var(--color-accent)]'>
                            {
                                isLoading ?
                                    <>
                                        <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--color-secondary)]' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                        </svg>
                                        <p>Loading</p>
                                    </>
                                    :
                                    <p className='z-10'>Sign Up</p>
                            }
                        </button>
                    </form>
                </div>
                <p className='text-center text-[var(--color-primary)]'>Have an Account? {' '}<Link smooth to='/login' className='font-bold text-[var(--color-primary)] hover:underline hover:underline-offset-2 '>Sign In</Link></p>
            </div>
            <div className='w-[36%] h-full'>
                <img src={WelcomeBanner} className='h-[100%] object-cover' alt='Welcome Banner' />
            </div>
        </section>
    )
}

export default RegisterContent;