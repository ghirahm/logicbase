import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const ClassIntro = () => {
    const navigate = useNavigate();

    return (
    <>
    <section className='w-full h-screen grid grid-cols-2 gap-6 pt-[120px] p-6'>
        <div className='w-full h-full bg-[var(--color-accent)] rounded-3xl p-6'>
            <img src='' alt='' className='' /> 
        </div>
        <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6'>
            <div className='w-full h-full flex flex-col gap-8'>
                <div className='w-full h-fit space-y-4'>
                    <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase px-6 py-2 border border-[var(--color-secondary)] rounded-full'>Pertemuan 1</h3>
                    <h2 className='text-[48px] text-left leading-tight font-bold text-balance'>Learn About Query Structure in Database Learning</h2>
                </div>
                <div className='w-full h-fit space-y-4'>
                    <div className='flex flex-row items-center justify-start gap-4'>
                        <FontAwesomeIcon icon={faBolt} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        <h3 className='text-[20px] text-left leading-none font-semibold'>Overview Materi</h3>
                    </div>
                    <p className='text-sm leading-6'>Pada pertemuan kali ini kita akan belajar mengenai struktur query pada database.</p>
                </div>
                <div className='w-full h-fit space-y-4'>
                    <div className='flex flex-row items-center justify-start gap-4'>
                        <FontAwesomeIcon icon={faRocket} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        <h3 className='text-[20px] text-left leading-none font-semibold'>Tujuan Pembelajaran</h3>
                    </div>
                    <p className='text-sm leading-6'>Siswa diharapkan mampu untuk memahami definisi query serta tujuan dari penggunaan query dalam merancang sebuah database.</p>
                </div>
            </div>
            <div className='w-full h-fit'>
                <button onClick={() => navigate('orientation')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                    <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Mulai Belajar</p>
                    <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                </button>
            </div>
        </div>
    </section>
    </>
    )
}

export default ClassIntro