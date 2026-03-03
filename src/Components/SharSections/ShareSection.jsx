import React from 'react'
import Slider from "react-slick";
import spotlightImg from '../../../src/assets/imgs/71qsovx-x6L._AC_UL320_.jpg'
import James_Clear from '../../../src/assets/imgs/james-Clear.webp'
import OIP from '../../../src/assets/imgs/OIP.webp'

export default function ShareSection() {
  const settings = {
    dots: false,
    arrows: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return <>
    <div>
      <section className='mt-10 px-20 py-10 bg-[#FFFFFF]'>
        <h1 className='text-center text-[#6B5744] font-semibold text-[40px]'>Why Choose BookNest?</h1>
        <div className='flex mt-5 gap-6'>
          <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#F4E8D7] rounded-xl'>
              <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
              <div className="contentCard">
                <h2 className='text-[#795420] font-medium '>Curated Collection</h2>
                <p className='text-xl'>Handpicked books across all genres for every reade</p>
              </div>
          </div>
          <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#F4E8D7] rounded-xl'>
              <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
              <div className="contentCard">
                <h2 className='text-[#795420] font-medium'>Personalized</h2>
                <p className='text-xl'>Smart recommendations based on your reading taste</p>
              </div>
          </div>
          <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#F4E8D7] rounded-xl'>
              <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
              <div className="contentCard">
                <h2 className='text-[#795420] font-medium '>Ad-Free Reading</h2>
                <p className='text-xl'>Ad-Free Reading</p>
              </div>
          </div>
          <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#F4E8D7] rounded-xl'>
              <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
              <div className="contentCard">
                <h2 className='text-[#795420] font-medium '>Track Progress</h2>
                <p className='text-xl'>Monitor your reading journey and achievements</p>
              </div>
          </div>
        </div>
      </section>
      {/* <section className='mt-20'>
        <h1 className='text-center text-[#6B5744] font-semibold '>Spotlight</h1>
        <div className='flex gap-5 pt-10 pb-10 pr-20 pl-20 bg-[#F1E1CB] mt-10 mb-10'>
          <div><img className='h-full w-full' src={spotlightImg} alt="" /></div>
          <div>
            <p className='text-[#795420] bg-[#DFBA86] p-2.5 w-fit rounded-xl border-2 border-[#795420]'>Featured Book of the Week</p>
            <p className='text-[#795420] mt-2.5 size-7'>Fiction</p>
            <div className=''>
              <h1 className='text-[#795420] font-semibold'>The Midnight Library</h1>
              <p className='text-[#795420]'>by Matt Haig</p>
            </div>
            <p className='text-[#795420] text-5'>A transformative read that has captured the hearts of thousands. This week's featured selection offers profound insights and captivating storytelling that will stay with you long after the last page.</p>
            <div className='flex gap-11'>
              <p className='text-[#795420] text-[16px]'>Read time: 8-10 hrs</p>
              <p className='text-[#795420] text-[16px]'>Rating 4.8/5</p>
            </div>
            <div className='flex gap-11'>
              <button className='bg-[#795420] px-6 py-2.5 text-[#ffffff] rounded-xl'>Start Reading</button>
              <button className='px-6 py-2.5 text-[#795420] rounded-xl font-semibold hover:text-[#ffffff] hover:bg-[#795420]'>Add to Library</button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="mt-24 ">
        <h2 className="text-center text-3xl font-semibold text-[#6B5744]">
          Spotlight
        </h2>
        <div className="mt-12 bg-[#F1E1CB] py-10">
          <div className="max-w-6xl px-20 flex flex-col lg:flex-row ">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={spotlightImg}
                alt="The Midnight Library"
                className="w-64 rounded-sm shadow-md"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <span className="inline-block bg-[#DFBA86] text-[#795420] 
              px-4 py-1.5 rounded-full text-sm font-medium border border-[#C99A5E]">
                Featured Book of the Week
              </span>
              <p className="mt-4 text-sm text-[#795420] font-medium">
                Fiction
              </p>
              <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-[#5C4324] leading-tight">
                The Midnight Library
              </h3>
              <p className="mt-1 text-base text-[#795420]">
                by Matt Haig
              </p>
              <p className="mt-6 text-base text-[#6B5744] leading-relaxed max-w-2xl">
                A transformative read that has captured the hearts of thousands.
                This week's featured selection offers profound insights and
                captivating storytelling that will stay with you long after the
                last page.
              </p>
              <div className="mt-6 flex flex-wrap gap-8 text-sm text-[#795420]">
                <span>📖 Read Time: 8–10 hrs</span>
                <span>⭐ Rating: 4.8/5</span>
              </div>
              <div className="mt-8 flex gap-6 flex-wrap">
                <button className="bg-[#795420] text-white px-6 py-3 rounded-full 
                font-medium shadow-md hover:shadow-lg transition">
                  Start Reading
                </button>

                <button className="px-6 py-3 rounded-full font-semibold text-[#795420] 
                border border-[#795420] hover:bg-[#795420] hover:text-white transition">
                  Add to Library
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-20 py-10'>
          <div className='flex gap-3 items-center mb-6'>
            <div className='w-8 h-8 rounded-xl bg-[#F5E6D3] flex justify-center items-center'><i class="fa-solid fa-arrow-trend-up"></i></div>
            <p>Trending Now</p>
          </div>
          <Slider {...settings}>
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
              </div>
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
              </div>
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
              </div>
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
              </div>
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
              </div>
          </Slider>
        </div>
      </section>
      <section>
        <div className='px-20 py-10'>
          <div className='mb-10'>
            <h2 className='text-[#4A3D2F] text-4xl'>Popular Authors</h2>
            <p className='text-[#726353]'>Discover works from bestselling writers</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
                <p className="my-4 pl-4 font-bold text-gray-500 text-center">James Clear</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Self-Help</p>
                <div className='flex gap-3 justify-center'>
                  <p>3 books</p>
                  <p>.</p>
                  <p>2.5K</p>
                </div>
              </div>
            </div>
          <div className="">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
              <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
              <p className="my-4 pl-4 font-bold text-gray-500 text-center">Napoleon Hill</p>
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Business</p>
              <div className='flex gap-3 justify-center'>
                <p>12 books</p>
                <p>.</p>
                <p>1.8K</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
              <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
              <p className="my-4 pl-4 font-bold text-gray-500 text-center">Robert Kiyosaki</p>
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Finance</p>
              <div className='flex gap-3 justify-center'>
                <p>8 books</p>
                <p>.</p>
                <p>3.2K</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
              <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
              <p className="my-4 pl-4 font-bold text-gray-500 text-center">Brian Tracy</p>
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Motivation</p>
              <div className='flex gap-3 justify-center'>
                <p>15 books</p>
                <p>.</p>
                <p>1.5K</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
              <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
              <p className="my-4 pl-4 font-bold text-gray-500 text-center">Malcolm Gladwell</p>
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">Psychology</p>
              <div className='flex gap-3 justify-center'>
                <p>7 books</p>
                <p>.</p>
                <p>2.1K</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white px-5 pt-5 pb-[0.8] shadow duration-150 hover:scale-105 hover:shadow-md">
              <img className="w-full rounded-lg object-cover object-center" src={James_Clear} alt="product" />
              <p className="my-4 pl-4 font-bold text-gray-500 text-center">Yuval Noah Harari</p>
              <p className="mb-4 ml-4 text-xl font-semibold text-gray-800 text-center rounded-lg bg-[#F5E6D3] border-2 border-[#00000000]">History</p>
              <div className='flex gap-3 justify-center'>
                <p>4 books</p>
                <p>.</p>
                <p>1.9K</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className='bg-gradient-to-b from-[#F5E6D3] via-white to-[#EFE3CE] py-20 px-10'>
        <div className='px-8'>
          <h2 className='text-[#4A3D2F] text-center text-4xl'>Join Our Reading Community</h2>
          <p className='text-[#726353] text-lg text-center pb-5'>Be part of something bigger</p>
          <div className='flex mt-5 gap-6'>
            <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#FFFFFFE5] rounded-3xl border-1 border-[#E8D4B880] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
                <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
                <div className="contentCard">
                  <h2 className='text-[#795420] font-medium '>50K+</h2>
                  <p className='text-xl'>Active Readers</p>
                </div>
            </div>
            <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#FFFFFFE5] rounded-3xl border-1 border-[#E8D4B880] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
                <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
                <div className="contentCard">
                  <h2 className='text-[#795420] font-medium'>10,000+</h2>
                  <p className='text-xl'>Books Available</p>
                </div>
            </div>
            <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#FFFFFFE5] rounded-3xl border-1 border-[#E8D4B880] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
                <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
                <div className="contentCard">
                  <h2 className='text-[#795420] font-medium '>1M+</h2>
                  <p className='text-xl'>Books Read</p>
                </div>
            </div>
            <div className='w-3/12 text-center p-4 flex flex-col items-center bg-[#FFFFFFE5] rounded-3xl border-1 border-[#E8D4B880] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
                <div className='p-2.5 rounded-xl bg-[#795420]'><i className="fa-solid fa-book text-white"></i></div>
                <div className="contentCard">
                  <h2 className='text-[#795420] font-medium '>500+</h2>
                  <p className='text-xl'>Badge Winners</p>
                </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  </>
}
