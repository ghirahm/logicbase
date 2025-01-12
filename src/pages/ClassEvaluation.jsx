import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCirclePlay, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Happy from '../assets/happy.png'
import Background from '../assets/score.gif'
import { useNavigate } from 'react-router'

const ClassEvaluation = () => {

    const navigate = useNavigate();
    
    return (
    <>
        <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
            <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                <div className='w-full h-full flex flex-col gap-8'>
                    <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                        <FontAwesomeIcon icon={faBullseye} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase'>Quiz Evaluasi</h3>
                    </div>
                    <p className='text-sm leading-6'>Sebelum memasuki pembelajaran lebih lanjut. Silahkan kerjakan quiz berikut sebaik mungkin!</p>
                    <div className='w-full h-fit flex flex-row justify-between items-center p-6 border border-[var(--color-secondary)] rounded-full'>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                            </div>
                            <h3 className='text-[20px] text-left leading-none font-semibold'>Soal 1</h3>
                        </div>
                        <div className='w-fit flex flex-row items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[var(--color-secondary)]'/>
                            <p className='text-sm'>20 Points</p>
                        </div>
                    </div>
                    <div className='w-full h-fit grid grid-cols-2'>
                        <div className='w-full h-full bg-[var(--color-non-primary)] rounded-3xl'>
                            {/* <img src=' ' alt=' '/> */}
                        </div>
                        <div className='w-full h-full flex flex-col gap-4 p-6'>
                            <h3 className='w-fit text-[36px] text-left font-semibold'>Apa yang dimaksud dari structure query pada gambar di samping berikut?</h3>
                            <button className='w-full h-fit rounded-3xl bg-[var(--color-non-primary)] p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]'>
                                <p className='text-sm leading-6'>A. Structure query merupakan struktur untuk menyusun database.</p>
                            </button>
                            <button className='w-full h-fit rounded-3xl bg-[var(--color-non-primary)] p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]'>
                                <p className='text-sm leading-6'>B. Structure query merupakan struktur untuk menyusun database.</p>
                            </button>
                            <button className='w-full h-fit rounded-3xl bg-[var(--color-non-primary)] p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]'>
                                <p className='text-sm leading-6'>C. Structure query merupakan struktur untuk menyusun database.</p>
                            </button>
                            <button className='w-full h-fit rounded-3xl bg-[var(--color-non-primary)] p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]'>
                                <p className='text-sm leading-6'>D. Structure query merupakan struktur untuk menyusun database.</p>
                            </button>
                            <button className='w-full h-fit rounded-3xl bg-[var(--color-non-primary)] p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]'>
                                <p className='text-sm leading-6'>E. Structure query merupakan struktur untuk menyusun database.</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-end'>
                    <button className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px]'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all hover:mr-8 '>Submit Quiz</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                    </button>
                </div>
            </div>
        </section>

        <section className='w-full h-fit flex flex-col justify-center items-center p-6'>
            <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                <div className='w-full h-[80vh] relative flex flex-col gap-4 justify-center items-center text-[var(--color-primary)] rounded-3xl p-6 overflow-hidden'>
                    <img src={Background} className="absolute w-full h-auto blur-lg object-cover" alt=""/>
                    <img src={Happy} alt='' className='w-[10%] z-20'/>
                    <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 z-20 border border-[var(--color-primary)] rounded-full'>
                        <p className='w-fit text-sm text-center leading-none font-semibold'>Congratulations</p>
                    </div>
                    <h3 className='w-fit text-[36px] text-center font-bold z-20'>100 Point</h3>
                    <p className='w-[30%] text-sm leading-6 z-20 text-center'>Selamat atas pencapaian yang telah kamu dapatkan Ghirah Madani. Keep your spirits up!</p>
                </div>
                <div className='w-full h-fit flex items-center justify-between'>
                    <button onClick={() => navigate('/class/presentation')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] rotate-180' />
                        <p className='font-normal transform ease-in-out duration-300 transition-all'>Back</p> 
                    </button>
                    <button onClick={() => navigate('/class/endClass')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Finish</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                    </button>
                </div>
            </div>
        </section>
    </>
    )
}

export default ClassEvaluation