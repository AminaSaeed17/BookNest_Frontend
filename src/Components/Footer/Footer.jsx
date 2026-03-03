import React from 'react'

export default function Footer() {
  return <>
    <footer className="bg-neutral-primary-soft border-t-1 mt-14 bg-[#FFFFFF]">
      <div className="mx-auto w-full max-w-screen-xl p-2 py-6 lg:py-8">
        {/* <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-7 me-3" alt="FlowBite Logo" />
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 bg-black">
            <div>
              <h3 className="mb-6 text-sm font-semibold text-heading uppercase">Quick Links</h3>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Home</a>
                </li>
                <li className='mb-4'>
                  <a href="https://tailwindcss.com/" className="hover:underline">Categories</a>
                </li>
                <li className='mb-4'>
                  <a href="https://tailwindcss.com/" className="hover:underline">Improve language</a>
                </li>
                <li className='mb-4'>
                  <a href="https://tailwindcss.com/" className="hover:underline">About</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-heading uppercase">Support</h3>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Help Center</a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Terms Of Service</a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7 me-3"
                alt="Logo"
              />
              <span className="text-heading text-2xl font-semibold whitespace-nowrap">
                BookNest
              </span>
            </a>
            <div className='mb-4'>
              <p>Your Personal reading sanctuary, Discover, read, and organize your favorite books all in one place</p>
            </div>
            <div className="flex mt-4 sm:mt-0">
            social media
            </div>
          </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-heading uppercase">
                Quick Links
              </h3>
              <ul className="text-body font-medium space-y-2">
                <li><a className="hover:underline">Home</a></li>
                <li><a className="hover:underline">Categories</a></li>
                <li><a className="hover:underline">Improve language</a></li>
                <li><a className="hover:underline">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-heading uppercase">
                Support
              </h3>
              <ul className="text-body font-medium space-y-2">
                <li><a className="hover:underline">Help Center</a></li>
                <li><a className="hover:underline">Privacy Policy</a></li>
                <li><a className="hover:underline">Terms Of Service</a></li>
                <li><a className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
        </div>

        <hr className="my-6 border-default opacity-20 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-body sm:text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">BookNest</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  </>
}
