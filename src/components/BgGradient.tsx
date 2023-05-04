import React from "react";

type Props = {};

const BgGradient = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-[50%] -translate-x-1/2 z-[-1] blur-3xl">
      <div>
        <div
          className="w-full h-full absolute bg-gradient-to-r from-cyan-500 via-white to-emerald-500 opacity-20"
          style={{
            clipPath:
              "polygon(evenodd, 52.69% 47.31%, 100% 0%, 100% 52.24%, 0% 100%, 74.74% 100%, 0% 0%, 57.63% 7.88%, 100% 100%, 0% 25.48%, 0% 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default BgGradient;
