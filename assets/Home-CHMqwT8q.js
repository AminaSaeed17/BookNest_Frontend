import{r as e,j as t}from"./index-Dd3I6kO6.js";import{A as a}from"./aos-BfzuefE6.js";import{S as s}from"./ShareSection-DGRddX6G.js";const o="/Booknest_Frontend/assets/close-book-with-blue-cover%201-D78F9KfF.png",r="/Booknest_Frontend/assets/close-book-with-blue-cover%202-6GK51Kdf.png",i="/Booknest_Frontend/assets/close-book-with-blue-cover%203-BiQtmY-c.png",l=`
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bookDropCenter {
    0%   { opacity: 0; transform: translateX(-50%) translateY(-60px) scale(0.92); }
    70%  { opacity: 1; transform: translateX(-50%) translateY(6px)  scale(1.02); }
    100% { opacity: 1; transform: translateX(-50%) translateY(-2rem) scale(1); }
  }
  @keyframes bookDropCenter_mobile {
    0%   { opacity: 0; transform: translateX(-50%) translateY(-60px) scale(0.92); }
    70%  { opacity: 1; transform: translateX(-50%) translateY(6px)  scale(1.02); }
    100% { opacity: 1; transform: translateX(-50%) translateY(-2rem) scale(1); }
  }
  @keyframes bookFadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes bookFadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* Hero text items */
  .hero-item {
    opacity: 0;
    animation: fadeSlideUp 0.5s ease-out forwards;
  }
  .hero-item-1 { animation-delay: 0.10s; }
  .hero-item-2 { animation-delay: 0.25s; }
  .hero-item-3 { animation-delay: 0.40s; }

  /* Book images */
  .book-center {
    animation: bookDropCenter 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.45s both;
  }
  .book-left {
    opacity: 0;
    animation: bookFadeLeft 0.55s ease-out 0.70s forwards;
  }
  .book-right {
    opacity: 0;
    animation: bookFadeRight 0.55s ease-out 0.70s forwards;
  }

  /* Stats */
  .stat-item {
    opacity: 0;
    animation: fadeSlideUp 0.45s ease-out forwards;
  }
  .stat-item-1 { animation-delay: 0.90s; }
  .stat-item-2 { animation-delay: 1.02s; }
  .stat-item-3 { animation-delay: 1.14s; }
`;function c(){return e.useEffect(()=>{a.init({duration:700,easing:"ease-out-cubic",once:!0,offset:80})},[]),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:l}),t.jsx("div",{className:"min-h-screen bg-[#FFFFFF]",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 md:py-8",children:[t.jsxs("div",{className:"text-center mb-24",children:[t.jsx("h1",{className:"hero-item hero-item-1 text-4xl md:text-5xl font-bold text-[#8B6F47] mb-4",children:"Discover Your Next Great Read"}),t.jsx("p",{className:"hero-item hero-item-2 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed",children:"Immerse yourself in a curated collection of stories that inspire, educate, and transport you to new worlds."}),t.jsxs("button",{className:"hero-item hero-item-3 bg-[#8B6F47] hover:bg-[#7A5F37] text-white px-8 py-3 mb-14 rounded-lg font-medium text-lg transition-colors duration-300 inline-flex items-center gap-2 shadow-md",children:["Start Exploring",t.jsx("span",{className:"text-xl",children:"›"})]})]}),t.jsxs("div",{className:"relative h-80 md:h-96",children:[t.jsx("div",{className:"book-left absolute left-0 md:left-[8%] top-0 w-48 md:w-[475px] h-64 md:h-80 z-10",children:t.jsx("img",{src:i,alt:"Book 2",className:"w-full h-full rounded-sm"})}),t.jsx("div",{className:"book-center absolute left-1/2 -top-8 md:-top-20 w-48 md:w-[475px] h-80 md:h-[450px] z-20",children:t.jsx("img",{src:o,alt:"Featured Book",className:"w-full h-full rounded-sm"})}),t.jsx("div",{className:"book-right absolute right-0 md:right-[8%] top-0 w-48 md:w-[475px] h-64 md:h-80 z-10",children:t.jsx("img",{src:r,alt:"Book 3",className:"w-full h-full rounded-sm"})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-40",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-80 mx-auto px-4",children:[t.jsxs("div",{className:"stat-item stat-item-1 text-center",children:[t.jsx("div",{className:"text-4xl md:text-5xl font-bold text-[#8B6F47] mb-2",children:"10k+"}),t.jsx("div",{className:"text-gray-700 font-medium text-lg",children:"Books Available"})]}),t.jsxs("div",{className:"stat-item stat-item-2 text-center",children:[t.jsx("div",{className:"text-4xl md:text-5xl font-bold text-[#8B6F47] mb-2",children:"1.2k+"}),t.jsx("div",{className:"text-gray-700 font-medium text-lg",children:"Kids books"})]}),t.jsxs("div",{className:"stat-item stat-item-3 text-center",children:[t.jsx("div",{className:"text-4xl md:text-5xl font-bold text-[#8B6F47] mb-2",children:"50k+"}),t.jsx("div",{className:"text-gray-700 font-medium text-lg",children:"Active Readers"})]})]})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 via-[#FFFFFF]/40 to-transparent z-30 pointer-events-none"})]})]})}),t.jsx(s,{})]})}export{c as default};
