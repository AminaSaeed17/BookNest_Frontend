import React from "react";
import Slider from "react-slick";
import spotlightImg from "../../../src/assets/imgs/71qsovx-x6L._AC_UL320_.jpg";
import James_Clear from "../../../src/assets/imgs/james-Clear.webp";
import trending from "../../../src/assets/imgs/trending.png";
import Yuval from "../../../src/assets/imgs/Yuval_Noah_Harari.png";
import OIP from "../../../src/assets/imgs/OIP.webp";

export default function ShareSection() {
  return (
    <>
      <div>
        <section className="mt-10 py-16 px-5 sm:px-10 lg:px-20 bg-[#FFFFFF]">
          <h1 className="text-center text-[#6B5744] sm:text-4xl font-semibold text-[40px] mb-10">
            Why Choose BookNest?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div
              className="flex flex-col items-center text-center gap-4 p-4
                    bg-[#F4E8D7] rounded-2xl
                    transition-all duration-300 ease-in-out
                    hover:-translate-y-2 hover:shadow-xl hover:bg-[#EDD9BC]
                    cursor-pointer group"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#795420] flex items-center justify-center shrink-0
                      transition-transform duration-300 group-hover:scale-110"
              >
                <i className="fa-solid fa-layer-group text-white"></i>
              </div>
              <div className="contentCard">
                <h2 className="text-[#795420] font-semibold text-[25px] mb-1">
                  Curated Collection
                </h2>
                <p className="text-[#795420] text-[16px]">
                  Handpicked books across all genres for every reader
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col items-center text-center gap-4 p-4
                    bg-[#F4E8D7] rounded-2xl
                    transition-all duration-300 ease-in-out
                    hover:-translate-y-2 hover:shadow-xl hover:bg-[#EDD9BC]
                    cursor-pointer group"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#795420] flex items-center justify-center shrink-0
                      transition-transform duration-300 group-hover:scale-110"
              >
                <i className="fa-solid fa-wand-magic-sparkles text-white"></i>
              </div>
              <div className="contentCard">
                <h2 className="text-[#795420] font-semibold text-[25px] mb-1">
                  Personalized
                </h2>
                <p className="text-[#795420] text-[16px]">
                  Smart recommendations based on your reading taste
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col items-center text-center gap-4 p-4
                    bg-[#F4E8D7] rounded-2xl
                    transition-all duration-300 ease-in-out
                    hover:-translate-y-2 hover:shadow-xl hover:bg-[#EDD9BC]
                    cursor-pointer group"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#795420] flex items-center justify-center shrink-0
                      transition-transform duration-300 group-hover:scale-110"
              >
                <i className="fa-solid fa-ban text-white"></i>
              </div>
              <div className="contentCard">
                <h2 className="text-[#795420] font-semibold text-[25px] mb-1">
                  Ad-Free Reading
                </h2>
                <p className="text-[#795420] text-[16px]">
                  Immersive experience without any distractions
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="flex flex-col items-center text-center gap-4 p-4
                    bg-[#F4E8D7] rounded-2xl
                    transition-all duration-300 ease-in-out
                    hover:-translate-y-2 hover:shadow-xl hover:bg-[#EDD9BC]
                    cursor-pointer group"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#795420] flex items-center justify-center shrink-0
                      transition-transform duration-300 group-hover:scale-110"
              >
                <i className="fa-solid fa-chart-line text-white"></i>
              </div>
              <div className="contentCard">
                <h2 className="text-[#795420] font-semibold text-[25px] mb-1">
                  Track Progress
                </h2>
                <p className="text-[#795420] text-[16px]">
                  Monitor your reading journey and achievements
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-24" style={{ gap: "40px" }}>
          <h2
            className="text-center font-semibold text-[#6B5744] mb-10"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "40px",
              lineHeight: "100%",
            }}
          >
            Spotlight
          </h2>

          {/* Beige container */}
          <div
            className="bg-[#F1E1CB] w-full"
            style={{
              padding: "40px 80px",
            }}
          >
            {/* Inner row: image + content */}
            <div
              className="flex flex-col sm:flex-row w-full mx-auto"
              style={{ maxWidth: "1167px", gap: "25px" }}
            >
              {/* Book cover */}
              <img
                src={spotlightImg}
                alt="The Midnight Library"
                className="rounded-[4px] shadow-md object-cover
                   w-full sm:w-[296px] sm:h-[416px]
                   max-h-[260px] sm:max-h-none flex-shrink-0"
              />

              {/* Content */}
              <div
                className="flex flex-col"
                style={{ gap: "24px", maxWidth: "954px" }}
              >
                {/* Top block */}
                <div className="flex flex-col gap-4">
                  <span
                    className="inline-block bg-[#DFBA86] text-[#795420]
              px-4 py-1.5 rounded-xl text-sm font-medium
              border-2 border-[#C99A5E] w-fit"
                  >
                    Featured Book of the Week
                  </span>

                  <div className="flex flex-col gap-2">
                    <p className="text-[28px] text-[#795420] font-medium">
                      Fiction
                    </p>
                    <h3
                      className="text-[40px] sm:text-[48px] font-semibold
                         text-[#795420] leading-tight"
                    >
                      The Midnight Library
                    </h3>
                    <p className="text-[24px] text-[#795420]">by Matt Haig</p>
                  </div>

                  <p className="text-[18px] sm:text-[20px] text-[#795420] leading-[140%]">
                    A transformative read that has captured the hearts of
                    thousands. This week's featured selection offers profound
                    insights and captivating storytelling that will stay with
                    you long after the last page.
                  </p>

                  <div className="flex flex-wrap gap-8 sm:gap-11 text-sm text-[#795420]">
                    <span>📖 Read Time: 8–10 hrs</span>
                    <span>⭐ Rating: 4.8/5</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-6 sm:gap-11 flex-wrap">
                  <button
                    className="bg-[#795420] text-white px-6 py-3 rounded-xl
              font-semibold shadow-md hover:shadow-lg transition"
                  >
                    Start Reading
                  </button>
                  <button
                    className="px-6 py-3 rounded-xl font-semibold text-[#795420]
              hover:bg-[#795420] hover:text-white transition"
                  >
                    Add to Library
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 px-5 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="flex gap-3 items-center mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#F5E6D3] flex justify-center items-center">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
              <p>Trending Now</p>
            </div>
            <div>
              <div className="p-3 w-[228.8000030517578px] h-[447.20001220703125px] rounded-2xl bg-[#ffffff] shadow-[0px_2px_8px_0_#D4A57414] flex flex-col justify-center items-center gap-3">
                <div className="mb-1 bg-[#F5E6D3] rounded-[14px]">
                  <img
                    src={trending}
                    className="w-full h-full bg-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[16px] text-[#4A3D2F]">
                    The Midnight Library
                  </h3>
                  <p className="texy-[14px] text-[#726353]">Matt Haig</p>
                  <div>
                    <i className="fa-solid fa-star text-[16px] text-[#D4A574]"></i>
                    <span className="text-[14px] text-[#5D4E3E]">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-white shadow-[0_1px_2px_-1px_#0000001A,0_1px_3px_0_#0000001A]">
              <div className="flex gap-4 items-center">
                <div className="rounded-[14px] bg-[#F5E6D3] w-12 h-12 flex justify-center items-center shrink-0">
                  <i className="fa-solid fa-book-open text-[#B8956A]"></i>
                </div>
                <div>
                  <p className="text-[#726353] text-[14px]">Total Books</p>
                  <p className="text-[#4A3D2F] text-[16px] font-medium">
                    10,000+
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-[0_1px_2px_-1px_#0000001A,0_1px_3px_0_#0000001A]">
              <div className="flex gap-4 items-center">
                <div className="rounded-[14px] bg-[#F5E6D3] w-12 h-12 flex justify-center items-center shrink-0">
                  <i className="fa-regular fa-clock text-[#B8956A]"></i>
                </div>
                <div>
                  <p className="text-[#726353] text-[14px]">Active Readers</p>
                  <p className="text-[#4A3D2F] text-[16px] font-medium">
                    5,000+
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-[0_1px_2px_-1px_#0000001A,0_1px_3px_0_#0000001A]">
              <div className="flex gap-4 items-center">
                <div className="rounded-[14px] bg-[#F5E6D3] w-12 h-12 flex justify-center items-center shrink-0">
                  <i className="fa-solid fa-bullseye text-[#B8956A]"></i>
                </div>
                <div>
                  <p className="text-[#726353] text-[14px]">Categories</p>
                  <p className="text-[#4A3D2F] text-[16px] font-medium">
                    20+ Genres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-20 py-10">
            <div className="mb-10">
              <h2 className="text-[#4A3D2F] text-4xl">Popular Authors</h2>
              <p className="text-[#726353]">
                Discover works from bestselling writers
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="cursor-pointer rounded-2xl bg-white border border-[#EDE0CF] p-4
                  transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 
                  flex flex-col gap-3"
              >
                <div className="relative">
                  <div className="w-full aspect-square rounded-xl bg-[#F4E8D7] overflow-hidden">
                    <img
                      src={Yuval}
                      alt="Yuval Noah Harari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-[26843500px] bg-[#D4A574] shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A] absolute top-32 left-32 flex justify-center items-center">
                    <i class="fa-solid fa-circle text-[#FFFFFF] text-xl"></i>
                  </div>
                </div>
                <div className="text-center flex flex-col gap-1.5">
                  <p className="font-semibold text-[#4A3D2F] text-sm">
                    Yuval Noah Harari
                  </p>
                  <span
                    className="inline-block mx-auto px-3 py-0.5 rounded-full 
                       bg-[#F4E8D7] text-[#795420] text-xs font-medium"
                  >
                    History
                  </span>
                  <div className="flex items-center justify-center gap-2 text-xs text-[#726353]">
                    <span>4 books</span>
                    <span className="text-[#C9B99A]">·</span>
                    <span>1.9K readers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-[linear-gradient(180deg,#F5E6D3_0%,#FFFFFF_50%,#EFE3CE_100%)] py-16 px-5 sm:px-10">
          <div className="px-8">
            <h2 className="text-[#4A3D2F] text-center text-2xl sm:text-4xl mb-3">
              Join Our Reading Community
            </h2>
            <p className="text-[#726353] text-center mb-10">
              Be part of something bigger
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="flex flex-col items-center gap-3 p-5 text-center
                           bg-[#FFFFFFE5] rounded-3xl border border-[#E8D4B880]
                           shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A]"
              >
                <div className="p-2.5 w-16 h-16 rounded-2xl bg-[linear-gradient(180deg,#D4A574_0%,#B8915F_100%)]">
                  <i class="fa-solid fa-user-group text-4xl text-[#ffffff]"></i>
                </div>
                <div className="contentCard">
                  <p className="text-[#4A3D2F] text-[36px] ">50K+</p>
                  <p className="text-[16px] text-[#726353]">Active Readers</p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-3 p-5 text-center
                           bg-[#FFFFFFE5] rounded-3xl border border-[#E8D4B880]
                           shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A]"
              >
                <div className="p-2.5 w-16 h-16 rounded-2xl bg-[linear-gradient(180deg,#D4A574_0%,#B8915F_100%)]">
                  <i class="fa-solid fa-book-open text-4xl text-[#ffffff]"></i>
                </div>
                <div className="contentCard">
                  <p className="text-[#4A3D2F] text-[36px] ">10,000+</p>
                  <p className="text-[16px] text-[#726353]">Books Available</p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-3 p-5 text-center
                           bg-[#FFFFFFE5] rounded-3xl border border-[#E8D4B880]
                           shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A]"
              >
                <div className="p-2.5 w-16 h-16 rounded-2xl bg-[linear-gradient(180deg,#D4A574_0%,#B8915F_100%)]">
                  <i class="fa-solid fa-arrow-trend-up text-4xl text-[#ffffff]"></i>
                </div>
                <div className="contentCard">
                  <p className="text-[#4A3D2F] text-[36px] ">1M+</p>
                  <p className="text-[16px] text-[#726353]">Books Read</p>
                </div>
              </div>
              <div
                className="flex flex-col items-center gap-3 p-5 text-center
                           bg-[#FFFFFFE5] rounded-3xl border border-[#E8D4B880]
                           shadow-[0_4px_6px_-4px_#0000001A,0_10px_15px_-3px_#0000001A]"
              >
                <div className="p-2.5 w-16 h-16 rounded-2xl bg-[linear-gradient(180deg,#D4A574_0%,#B8915F_100%)]">
                  <i class="fa-solid fa-award text-4xl text-[#ffffff]"></i>
                </div>
                <div className="contentCard">
                  <p className="text-[#4A3D2F] text-[36px] ">500+</p>
                  <p className="text-[16px] text-[#726353]">Badge Winners</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
