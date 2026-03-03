import React from 'react'

export default function ForgetPass() {
  return <>
    <div className='bg-[#F8F6F3]'>
      <div className='flex justify-center items-center flex-col h-lvh relative'>
        <div className='mb-8'>icon</div>
      <div className='bg-[#FFFFFF] header-font text-[#4A4A4A] rounded-3xl p-10 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
        <button className='relative left-[-20px]'><i class="fa-solid fa-arrow-left "></i> Back to Login</button>
        <div>
          <h3 className='text-[#333333] mb-2'>Forgot Password?</h3>
          <p className='text-[#4A4A4A] text-sm max-w-[300px] leading-6'>Enter your email address and we'll send you instructions to reset your password.</p>
        </div>
        <form class="max-w-sm mx-auto mt-4">
          <div class="mb-5">
            <label for="email" class="block mb-2.5 text-sm font-medium text-heading text-[#333333]">Email Address</label>
            <input type="email" id="email" class="bg-[#F3F3F5] border-[0.8px] border-[#E8D4B8] text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-3 py-1 shadow-xs placeholder:text-body" placeholder="Enter your email" required />
          </div>
          <button type="submit" class="text-[#FFFFFF] bg-[#D4A574] w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Send Reset Link</button>
        </form>
      </div>
      </div>
      <div className=''>
            <div className='absolute top-20 left-20 w-[256px] h-[256px] bg-[#F5E6D3] blur-xl opacity-50 rounded-full'></div>
            <div className='absolute bottom-20 right-20 w-[320px] h-[320px] bg-[#F5E6D3] blur-xl opacity-50 rounded-full'></div>
      </div>
    </div>
  </>
} 
