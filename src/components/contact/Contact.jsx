import './contact.css'
import contactImg from '../../assets/images/anastase-maragos-ehQimz6-1qM-unsplash.jpg'

export default function Contact(){

    return(
        <>
            <div className='flex justify-center contact-container'>
                <form className='flex background'>
                    <div className='contact-left-dev flex'>
                        <h1 className='get-in-touch-contact'>Get in touch 👋</h1>
                        <div className='form-inputs-div-container'>
                            {/* Name */}
                            <div className='form-input-div'>
                                <label className='label' htmlFor="name">Name</label>
                                <input className='input-fields input-height' type="text" name='name' placeholder='Enter your name' />
                            </div>

                            {/* Phone */}
                            <div className='form-input-div'>
                                <label className='label' htmlFor="phone">Phone</label>
                                <input className='input-fields input-height' type="number" name='phone' placeholder='Enter your phone' />
                            </div>

                            {/* Email */}
                            <div className='form-input-div'>
                                <label className='label' htmlFor="email">Email</label>
                                <input className='input-fields input-height' type="email" name='email' placeholder='Enter your email' />
                            </div>

                             {/* Message */}
                             <div className='form-input-div'>
                                <label className='label' htmlFor="message">Message</label>
                                <textarea rows="5" className='input-fields' type="text" name='message' placeholder='Enter your description'></textarea>
                            </div>
                              {/* Submit */}
                              <div className='form-input-div'>
                                <button className='submit'  id="Submit-button">submit</button>
                            </div>

                        </div>
                    </div>

                    <div className='form-image-div'>
                        <img className='contact-image' src={contactImg} alt="Man standing and holding two dumbbells" />

                    </div>

                </form>
            </div>
        </>
    )

}