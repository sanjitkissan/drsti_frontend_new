import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { page404 } from '../assets/404';

function Error() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
router.push("/")
        },200)
    },[])
    return (
        <section className='w-full h-screen flex !flex-col items-center justify-center gap-4'>
            <div className='w-80, h-80 center'>
             <img src={page404.src} alt="" className='w-full h-full' />
           
            <p className='text-4xl w-full text-center text-red-600 font-bold'>Opps! Page not found</p>
            <p className='text-2xl w-full text-center'>
               Sorry, the page {`you're`} looking for {`doesn't`} exist. If you think something is broken, report a problem.
            </p>
            
            </div>
        </section>
    );
}

export default Error;