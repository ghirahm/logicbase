import React, { useEffect } from 'react';

const Alert = ({ isError, setIsError }) => {

    useEffect(() => {
        if (isError) {
            const timer = setTimeout(() => {
                setIsError(null);
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [isError, setIsError]);

    return (
        <section>
            {isError && <div className='relative'>
                <div className='fixed inset-x-0 mx-auto top-[160px] w-10/12 rounded-lg bg-white border text-red-700 px-4 py-3 z-10' role='alert'>
                    <span className='block sm:inline'>
                        {isError}
                    </span>
                    <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                        <svg onClick={() => setIsError(null)} className='fill-current h-6 w-6 text-red-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' >
                            <title>Close</title>
                            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                        </svg>
                    </span>
                </div>
            </div>
            }
        </section>
    )
}

export default Alert;