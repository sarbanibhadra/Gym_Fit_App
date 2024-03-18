import './contact.css'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import {motion as m } from 'framer-motion';
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react';
export default function Success() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [pieces, setPieces] = useState(220);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000);
    };
    useEffect(() => {
        stopConfetti();
    }, []);
    return(
        
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}} exit={{opacity: 0}} >
            <main className="flex justify-center contact-container flex-wrap align-center">
                <div className='background success-container'>
                    <h2>Thank you for your message <span className='red'>{searchParams.get('name')}.</span></h2>
                    <p>We have sent you an email to {searchParams.get('email')}. We will get back to you as soon as possible!</p>
                    <button onClick={() => navigate(-1)}>Home page</button>
                </div>
            </main>
            <Confetti gravity={0.2} numberOfPieces={pieces} />
        </m.div>

    )
    
}