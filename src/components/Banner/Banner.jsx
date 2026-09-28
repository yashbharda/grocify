import React from "react";

const Banner = ({title, BgImage}) => {
  return (
    <div className="h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative" style={{backgroundImage: `url(${BgImage})`}}>
      <h2 className="text-5xl text-zinc-800 bg-white/30 p-5 z-10 rounded-xl font-bold">
        {title}
      </h2>
      <div className="bg-black/50 absolute inset-0"></div>
    </div>
  );
};

export default Banner;
