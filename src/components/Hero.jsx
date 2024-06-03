import React from "react";

export const Hero = () => {
  return (
    <div className="bg-customBlack w-full flex justify-center items-center py-10">
      <div className="w-full flex flex-col gap-6 justify-start px-6 pt-12 text-white max-w-[1080px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight border-l-4 border-l-orange-600 px-6 md:px-9">
          Chat with any PDF document
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-start max-w-[700px]">
          From legal agreements to financial reports, PDF.ai brings your
          documents to life. You can ask questions, get summaries, find
          information, and more.
        </p>
        <div>
          <button className="bg-customPurple px-6 py-3 rounded-sm font-bold text-base hover:bg-purple-700 active:bg-purple-800 transition-all duration-300">
            Get Started
          </button>
        </div>
        <video
          className="aspect-video rounded-md w-full max-w-[700px] mt-6"
          src="https://cdn.pixabay.com/video/2020/03/18/33871-398473585_large.mp4"
          autoPlay
          loop
          controls
          muted
        ></video>
        <section className="flex flex-col justify-center mt-10">
          <div className="self-center text-2xl md:text-3xl font-bold">
            Trusted by
          </div>
          <div className="relative flex overflow-x-hidden hover:animate-none">
            <div className="py-10 animate-marquee whitespace-nowrap">
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 1
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 2
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 3
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 4
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 5
              </span>
            </div>
            <div className="absolute top-0 py-10 animate-marquee2 whitespace-nowrap">
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 1
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 2
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 3
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 4
              </span>
              <span className="mx-4 text-xl md:text-2xl lg:text-4xl">
                Marquee Item 5
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Hero.css
/* Custom CSS for additional styles */

// @keyframes marquee {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }

// @keyframes marquee2 {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(0%);
//   }
// }

// .animate-marquee {
//   animation: marquee 15s linear infinite;
// }

// .animate-marquee2 {
//   animation: marquee2 15s linear infinite;
// }

// button:disabled {
//   opacity: 0.5;
//   cursor: not-allowed;
// }

// button {
//   transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
// }

// button:hover {
//   transform: translateY(-2px);
// }

// button:active {
//   transform: translateY(1px);
// }
