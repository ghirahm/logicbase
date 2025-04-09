/* Asset */
import Banner from '../assets/bannerHero.png';

/* Icon Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCopy, faEye, faStar, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

/* React Hooks */
import { useNavigate } from 'react-router';

const BasicContent = () => {
    const navigate = useNavigate();
    return (
        <main className='w-full h-fit flex flex-col gap-6' id='home'>
            {/* Hero */}
            <section className='w-full min-h-[80vh] md:min-h-[100vh] relative bg-[var(--color-tertiary)] pt-[120px] overflow-hidden'>
                <div className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[80%] h-full mx-auto'>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
                        <h1 className='text-[36px] md:text-[48px] lg:text-[72px] xl:text-[84px] text-left leading-tight font-bold text-[var(--color-primary)]'>Improve Your Skills Faster</h1>
                        <div className='flex flex-col gap-6'>
                            <p className='md:text-[12px] xl:text-[16px] text-left font-normal text-[var(--color-primary)] text-balance'>Speed Up Logical Thinking Ability by Finding Unlimited Course That Matches Your Niche</p>
                            <button onClick={() => navigate('/login')} className='w-fit h-auto flex items-center justify-center gap-2 border border-[var(--color-primary)] bg-[var(--color-tertiary)] text-[var(--color-primary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                                <p className='font-bold transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Get Started</p>
                                <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-primary)]' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] md:w-[40%] h-auto absolute bottom-[-50px] m-auto left-0 right-0'>
                    <img src={Banner} alt='Banner Class' className='w-full h-full' />
                </div>
            </section>
            {/* Rate */}
            <section className='w-full h-[120px] md:h-[160px] xl:h-[240px] flex items-center justify-center bg-[var(--color-primary)]'>
                <div className='w-[80%] h-full flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-12 xl:gap-24'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-[20px] md:text-[32px] xl:text-[64px] text-left leading-none font-bold text-[var(--color-secondary)]'>4.8</h2>
                        <p className='text-[12px] md:text-[12px] xl:text-[16px] text-left font-normal text-[var(--color-secondary)]'>50+ Review</p>
                    </div>
                    <div className='font-bold'>
                        <h1>|</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-[20px] md:text-[32px] xl:text-[64px] text-left leading-none font-bold text-[var(--color-secondary)]'>30</h2>
                        <p className='text-[12px] md:text-[12px] xl:text-[16px] text-left font-normal text-[var(--color-secondary)]'>Enrollments</p>
                    </div>
                    <div className='font-bold'>
                        <h1>|</h1>
                    </div>
                    <div className='text-[20px] flex flex-col justify-center items-center gap-2'>
                        <h2 className='md:text-[32px] xl:text-[64px] text-left leading-none font-bold text-[var(--color-secondary)]'>50+</h2>
                        <p className='text-[12px] md:text-[12px] xl:text-[16px] text-left font-normal text-[var(--color-secondary)]'>Learners</p>
                    </div>
                    <div className='font-bold'>
                        <h1>|</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-[20px] md:text-[32px] xl:text-[64px] text-left leading-none font-bold text-[var(--color-secondary)]'>2+</h2>
                        <p className='text-[12px] md:text-[12px] xl:text-[16px] font-normal text-[var(--color-secondary)]'>Popular Courses</p>
                    </div>
                </div>
            </section>
            {/* Feature */}
            <section className='w-full h-fit flex items-start justify-center bg-[var(--color-primary)] pb-[120px]' id='blog'>
                <div className='w-[80%] h-full flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 my-0 gap-4'>
                    <div className='relative h-[240px] col-span-2 flex flex-col gap-6 bg-[var(--color-tertiary)] rounded-xl p-6 overflow-hidden border-2 border-[var(--color-tertiary)] transition-all ease-in-out hover:-translate-y-2'>
                        <h2 className='text-[32px] md:text-[52px] text-left leading-none font-bold text-[var(--color-primary)] text-balance'>Our Features<br></br>Special For You</h2>
                        <button onClick={() => navigate('/login')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px]'>
                            <p className='font-normal transform ease-in-out duration-300 transition-all hover:mr-8 '>Learn More</p>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] -rotate-45' />
                        </button>
                        <div className='absolute md:hidden xl:block xl:w-[360px] xl:h-[360px] right-[-120px] bg-[var(--color-primary)] rounded-full top-0 bottom-0 m-auto'></div>
                    </div>
                    <div className='md:h-[360px] lg:h-[240px] flex flex-col gap-8 justify-start bg-[var(--color-primary)] border-2 border-b-8 border-[var(--color-non-primary)] hover:border-[var(--color-tertiary)] rounded-xl p-6 transition-all ease-in-out duration-300 hover:-translate-y-2 opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faWandMagicSparkles} className='w-[36px] h-[36px] text-[var(--color-secondary)]' />
                        <div className='flex flex-col gap-2'>
                            <h3 className='md:text-[16px] lg:text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Logic Base Empower Mind</h3>
                            <p className='text-[12px] text-left font-normal text-[var(--color-secondary)] leading-6'>Dive into applications crafted with precision and purpose. Our solutions are designed to challenge, engage, and refine your logical thinking skills. </p>
                        </div>
                    </div>
                    <div className='md:h-[360px] lg:h-[240px] flex flex-col gap-8 justify-start bg-[var(--color-primary)] border-2 border-b-8 border-[var(--color-non-primary)] hover:border-[var(--color-tertiary)] rounded-xl p-6 transition-all ease-in-out duration-300 hover:-translate-y-2 opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faStar} className='w-[36px] h-[36px] text-[var(--color-secondary)]' />
                        <div className='flex flex-col gap-2'>
                            <h3 className='md:text-[16px] lg:text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Logical Thinking Matters</h3>
                            <p className='text-[12px] text-left font-normal text-[var(--color-secondary)] leading-6'>Logical thinking is the backbone of innovation and problem-solving. It enables you to make decisions with confidence and tackle challenges systematically. </p>
                        </div>
                    </div>
                    <div className='md:h-[360px] lg:h-[240px] flex flex-col gap-8 justify-start bg-[var(--color-primary)] border-2 border-b-8 border-[var(--color-non-primary)] hover:border-[var(--color-tertiary)] rounded-xl p-6 transition-all ease-in-out duration-300 hover:-translate-y-2 opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faEye} className='w-[36px] h-[36px] text-[var(--color-secondary)]' />
                        <div className='flex flex-col gap-2'>
                            <h3 className='md:text-[16px] lg:text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Creator Behind the Vision</h3>
                            <p className='text-[12px] text-left font-normal text-[var(--color-secondary)] leading-6'>Nurmiyati Annisa Wolio is Indonesia University of Education student and dedicated creator and developer passionate about technology and education.</p>
                        </div>
                    </div>
                    <div className='md:h-[360px] lg:h-[240px] flex flex-col justify-start gap-8 bg-[var(--color-primary)] border-2 border-b-8 border-[var(--color-non-primary)] hover:border-[var(--color-tertiary)] rounded-xl p-6 transition-all ease-in-out duration-300 hover:-translate-y-2 opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faCopy} className='w-[36px] h-[36px] hover:text-[var(--color-secondary)]' />
                        <div className='flex flex-col gap-2'>
                            <h3 className='md:text-[16px] lg:text-[20px] text-left leading-none font-bold text-[var(--color-secondary)]'>Inspired by The Best</h3>
                            <p className='text-[12px] text-left font-normal text-[var(--color-secondary)] leading-6'>Logic Base was inspired by 15+ great website and learning applications such as Pinterest, Dribble, Educode, Duolingo, and Solo Learn.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BasicContent;