import React from "react";

export const Hero = () => {
  return (
    <div className="bg-customBlack w-full flex justify-center items-center py-10">
      <div className="w-full flex flex-col gap-6 justify-start px-6 py-12 text-white max-w-[1080px]">
        <h1 className="text-5xl font-bold leading-tight border-l-2 border-l-orange-600 px-9">
          Chat with any PDF document
        </h1>
        <p className=" text-balance text-start text-lg max-w-[700px]">
          From legal agreements to financial reports, PDF.ai brings your
          documents to life. You can ask questions, get summaries, find
          information, and more.
        </p>
        <div>
          <button className=" bg-customPurple px-4 py-2 rounded-sm font-bold text-base">
            Get Started
          </button>
        </div>
        <video
          className=" aspect-video rounded-md"
          src="https://cdn.pixabay.com/video/2020/03/18/33871-398473585_large.mp4"
          autoPlay
          loop
          controls
          muted
        ></video>
        <section className="flex flex-col justify-center">
          <div className=" self-center text-3xl font-bold">Trusted by</div>
          <div className="relative flex overflow-x-hidden hover:animate-none">
            <div className="py-10 animate-marquee whitespace-nowrap">
              <span className="mx-4 text-4xl">Marquee Item 1</span>
              <span className="mx-4 text-4xl">Marquee Item 2</span>
              <span className="mx-4 text-4xl">Marquee Item 3</span>
              <span className="mx-4 text-4xl">Marquee Item 4</span>
              <span className="mx-4 text-4xl">Marquee Item 5</span>
            </div>
            <div className="absolute top-0 py-10 animate-marquee2 whitespace-nowrap">
              <span className="mx-4 text-4xl">Marquee Item 1</span>
              <span className="mx-4 text-4xl">Marquee Item 2</span>
              <span className="mx-4 text-4xl">Marquee Item 3</span>
              <span className="mx-4 text-4xl">Marquee Item 4</span>
              <span className="mx-4 text-4xl">Marquee Item 5</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
