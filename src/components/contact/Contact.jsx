import './contact.css'
import contactImg from '../../assets/images/anastase-maragos-ehQimz6-1qM-unsplash.jpg'
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact(){
    const navigate = useNavigate();
    const form = useRef();

    // Formik login here
    const formik = useFormik({
        initialValues: {
            name: "",
            phone:"",
            email:"",
            message:"",
        },

        // Validation

        validationSchema: Yup.object({
            name: Yup.string()
            .max(30, 'Name must be 30 characters or less.')
            .required('Name is required!'),
            phone: Yup.string()
            .max(13, 'Phone must be 13 characters or less.')
            .required('Phone is required!'),
            email: Yup.string()
            .email('Invalid email address!')
            .required('Email is required!'),
            message: Yup.string()
            .max(70, 'Message must be 70 characters or less.')
            .required("Message is required")


        }),

        // for submit form
        onSubmit: (values) =>{
            console.log(values);
            const options = {
                pathname: "/success",
                search: (`?${createSearchParams(values)}`)

            }
            // console.log(setSearchParams);
            navigate(options, {replace: true});
            emailjs
            .sendForm('service_c6zen3o', 'template_r47l60d',form.current, {
                publicKey: '7XUholajTP40UFCZR',
            })
            .then(
                () => {
                    console.log("Success")
                },
                (error) =>{
                    console.log('Failed...', error.text);
                },
            );
        },
    });
    // console.log(formik.values);
    return(
        <>
            <div className='flex justify-center contact-container'>
                <form ref={form} onSubmit={formik.handleSubmit} className='flex background'>
                    <div className='contact-left-dev flex'>
                        <h1 className='get-in-touch-contact'>Get in touch 👋</h1>
                        <div className='form-inputs-div-container'>
                            {/* Name */}
                            <div className='form-input-div'>
                                <label className={`label ${formik.touched.name && formik.errors.name ? "text-red" : ""}`}htmlFor="name">
                                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                                <input 
                                className='input-fields input-height' 
                                type="text" name='name' 
                                placeholder='Enter your name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.onBlur} />
                            </div>

                            {/* Phone */}
                            <div className='form-input-div'>
                                <label className={`label ${formik.touched.phone && formik.errors.phone ? "text-red" : ""}`}htmlFor="phone">
                                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Phone"}</label>
                                <input 
                                className='input-fields input-height' 
                                type="number" 
                                name='phone' 
                                placeholder='Enter your phone'
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.onBlur}
                                />
                            </div>

                            {/* Email */}
                            <div className='form-input-div'>
                                <label className={`label ${formik.touched.email && formik.errors.email ? "text-red" : ""}`}htmlFor="email">
                                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                                <input 
                                className='input-fields input-height' 
                                type="email" 
                                name='email' 
                                placeholder='Enter your email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                 />
                            </div>

                             {/* Message */}
                             <div className='form-input-div'>
                                <label className={`label ${formik.touched.message && formik.errors.message ? "text-red" : ""}`}htmlFor="message">
                                {formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}</label>
                                <textarea
                                 rows="5" 
                                 className='input-fields' 
                                 type="text" 
                                 name='message' 
                                 placeholder='Enter your description'
                                 value={formik.values.message}
                                 onChange={formik.handleChange}
                                 onBlur={formik.onBlur}
                                >
                                </textarea>
                            </div>
                              {/* Submit */}
                              <div className='form-input-div'>
                                <button className='submit'  id="Submit-button" type='submit'>submit</button>
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