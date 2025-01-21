import React, { useEffect } from 'react'

import Avatar from '../assets/avatar.png';
import Icon from '../assets/icon.png';
import Character from '../assets/chara.png';
import CharacterYellow from '../assets/charaYellow.png';
import Corner from '../assets/corner.png';
import CornerYellow from '../assets/corner-yellow.png';
import Help from '../assets/help.png';
import HelpYellow from '../assets/help-yellow.png';
import HelpSound from '../assets/help.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBarChart, faClock, faArrowRight, faBook, faChartSimple, faFire, faCamera, faMusic, faPhone } from '@fortawesome/free-solid-svg-icons'

import { useUser } from '../context/UserContext';

import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router';

const MainContent = () => {
    const { username, courseList, fetchMain, isLoading, setCourseId } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        fetchMain();
    }, [])

    const scrollOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const playSound = () => {
        const audio = new Audio(HelpSound);
        audio.play();
    };

    const handleClass = (id) => {
        setCourseId(id);
        navigate(`/class/${id}`);
    }

    if (isLoading) {
        return (
            <main>
                <div className="flex flex-col items-center justify-center h-screen">
                    <p className="ml-4 text-lg">Loading Course</p>
                    <svg className='animate-spin h-20 w-20 text-[var(--color-secondary)]' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                </div>
            </main>
        );
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
                            <img id="avatarButton" type="button" className="w-10 h-10 rounded-full" src={Avatar} alt="User Dropdown" />
                            <p className='text-sm'>Halo, {username}</p>
                        </div>
                    </nav>

                    <section className='relative w-full h-fit flex flex-col justify-between bg-[var(--color-accent)] rounded-3xl p-12 px-16 overflow-hidden'>
                        <div className='flex flex-col gap-6'>
                            <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-primary)] w-fit p-4 border-2 border-[var(--color-primary)] rounded-full'>Selamat Datang di Logic Base, {username}!</h3>
                            <h1 className='text-[64px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>Pengenalan<br />Logic Base</h1>
                            <p className='w-[50%] text-sm font-normal text-[var(--color-primary)] text-balance leading-7'><span className='font-bold'>Logic Base Learning</span> merupakan aplikasi pembelajaran untuk membantu siswa meningkatkan <span className='font-bold'>logical thinking</span> dalam memahami materi <span className='font-bold'>basis data</span> yang berisi teori dan latihan.</p>
                            <div className='flex flex-row items-center gap-4'>
                                <FontAwesomeIcon icon={faStar} className='text-[var(--color-tertiary)]' />
                                <p className='text-[var(--color-primary)]'>4.5</p>
                                <FontAwesomeIcon icon={faBarChart} className='text-[var(--color-primary)]' />
                                <p className='text-[var(--color-primary)]'>Beginner</p>
                                <FontAwesomeIcon icon={faClock} className='text-[var(--color-primary)]' />
                                <p className='text-[var(--color-primary)]'>6 Hours</p>
                            </div>
                        </div>
                        <Link smooth to='/main#class' scroll={scrollOffset} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] mt-12 group'>
                            <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Yuk Mulai Belajar</p>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] -rotate-45' />
                        </Link>
                        <img className='absolute h-[100%] bottom-0 right-0 hover:scale-110 transition-all duration-300 ease-in-out' src={Character} alt='Character' />
                    </section>

                    <section className='w-full h-[480px] grid grid-cols-4 grid-rows-3 gap-6' id='test'>
                        <div className='relative row-span-3 bg-[var(--color-accent)] rounded-3xl w-full h-full overflow-hidden p-6'>
                            <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>Keeps<br />Your<br />Spirit!</h2>
                            <img className='absolute h-[60%] w-auto bottom-0 right-0' src={Corner} alt='Character' />
                        </div>
                        <div className='col-span-3 row-span-1 bg-[var(--color-non-primary)] rounded-3xl p-8 flex flex-row justify-between'>
                            <div className='flex flex-col gap-2 w-[80%] items justify-center'>
                                <p className='text-[24px] flex flex-row items-center gap-4 text-left leading-none font-bold text-[var(--color-secondary)]'><FontAwesomeIcon icon={faFire} className='w-[20px] h-[20px] text-[var(--color-secondary)]' />Pre-Test</p>
                                <p className='text-sm font-normal text-[var(--color-secondary)] text-balance leading-7'><span className='font-semibold'>Sebelum memulai pembelajaran</span> menggunakan Logic Base harap mengisi pre-test terlebih dahulu ya. Dilarang bekerja sama dengan teman! Kerjakan sesuai kemampuanmu ya.</p>
                            </div>
                            <button onClick={() => navigate(`/main/forms/pretest`)} className='h-full p-6 bg-[var(--color-tertiary)] hover:bg-[var(--color-accent)] rounded-full group'>
                                <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]' />
                            </button>
                        </div>
                        <div className='col-span-3 row-span-1 bg-[var(--color-non-primary)] rounded-3xl p-8 flex flex-row justify-between'>
                            <div className='flex flex-col gap-2 w-[80%] items justify-center'>
                                <p className='text-[24px] flex flex-row items-center gap-4 text-left leading-none font-bold text-[var(--color-secondary)]'><FontAwesomeIcon icon={faBook} className='w-[20px] h-[20px] text-[var(--color-secondary)]' />Post-Test</p>
                                <p className='text-sm font-normal text-[var(--color-secondary)] text-balance leading-7'>Terima kasih sudah <span className='font-semibold'>menyelesaikan pembelajaran</span> di Logic Base! Jangan lupa untuk mengerjakan post-test pembelajaran sebagai syarat untuk mendapatkan reward! </p>
                            </div>
                            <button onClick={() => navigate(`/main/forms/posttest`)} className='h-full p-6 bg-[var(--color-tertiary)] hover:bg-[var(--color-accent)] rounded-full group'>
                                <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]' />
                            </button>
                        </div>
                        <div className='col-span-3 row-span-1 bg-[var(--color-non-primary)] rounded-3xl p-8 flex flex-row justify-between'>
                            <div className='flex flex-col gap-2 w-[80%] items justify-center'>
                                <p className='text-[24px] flex flex-row items-center gap-4 text-left leading-none font-bold text-[var(--color-secondary)]'><FontAwesomeIcon icon={faCamera} className='w-[20px] h-[20px] text-[var(--color-secondary)]' />Kuisioner</p>
                                <p className='text-sm font-normal text-[var(--color-secondary)] text-balance leading-7'>Terima kasih sudah <span className='font-semibold'>menyelesaikan pembelajaran</span> di Logic Base! Jangan lupa untuk mengerjakan kuesioner pembelajaran sebagai syarat untuk mendapatkan reward! </p>
                            </div>
                            <button onClick={() => navigate(`/main/forms/kuisioner`)} className='h-full p-6 bg-[var(--color-tertiary)] hover:bg-[var(--color-accent)] rounded-full group'>
                                <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]' />
                            </button>
                        </div>
                    </section>

                    <section className='w-full h-fit grid grid-cols-3 gap-4 justify-between rounded-3xl' id='class'>
                        <div className='h-fit col-span-2 flex flex-col gap-6 bg-[var(--color-non-primary)] rounded-3xl p-12'>
                            <div className='flex flex-col gap-6 mb-12'>
                                <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-secondary)] w-fit p-4 border-2 border-[var(--color-secondary)] rounded-full'>Semangat Belajar, {username}!</h3>
                                <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-secondary)] uppercase'>Aktivitas Pembelajaran</h2>
                                <div className='flex flex-row items-center gap-4'>
                                    <FontAwesomeIcon icon={faStar} className='text-[var(--color-tertiary)]' />
                                    <p className='text-[var(--color-secondary)]'>4.5</p>
                                    <FontAwesomeIcon icon={faBarChart} className='text-[var(--color-secondary)]' />
                                    <p className='text-[var(--color-secondary)]'>Beginner</p>
                                    <FontAwesomeIcon icon={faClock} className='text-[var(--color-secondary)]' />
                                    <p className='text-[var(--color-secondary)]'>6 Hours</p>
                                </div>
                            </div>

                            {
                                courseList &&
                                courseList.map((i, index) => {

                                    const startDate = new Date(i.course.courseDate);
                                    const day = startDate.getDate();
                                    const month = startDate.toLocaleString('en-US', { month: 'short' });
                                    const percentage = i.progress / 100;

                                    return (
                                        <div
                                            onClick={() => handleClass(i.course.id)}
                                            key={index}
                                            className='w-full h-auto flex flex-col justify-between gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-3xl p-12 cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-2'
                                        >
                                            <div className='flex flex-row justify-between items-start rounded-3xl'>
                                                <div className='w-full h-[160px] gap-6 flex flex-row justify-start items-start'>
                                                    <img src={Icon} alt='Course Icon' className='w-[20%]' />
                                                    <div className='w-[60%] space-y-4'>
                                                        <h3 className='text-[20px] text-left font-bold text-[var(--color-secondary)] leading-6 text-balance'>
                                                            {i.course.title}
                                                        </h3>
                                                        <p className='text-sm leading-7'>{i.course.overview}</p>
                                                    </div>
                                                </div>
                                                <div className='w-[72px] h-[72px] p-4 bg-[var(--color-accent)] text-center  rounded-xl'>
                                                    <h2 className='text-[24px] leading-none font-bold text-[var(--color-primary)]'>{day}</h2>
                                                    <p className='text-sm text-[var(--color-primary)]'>{month}</p>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-row justify-between items-center'>
                                                <div className='w-[80%] h-4 bg-[var(--color-non-primary)] rounded-full overflow-hidden'>
                                                    <div
                                                        className="bg-[var(--color-accent)] h-full rounded-full"
                                                        style={{ width: `${percentage * 100}%` }}
                                                    ></div>
                                                </div>
                                                <p className='text-sm flex flex-row items-center gap-2 hover:font-bold'>
                                                    Start Now
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div className='h-full flex flex-col justify-between'>
                            <div className='h-fit flex flex-col gap-6 p-12'>
                                <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-secondary)] w-fit p-4 border-2 border-[var(--color-secondary)] mb-4 rounded-full'>Important Notes</h3>
                                <div className='w-full h-fit flex flex-row justify-start items-start gap-6'>
                                    <div className='bg-[var(--color-accent)] rounded-lg flex justify-center items-center p-4'>
                                        <FontAwesomeIcon icon={faBook} className='w-[24px] h-[24px] text-[var(--color-primary)]' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Basic SQL</h3>
                                        <p className='text-sm leading-6'>Belajar dasar SQL tersedia dari website W3SCHOOL</p>
                                        <a className='text-sm font-semibold hover:underline flex flex-row items-center gap-2' href='https://www.w3schools.com/sql/' target='__blank'>Go To<FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                                <hr className="border-[var(--secondary)]" />
                                <div className='w-full h-fit flex flex-row justify-start items-start gap-6'>
                                    <div className='bg-[var(--color-accent)] rounded-lg flex justify-center items-center p-4'>
                                        <FontAwesomeIcon icon={faBook} className='w-[24px] h-[24px] text-[var(--color-primary)]' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>SQL Course</h3>
                                        <p className='text-sm leading-6'>Kursus gratis untuk belajar dan berlatih SQL</p>
                                        <a className='text-sm font-semibold hover:underline flex flex-row items-center gap-2' href='https://www.codecademy.com/learn/learn-sql' target='__blank'>Go To<FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                                <hr className="border-[var(--color-secondary)]" />
                                <div className='w-full h-fit flex flex-row justify-start items-start gap-6'>
                                    <div className='bg-[var(--color-accent)] rounded-lg flex justify-center items-center p-4'>
                                        <FontAwesomeIcon icon={faBook} className='w-[24px] h-[24px] text-[var(--color-primary)]' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Practical With MYSQL</h3>
                                        <p className='text-sm leading-6'>Unduh aplikasi MYSQL Workbench untuk membantu berlatih SQL</p>
                                        <a className='text-sm font-semibold hover:underline flex flex-row items-center gap-2' href='https://www.mysql.com/downloads/' target='__blank'>Go To<FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                                <hr className="border-[var(--color-secondary)]" />
                                <div className='w-full h-fit flex flex-row justify-start items-start gap-6'>
                                    <div className='bg-[var(--color-accent)] rounded-lg flex justify-center items-center p-4'>
                                        <FontAwesomeIcon icon={faBook} className='w-[24px] h-[24px] text-[var(--color-primary)]' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Practice with XAMPP</h3>
                                        <p className='text-sm leading-6'>Unduh XAMPP kemudian jalankan server MYSQL dan Apache</p>
                                        <a className='text-sm font-semibold hover:underline flex flex-row items-center gap-2' href='https://www.apachefriends.org/download.html' target='__blank'>Go To<FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                                <hr className="border-[var(--color-secondary)]" />
                            </div>
                            <div className='relative h-[360px] bg-[var(--color-accent)] rounded-3xl w-full overflow-hidden p-6'>
                                <h2 className='text-[48px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>Do Not <br />Forget to Train Yourself</h2>
                                <img className='absolute h-[50%] w-auto bottom-0 right-0' src={Corner} alt='Character' />
                            </div>
                        </div>
                    </section>
                    <section className='w-full h-[360px] grid grid-cols-4 grid-rows-2 gap-6 justify-between' id='help'>
                        <div className='relative row-span-2 bg-[var(--color-accent)] rounded-3xl w-full overflow-hidden p-6'>
                            <h2 className='text-[42px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>Butuh<br />Bantuan?</h2>
                            <img className='absolute h-[70%] w-auto bottom-0 right-0' src={Help} alt='Character' />
                        </div>
                        <div className='relative row-span-2 space-y-4 bg-[var(--color-tertiary)] rounded-3xl w-full overflow-hidden p-6'>
                            <h2 className='text-[42px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>Tanya Guru-Mu!</h2>
                            <button onClick={playSound} className='font-normal transform ease-in-out duration-300 transition-all flex flex-row items-center gap-4 p-4 bg-[var(--color-primary)] rounded-full hover:scale-90'>Play Sound <FontAwesomeIcon icon={faMusic} /></button>
                            <img className='absolute h-[50%] w-auto bottom-0 right-0' src={HelpYellow} alt='Character' />
                        </div>
                        <div className='relative row-span-2 space-y-4 bg-[var(--color-tertiary)] rounded-3xl w-full overflow-hidden p-6'>
                            <h2 className='text-[42px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>FAQ's</h2>
                            <p className='text-sm font-normal text-[var(--color-primary)] text-balance leading-7'>Frequently Asked Question</p>
                            <Link to='/main/question' className='w-fit font-normal transform ease-in-out duration-300 transition-all flex flex-row items-center gap-4 p-4 bg-[var(--color-primary)] rounded-full hover:scale-90'>Help Me!<FontAwesomeIcon icon={faArrowRight} /></Link>
                            <img className='absolute h-[50%] w-auto bottom-0 right-0' src={CharacterYellow} alt='Character' />
                        </div>
                        <div className='relative row-span-2 space-y-4 bg-[var(--color-tertiary)] rounded-3xl w-full overflow-hidden p-6'>
                            <h2 className='text-[42px] text-left leading-none font-bold text-[var(--color-primary)] uppercase'>Teacher Contact</h2>
                            <Link to='https://wa.me/+6281289156879?text=Halo%20saya%20perlu%20bantuan%20tentang%20Logic%20Base%20😄' className='font-normal w-fit transform ease-in-out duration-300 transition-all flex flex-row items-center gap-4 p-4 bg-[var(--color-primary)] rounded-full hover:scale-90' target='__blank'>Contact<FontAwesomeIcon icon={faPhone} /></Link>
                            <img className='absolute h-[50%] w-auto bottom-0 right-0' src={CornerYellow} alt='Character' />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default MainContent;