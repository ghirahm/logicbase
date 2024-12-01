import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCirclePlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const ClassOrganization = () => {
    const navigate = useNavigate();
    return (
    <>
        <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
            <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                <div className='w-full h-full flex flex-col gap-8'>
                    <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                        <FontAwesomeIcon icon={faBolt} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase '>Organisasi Peserta Didik</h3>
                    </div>
                    <div className='w-full h-fit space-y-4'>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                            </div>
                            <h3 className='text-[20px] text-left leading-none font-semibold'>Ikuti Instruksi Berikut!</h3>
                        </div>
                    </div>
                    <div className='w-full h-[72px] bg-[var(--color-non-primary)] rounded-3xl'>
                
                    </div>
                    <div className='w-full h-[72px] bg-[var(--color-non-primary)] rounded-3xl'>
                        
                    </div>
                    <div className='w-full h-[72px] bg-[var(--color-non-primary)] rounded-3xl'>
                        
                    </div>
                    <div className='space-y-2'>
                        <label for="group_number">Nomor Kelompok:</label><br></br>
                        <input type="text" id="group_number" name="group_number" className='bg-[var(--color-primary)] border border-[var(--color-secondary)] text-[var(--color-secondary)] text-sm rounded-lg focus:ring-[var(--color-secondary)] focus:border-[var(--color-secondary)] block w-full p-2.5'/><br></br>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-between'>
                    <button onClick={() => navigate('/class/orientationQuiz')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] rotate-180' />
                        <p className='font-normal transform ease-in-out duration-300 transition-all '>Back</p> 
                    </button>
                    <button onClick={() => navigate('/class/research')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Step 3: Research Guide</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                    </button>
                </div>
            </div>
        </section>
    </>
    )
}

export default ClassOrganization