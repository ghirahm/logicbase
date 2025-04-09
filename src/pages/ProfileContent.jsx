/* React Hooks */
import { Link } from 'react-router-dom';

/* Icon Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCirclePlay, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

/* Assets */
import Avatar from '../assets/avatar.png';
import Profile from '../assets/profile.jpg';
import Icon from '../assets/icon.png';

/* Context */
import { useUser } from '../context/UserContext';

const ProfileContent = () => {
    const { username } = useUser();

    return (
        <main className='w-full h-fit flex justify-center lg:justify-end my-6 mb-[120px] lg:my-6' id='profile'>
            <div className='w-full lg:w-[85%] h-fit flex flex-col gap-4 lg:mr-6 px-4'>

                {/* Header */}
                <nav className='w-full h-[100px] flex justify-between items-center bg-[var(--color-non-primary)] rounded-full px-6 lg:px-12'>
                    <div className='w-fit h-fit flex flex-row justify-start items-center gap-2'>
                        <h2 className='text-[32px] text-left leading-none font-bold text-[var(--color-secondary)]'>Profile</h2>
                        <FontAwesomeIcon icon={faChartSimple} className='w-[24px] h-[24px] text-[var(--color-secondary)]' />
                    </div>

                    <div className='w-fit h-fit hidden md:flex flex-row justify-center items-center gap-2'>
                        <img id="avatarButton" type="button" className="w-10 h-10 rounded-full" src={Avatar} alt="User Dropdown" />
                        <p className='text-sm'>Halo, {username}</p>
                    </div>
                </nav>

                {/* Profile */}
                <section className='w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 pb-6 border-b-2'>
                    <div className='relative col-span-1 w-full h-full bg-[var(--color-non-primary)] flex flex-col justify-end items-start rounded-3xl overflow-hidden p-6'>
                        <img src={Profile} alt='Profile Nurmiyati Annisa Wolio' className='absolute inset-0 w-full h-full object-cover' />
                        <div className='z-10'>
                            <p className='text-sm font-normal text-[var(--color-primary)]'>Hello,</p>
                            <h1 className='text-[64px] text-left leading-none font-bold text-[var(--color-primary)]'>Aku Nurmi!</h1>
                            <p className='text-sm font-normal text-[var(--color-primary)] leading-7 z-10'>Success is not final, failure is not fatal, it is the courage to continue that counts.</p>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col gap-8'>
                        <div className='flex flex-col gap-6 border-b-2 py-6'>
                            <h2 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Introduction</h2>
                            <div className='rounded-3xl border-2 border-[var(--color-secondary)] w-full flex flex-row items-center justify-between gap-4 p-6 '>
                                <div className='flex flex-col items-start gap-6'>
                                    <h3 className='text-[20px] text-left leading-none font-semibold text-[var(--color-secondary)]'>Computer Science Graduated</h3>
                                    <p className='w-[80%] text-sm font-normal text-[var(--color-secondary)] leading-7'>Aku merupakan mahasiswi tingkat akhir di jurusan Pendidikan Ilmu Komputer Universitas Pendidikan Indonesia. Lahir di Jakarta, 4 Agustus 2002. Kebetulan pecinta spicy food, dan suka kucing.</p>
                                </div>
                                <img src={Icon} alt='Icon' className='hidden lg:block w-[108px]' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Get in Touch</h2>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                                <Link to='https:/instagram.com/sayangnurmii' target='__blank' className='col-span-1 h-[160px] bg-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-3xl flex flex-col justify-between p-4 transition-all duration-300 ease-in-out hover:-translate-y-2'>
                                    <FontAwesomeIcon icon={faInstagram} className='w-[48px] h-[48px] text-[var(--color-primary)]' />
                                    <div className='py-2 border-t-2 border-[var(--color-primary)] flex justify-end items-center'>
                                        <p className='text-xs font-normal text-[var(--color-primary)]'>instagram.com/sayangnurmii</p>
                                    </div>
                                </Link>
                                <Link to='https:/linkedin.com/in/nurmiyatiannisaw' target='__blank' className='col-span-1 h-[160px] bg-[var(--color-tertiary)] border-2 border-[var(--color-tertiary)]  rounded-3xl flex flex-col justify-between p-4 transition-all duration-300 ease-in-out hover:-translate-y-2'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='w-[48px] h-[48px] text-[var(--color-primary)]' />
                                    <div className='py-2 border-t-2 border-[var(--color-primary)] flex justify-end items-center'>
                                        <p className='text-xs font-normal text-[var(--color-primary)]'>linkedin.com/in/nurmiyatiannisaw</p>
                                    </div>
                                </Link>
                                <Link to='mailto:nurmiyatiannisaw@gmail.com' target='__blank' className='col-span-1 h-[160px] bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] rounded-3xl flex flex-col justify-between p-4 transition-all duration-300 ease-in-out hover:-translate-y-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className='w-[48px] h-[48px] text-[var(--color-secondary)]' />
                                    <div className='py-2 border-t-2 border-[var(--color-secondary)] flex justify-end items-center'>
                                        <p className='text-xs font-normal text-[var(--color-secondary)]'>nurmiyatiannisaw@gmail.com</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Credit */}
                <section>
                    <div className='flex flex-row items-center justify-start gap-4'>
                        <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                            <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                        </div>
                        <h3 className='text-[20px] text-left leading-none font-semibold'>Credit and References</h3>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ProfileContent