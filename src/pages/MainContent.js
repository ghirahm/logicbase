import React from 'react'

import Avatar from '../assets/avatar.png'
import Icon from '../assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBarChart, faClock, faArrowRight, faBook, faChartSimple } from '@fortawesome/free-solid-svg-icons'

import { HashLink as Link } from 'react-router-hash-link'

const MainContent = () => {

    const scrollOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
    <>
        <main className='w-full h-fit flex justify-end my-2' id='dashboard'>
            <div className='w-[85%] h-fit flex flex-col gap-6 mr-6'>
                <nav className='w-full h-[100px] flex justify-between items-center bg-[var(--color-non-primary)] rounded-full px-12'>
                    <div className='w-fit h-fit flex flex-row justify-start items-center gap-2'>
                        <h2 className='text-[32px] text-left leading-none font-bold text-[var(--color-secondary)]'>Dashboard</h2>
                        <FontAwesomeIcon icon={faChartSimple} className='w-[24px] h-[24px] text-[var(--color-secondary)]' />
                    </div>
                    
                    <div className='w-fit h-fit flex flex-row justify-center items-center gap-2'>
                        <img id="avatarButton" type="button" className="w-10 h-10 rounded-full" src={Avatar} alt="User Dropdown"/>
                        <p className='text-sm'>Halo, Ghirah Madani!</p>
                    </div>
                </nav>

                <section className='w-full h-[480px] flex flex-col justify-between bg-[var(--color-secondary)] rounded-3xl p-12'>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-primary)]'>Selamat Datang di Logic Base, Ghirah!</h3>
                        <h1 className='text-[80px] text-left leading-none font-bold text-[var(--color-primary)]'>Logic Base<br></br>Introduction</h1>
                        <div className='flex flex-row items-center gap-4'>
                            <FontAwesomeIcon icon={faStar} className='text-[var(--color-tertiary)]'/>
                            <p className='text-[var(--color-primary)]'>4.5</p>
                            <FontAwesomeIcon icon={faBarChart} className='text-[var(--color-primary)]'/>
                            <p className='text-[var(--color-primary)]'>Beginner</p>
                            <FontAwesomeIcon icon={faClock} className='text-[var(--color-primary)]' />
                            <p className='text-[var(--color-primary)]'>8 Hours</p>
                        </div>
                    </div>
                    <Link smooth to='/main#class' scroll={scrollOffset} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Yuk Mulai Belajar</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] -rotate-45' />
                    </Link>
                </section>

                <section className='w-full h-[360px] grid grid-cols-4 grid-rows-2 gap-6 justify-between' id='test'>
                    <div className='row-span-2 bg-[var(--color-accent)] rounded-3xl p-12'>
                        <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-primary)]'>Keeps Your Spirit Up!</h2>
                    </div>
                    <div className='col-span-3 bg-[var(--color-non-primary)] rounded-3xl p-12'>

                    </div>
                    <div className='col-span-3 bg-[var(--color-non-primary)] rounded-3xl p-12'>

                    </div>
                </section>

                <section className='w-full h-fit grid grid-cols-3 justify-between rounded-3xl' id='class'>
                    <div className='h-fit col-span-2 flex flex-col gap-6 bg-[var(--color-non-primary)] rounded-3xl p-12'>
                        <div className='flex flex-col gap-6 mb-12'>
                            <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-secondary)]'>Semangat Belajar, Sahabat!</h3>
                            <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-secondary)]'>Lessons Activity</h2>
                            <div className='flex flex-row items-center gap-4'>
                                <FontAwesomeIcon icon={faStar} className='text-[var(--color-tertiary)]'/>
                                <p className='text-[var(--color-secondary)]'>4.5</p>
                                <FontAwesomeIcon icon={faBarChart} className='text-[var(--color-secondary)]'/>
                                <p className='text-[var(--color-secondary)]'>Beginner</p>
                                <FontAwesomeIcon icon={faClock} className='text-[var(--color-secondary)]' />
                                <p className='text-[var(--color-secondary)]'>8 Hours</p>
                            </div>
                        </div>

                        <Link smooth to='/class' className='w-full h-auto flex flex-col justify-between gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-3xl p-12 cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-2'>
                            <div className='flex flex-row justify-between rounded-3xl'>
                                <div className='w-full h-[160px] gap-6 flex flex-row justify-start items-start'>
                                    <img src={Icon} alt='' className='w-[20%]'/>
                                    <div className='w-[50%] space-y-6'>
                                        <h3 className='text-[20px] text-left font-bold text-[var(--color-secondary)] leading-6 text-balance'>Learn About Query Structure in Database Learning</h3>
                                        <p className='text-sm'>We are going to study about structure of query with tips and tricks.</p>
                                    </div>
                                </div>
                                <div className='w-[72px] h-[72px] flex flex-col items-center justify-center bg-[var(--color-accent)] rounded-xl'>
                                    <h2 className='text-[24px] text-left leading-none font-bold text-[var(--color-primary)]'>2</h2>
                                    <p className='text-sm text-[var(--color-primary)]'>Dec</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <div className='w-[80%] h-4 bg-[var(--color-non-primary)] rounded-full overflow-hidden'>
                                    <div class="bg-[var(--color-accent)] h-full rounded-full" style={{ width: "30%" }}></div>
                                </div>
                                <p className='text-sm flex flex-row items-center gap-2 hover:font-bold'>Start Now
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </p>
                            </div>
                        </Link>

                        <Link smooth to='/class' className='w-full h-auto flex flex-col justify-between gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-3xl p-12 cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-2'>
                            <div className='flex flex-row justify-between rounded-3xl '>
                                <div className='w-full h-[160px] gap-6 flex flex-row justify-start items-start'>
                                    <img src={Icon} alt='' className='w-[20%]'/>
                                    <div className='w-[50%] space-y-6'>
                                        <h3 className='text-[24px] text-left leading-none font-bold text-[var(--color-secondary)]'>Data Definition Language</h3>
                                        <p className='text-sm'>We are going to study about structure of query with tips and tricks.</p>
                                    </div>
                                </div>
                                <div className='w-[72px] h-[72px] flex flex-col items-center justify-center bg-[var(--color-accent)] rounded-xl'>
                                    <h2 className='text-[24px] text-left leading-none font-bold text-[var(--color-primary)]'>2</h2>
                                    <p className='text-sm text-[var(--color-primary)]'>Dec</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <div className='w-[80%] h-4 bg-[var(--color-non-primary)] rounded-full overflow-hidden'>
                                    <div class="bg-[var(--color-accent)] h-full rounded-full" style={{ width: "75%" }}></div>
                                </div>
                                <p className='text-sm flex flex-row items-center gap-2 hover:font-bold'>Start Now
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </p>
                            </div>
                        </Link>

                        <Link smooth to='/class' className='w-full h-auto flex flex-col justify-between gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-3xl p-12 cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-2'>
                            <div className='flex flex-row justify-between rounded-3xl '>
                                <div className='w-full h-[160px] gap-6 flex flex-row justify-start items-start'>
                                    <img src={Icon} alt='' className='w-[20%]'/>
                                    <div className='w-[50%] space-y-6'>
                                        <h3 className='text-[24px] text-left leading-none font-bold text-[var(--color-secondary)]'>Data Manipulation Language</h3>
                                        <p className='text-sm'>We are going to study about structure of query with tips and tricks.</p>
                                    </div>
                                </div>
                                <div className='w-[72px] h-[72px] flex flex-col items-center justify-center bg-[var(--color-accent)] rounded-xl'>
                                    <h2 className='text-[24px] text-left leading-none font-bold text-[var(--color-primary)]'>2</h2>
                                    <p className='text-sm text-[var(--color-primary)]'>Dec</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <div className='w-[80%] h-4 bg-[var(--color-non-primary)] rounded-full overflow-hidden'>
                                    <div class="bg-[var(--color-accent)] h-full rounded-full" style={{ width: "45%" }}></div>
                                </div>
                                <p className='text-sm flex flex-row items-center gap-2 hover:font-bold'>Start Now
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </p>
                            </div>
                        </Link>
                        <Link smooth to='/class' className='w-full h-auto flex flex-col justify-between gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-3xl p-12 cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-2'>
                            <div className='flex flex-row justify-between rounded-3xl '>
                                <div className='w-full h-[160px] gap-6 flex flex-row justify-start items-start'>
                                    <img src={Icon} alt='' className='w-[20%]'/>
                                    <div className='w-[50%] space-y-6'>
                                        <h3 className='text-[24px] text-left leading-none font-bold text-[var(--color-secondary)]'>Data Manipulation Language Advanced</h3>
                                        <p className='text-sm'>We are going to study about structure of query with tips and tricks.</p>
                                    </div>
                                </div>
                                <div className='w-[72px] h-[72px] flex flex-col items-center justify-center bg-[var(--color-accent)] rounded-xl'>
                                    <h2 className='text-[24px] text-left leading-none font-bold text-[var(--color-primary)]'>2</h2>
                                    <p className='text-sm text-[var(--color-primary)]'>Dec</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <div className='w-[80%] h-4 bg-[var(--color-non-primary)] rounded-full overflow-hidden'>
                                    <div class="bg-[var(--color-accent)] h-full rounded-full" style={{ width: "45%" }}></div>
                                </div>
                                <p className='text-sm flex flex-row items-center gap-2 hover:font-bold'>Start Now
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className='h-full flex flex-col justify-between p-12'>
                        <div className='h-fit flex flex-col'>
                            <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-secondary)]'>Important Notes</h3>
                            <div className='w-full h-[120px] flex flex-row justify-between items-center gap-6'>
                                <div className='w-[48px] h-[48px] bg-[var(--color-accent)] rounded-lg flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faBook} className='text-[var(--color-primary)]'/>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Student Training</h3>
                                    <p className='text-sm'>Save time and make more your study effective.</p>
                                </div>
                            </div>
                            <div className='w-full h-[120px] flex flex-row justify-between items-center gap-6'>
                                <div className='w-[48px] h-[48px] bg-[var(--color-accent)] rounded-lg flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faBook} className='text-[var(--color-primary)]'/>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Student Training</h3>
                                    <p className='text-sm'>Save time and make more your study effective.</p>
                                </div>
                            </div>
                            <div className='w-full h-[120px] flex flex-row justify-between items-center gap-6'>
                                <div className='w-[48px] h-[48px] bg-[var(--color-accent)] rounded-lg flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faBook} className='text-[var(--color-primary)]'/>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Student Training</h3>
                                    <p className='text-sm'>Save time and make more your study effective.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[320px] bg-[var(--color-accent)] rounded-3xl p-12'>
                            <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-primary)]'>Keeps Your Spirit Up!</h2>
                        </div>
                    </div>
                </section>

                <section className='w-full h-[360px] grid grid-cols-4 grid-rows-2 gap-6 justify-between' id='help'>
                    <div className='row-span-2 bg-[var(--color-accent)] rounded-3xl p-12'>
                        <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-primary)]'>Keeps Your Spirit Up!</h2>
                    </div>
                    <div className='row-span-2 bg-[var(--color-non-primary)] rounded-3xl p-12'>

                    </div>
                    <div className='row-span-2 bg-[var(--color-non-primary)] rounded-3xl p-12'>

                    </div>
                    <div className='row-span-2 bg-[var(--color-non-primary)] rounded-3xl p-12'>

                    </div>
                </section>
            </div>
        </main>
    </>
    )
}

export default MainContent;