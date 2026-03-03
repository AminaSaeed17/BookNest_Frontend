import React from 'react'
import ShareSection from '../SharSections/ShareSection.jsx'
import { NavLink } from 'react-router-dom'

export default function GuestPage() {
  return <>
    {/* <section className="bg-linear-to-b from-[#F8F6F3] via-[#F5E6D3] via-[40%] to-[#F8F6F3]">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-[#4A3D2F] text-heading md:text-5xl lg:text-6xl">Welcome to BookNest</h1>
        <p className="mb-8 text-base max-w-2xl mx-auto text-[#4A3D2F] font-normal text-body md:text-xl">Join thousands of readers discovering new books every day. Start your reading journey with personalized recommendations.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
          <button type="button" className="inline-flex items-center justify-center bg-[#FFFFFF] bg-brand hover:bg-brand-strong box-border border-[1.6px] border-[#E8D4B8] cursor-pointer focus:ring-4 focus:ring-brand-medium shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] font-medium rounded-base text-base px-5 py-3 focus:outline-none">
            Login
          </button>
          <button type="button" className="bg-linear-to-b from-[#D4A574] to-[#C39563] leading-4 cursor-pointer shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">Sign Up Now</button>
        </div>
      </div>
    </section> */}
    <section className="bg-gradient-to-b from-[#F8F6F3] via-[#F5E6D3] to-[#F8F6F3]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#4A3D2F] leading-tight">
            Welcome to BookNest
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[#6B5744] leading-relaxed">
            Join thousands of readers discovering new books every day.
            Start your reading journey with personalized recommendations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <NavLink
              to="/login"
              className="rounded-full border border-[#E8D4B8] bg-white px-6 py-3 text-sm font-medium text-[#4A3D2F] shadow-md hover:bg-[#F5E6D3] transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white 
              bg-gradient-to-b from-[#D4A574] to-[#C39563] 
              shadow-md hover:shadow-lg transition"
            >
              Sign Up Now
            </NavLink>
          </div>
        </div>
      </section>
    <ShareSection/>

  </>
}
