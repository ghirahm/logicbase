import React from 'react'

import Happy from '../assets/happy.png'
import Background from '../assets/score.gif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { useUser } from '../context.jsx/UserContext'

const ClassOutro = () => {

    const { username } = useUser();
    const navigate = useNavigate();
    
    return (
    <>
        <section className='w-full h-fit flex flex-col justify-center items-center pt-[100px] p-6'>
            <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                <div className='w-full h-[80vh] relative flex flex-col gap-4 justify-center items-center text-[var(--color-primary)] rounded-3xl p-6 overflow-hidden'>
                    <img src={Background} alt="Background" className="absolute w-full h-auto blur-lg object-cover"/>
                    <img src={Happy} alt='Character' className='w-[10%] z-20'/>
                    <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 z-20 border border-[var(--color-primary)] rounded-full'>
                        <p className='w-fit text-sm text-center leading-none font-semibold'>Keep Your Spirit Up!</p>
                    </div>
                    <h3 className='w-fit text-[36px] text-center font-bold z-20'>Selamat, {username}!</h3>
                    <p className='w-[30%] text-sm leading-6 z-20 text-center'>Tetap semangat untuk terus belajar dan berkembang! Jangan lupa klaim reward Anda sekarang dan nikmati hasil dari kerja keras Anda!</p>
                </div>
                <div className='w-full h-fit flex items-center justify-end'>
                    <button onClick={() => navigate('/main')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>End Class</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                    </button>
                </div>
            </div>
        </section>
    </>
    )
}

export default ClassOutro