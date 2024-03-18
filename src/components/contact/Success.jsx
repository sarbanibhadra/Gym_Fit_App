import './contact.css'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
export default function Success() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('name'));
    return(
        
        <main className="flex justify-center contact-container flex-wrap align-center">
           <div className='background success-container'>
            <h2>Thank you for your message {searchParams.get('name')} </h2>
            <p>We have sent you an email to {searchParams.get('email')}. We will get back to you as soon as possible!</p>
            <button onClick={() => navigate(-1)}>Home page</button>
           </div>
        </main>
    )
    
}