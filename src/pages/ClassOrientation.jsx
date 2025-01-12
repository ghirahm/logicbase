import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBolt, faCirclePlay, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Icon from '../assets/icon.png'
import { useNavigate } from 'react-router'

const ClassOrientation = () => {
    const navigate = useNavigate();

  return (
    <>
        <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
            <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                <div className='w-full h-full flex flex-col gap-8'>
                    <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                        <FontAwesomeIcon icon={faBolt} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase '>Orientasi Permasalahan</h3>
                    </div>
                    <div className='w-full h-fit space-y-4'>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                            </div>
                            <h3 className='text-[20px] text-left leading-none font-semibold'>Pengantar Orientasi Permasalahan</h3>
                        </div>
                    </div>
                    <div className='w-full h-[480px] bg-[var(--color-non-primary)] rounded-3xl'>
                        <iframe src='' title=' ' allowFullScreen/>
                    </div>
                    <div className='w-full h-fit grid grid-cols-2 gap-6'>
                        <div className='h-full col-span-1 flex items-center'>
                            <p className='text-sm leading-6'>SQL queries are made up of components that work together to retrieve and manipulate data from a database. The structure of an SQL query is defined by several clauses that specify the query's purpose, scope, and output. Some components of an SQL.</p>
                        </div>
                        <div className='h-full col-span-1 flex flex-row items-center gap-6 bg-[var(--color-non-primary)] rounded-3xl py-6 px-12'>
                            <img src={Icon} alt='' className='w-[20%]'/>
                            <div className='flex flex-col items-left justify-center gap-2'>
                                <p className='text-sm font-bold'>Pertanyaan Pemantik</p>
                                <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-end'>
                    <button onClick={() => navigate('/class/orientationQuiz')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Start Quiz</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default ClassOrientation;