import React from 'react'
import registerImge from '../../../src/assets/imgs/photo_2026-02-11_13-29-50.jpg'

export default function Login() {
  return <>
    <div className='flex justify-center items-center'>
          <div className='flex justify-center'>
          <div className='bg-gradient-to-b from-[#F5E6D3] to-[#E8D4B8] p-21 text-center max-w-1/2'>
            <div>
              <div>Icon</div>
              <h2 className='text-[24px] leading-[36px] font-normal text-center font-arimo mb-5 text-[#333333]'>Welcome to BookNest</h2>
              <p className='text-[16px] font-normal leading-6 mb-10 text-[#4A4A4A]'>Your personal reading sanctuary. Discover, read, and organize your favorite books all in one place.</p>
              <div className='w-full'>
              <img className='w-full rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]' src={registerImge} alt="" />
              </div>
            </div>
          </div>
          <div className='p-21 max-w-1/2 bg-[#F8F6F3] w-full flex items-center justify-center content-center'>
            <div className='bg-[#FFFFFF] p-10 rounded-3xl w-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
              <div>
                <h2 className='mb-2 text-xl text-[#333333]'>Welcome Back</h2>
                <p className='text-[16px] text-[#4A4A4A] mb-6'>Login to continue your reading journey</p>
              </div>
              <form className="max-w-sm">
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading text-[#333333]">Email Address</label>
                  <input type="email" id="email" className="bg-neutral-secondary-medium bg-[#F3F3F5] border-[0.8px] border-[#E8D4B8] text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-3 py-1 shadow-xs placeholder:text-body" placeholder="Enter your email" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="Password" className="block mb-2.5 text-sm font-medium text-heading text-[#333333]">Password</label>
                  <input type="Password" id="Password" className="bg-neutral-secondary-medium bg-[#F3F3F5] border-[0.8px] border-[#E8D4B8] text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-3 py-1 shadow-xs placeholder:text-body" placeholder="Create a password" required />
                </div>
                <div class="flex justify-between  mb-6">
                    <div className='flex'>
                      <div class="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
                      </div>
                      <label for="remember" class="ms-2 text-sm font-medium text-heading">Remember me</label>
                    </div>
                    <div>
                      <a href="#" class="text-fg-brand text-sm hover:underline text-[#D4A574]">Forgot Password?</a>
                    </div>
                </div>
                <button type="submit" class="text-white bg-[#D4A574] w-full box-border border border-transparent  hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Login</button>
              </form>
              <p className='text-[#4A4A4A] text-center'>Don't have an account?<button className='text-[#D4A574]'>Register</button></p>
            </div>
          </div>
          </div>
        </div>
  </>
}
