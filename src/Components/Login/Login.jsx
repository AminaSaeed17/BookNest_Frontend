import React, { useContext, useState } from 'react'
import registerImge from '../../../src/assets/imgs/authImage.png'
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.jsx';
import Logo from '../Logo/Logo.jsx';

export default function Login() {
  let [apiError, setApiError] = useState(null);
  let [loading, setLoading] = useState(false);
  const { setUserToken } = useContext(UserContext);
  let navigate = useNavigate();

  async function login(values){
    try{
      setLoading(true);
      let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values);
      console.log(data);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate('/home');
    }catch(err){
      console.log(err.response.data.message);
      setApiError(err.response.data.message);
      setLoading(false);
    }
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9@#$%^&*!]{7,}$/,
        "Password must start with a capital letter and be at least 8 characters"
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    },validationSchema
    ,onSubmit: login
  })
  return (
    <div className='min-h-screen bg-[#EDE0CF] flex items-center justify-center p-8'>
      <div className='flex rounded-[28px] overflow-hidden shadow-2xl w-full max-w-3xl min-h-[540px]'>
        <div className='bg-[#DBBE9E] w-[50%] p-9 flex-col items-center justify-center text-center shrink-0 hidden lg:flex'>
          <div className='mb-4'>
            <Logo/>
          </div>
          <h2 className='text-[16px] font-semibold text-[#2C2018] mb-2 leading-snug'>Welcome to BookNest</h2>
          <p className='text-[12px] text-[#5C4530] leading-relaxed mb-5'>
            Your personal reading sanctuary. Discover, read, and organize your favorite books all in one place.
          </p>
          <img
            src={registerImge}
            alt="BookNest"
            className='w-full rounded-2xl object-cover h-90'
          />
        </div>

        <div className='lg:hidden absolute top-0 left-0 right-0 bg-[#DBBE9E] flex items-center gap-3 px-5 py-4'>
          <div className='w-9 h-9 bg-[#B8845A] rounded-xl flex items-center justify-center shadow-sm shrink-0'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <span className='text-sm font-semibold text-[#2C2018]'>BookNest</span>
        </div>

        <div className='bg-[#FDFAF7] flex-1 p-9 lg:p-9 px-5 flex flex-col justify-center'>

          <h2 className='text-[20px] font-semibold text-[#2C2018] mb-1'>Welcome Back</h2>
          <p className='text-[13px] text-[#9A8878] mb-6'>Login to continue your reading journey</p>

          <form className='flex flex-col gap-3.5' onSubmit={formik.handleSubmit}>
            {apiError &&<div className="p-4 mb-4 text-sm text-red-500 rounded-xl bg-[#fda5d5]/20" role="alert">
                    {apiError}
            </div>}
            <div>
              <label className='block mb-1.5 text-xs font-medium text-[#444]'>Email Address</label>
              <input
                type='email'
                name='email'
                id="email"
                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                className='w-full bg-[#F5F2EE] border border-[#E8D4B8] text-[#2C2018] text-sm rounded-xl px-3 py-1 outline-none focus:ring-2 focus:ring-[#D4A574]/20 placeholder:text-[#C0B0A0]'
                placeholder='Enter your email'
              />
            </div>
            {formik.errors.email && formik.touched.email && <div className="p-4 mb-4 text-sm text-red-500 rounded-xl bg-[#fda5d5]/20" role="alert">
                {formik.errors.email}
               </div>}
            <div>
              <label className='block mb-1.5 text-xs font-medium text-[#444]'>Password</label>
              <input
                type='password'
                name='password' 
                id="password"
                value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                className='w-full bg-[#F5F2EE] border text-[#2C2018] text-sm rounded-xl px-3 py-1 outline-none border-[#E8D4B8] focus:ring-2 focus:ring-[#D4A574]/20 placeholder:text-[#C0B0A0]'
                placeholder='Enter your password'
              />
            </div>
             {formik.errors.password && formik.touched.password && <div className="p-4 mb-4 text-sm text-red-500 rounded-xl bg-[#fda5d5]/20" role="alert">
               {formik.errors.password}
               </div>}

          <div className='flex justify-between items-center mt-3 mb-5'>
            <label className='flex items-center gap-2 text-xs text-[#666] cursor-pointer'>
              <input type='checkbox' className='w-3.5 h-3.5 accent-[#D4A574]' />
              Remember me
            </label>
            <NavLink to={'/ForgetPass'} className='text-xs text-[#D4A574] hover:underline'>Forgot Password?</NavLink>
          </div>

          {loading? <button type="submit" className="text-white bg-[#D4A574] w-full box-border border border-transparent  hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[14px] text-sm px-4 py-2.5 focus:outline-none cursor-pointer"><i className='fas fa-spinner fa-spin'></i></button> :  <button type="submit" className="text-white bg-[#D4A574] w-full box-border border border-transparent  hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-[14px] text-sm px-4 py-2.5 focus:outline-none">Login</button>}

          <p className='text-xs text-[#9A8878] text-center'>
            Don't have an account?{' '}
            <button onClick={()=>navigate('/register')} className='text-[#D4A574] font-medium hover:underline'>Register</button>
          </p>
          </form>
        </div>

      </div>
    </div>
  )
}

