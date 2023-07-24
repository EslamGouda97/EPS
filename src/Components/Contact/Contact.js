import { Spinner } from 'reactstrap';
import React, { useState } from 'react';
import axios from 'axios'
import { useFormik } from "formik";
import * as Yup from 'yup';
import ErrorText from './errorText';
import image from '../../Assets/cntct.jpg'
import './contact.css';
import './Form.css'

const ContactPage = (props)=>{
const[isLoading,setIsLoading] =useState(false)
const formik = useFormik({
initialValues:{
      name:"",
      email:'',
      messege:'' },
      onSubmit: (values) => {
      setIsLoading(true)
      console.log(values)
      
      axios.post('https://sheet.best/api/sheets/e332dc07-2fc1-4555-ba5a-4ce5b32c46ef', values).then( res=>{props.toggle()}).catch(error =>{})
      setIsLoading(false)},validationSchema: Yup.object({
      name:Yup.string().max(15, "maximum length is 15 letters").required("Name is mandatory"),
      email:Yup.string().email("Invalid email address").required("required"),
      messege:Yup.string().min(5,"comment must be at least 5 letters long").required("Can't send an empty messege")})})


return (
   <>
   <div className="col-12 section-intro contact-page text-center  ">
   <div className="hline text-center"> 
</div>
   </div>
   <div className="container mb-5">
      <div className="row align-items-center">
         <div className="col-lg-4 image">
            <img src={image} alt="" />
         </div>
         <div className="col-lg-7 offset-lg-1">
         <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
         <label>
         Name
      </label>
         <input
         id='name'
         type="text"
      
         onChange={formik.handleChange}
         value={formik.values.name}
         />
         {formik.errors.name? <ErrorText error={formik.errors.name}/> : null}
         
         <label>
            Email
         </label>
         <input
         id='email'
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         />
         {formik.errors.email? <ErrorText error={formik.errors.email} /> : null}

         <label>Enter your message</label>        
         <textarea
         id='messege'
         type="text"
         rows={5}
         onChange={formik.handleChange}
         value={formik.values.messege}
         />
         {formik.errors.messege? <ErrorText error={formik.errors.messege} /> : null}


         {
         isLoading?(
            <div className='self-end m-[10px]'>
            <Spinner/>
            </div>
         ):(
            <button className='bg-warning text-dark' type='submit' disabled={!formik.isValid} >
            Send!
      </button>
         )
         }
         </form>
      </div>
      </div>
      </div>
      </>
)
}

export default ContactPage;