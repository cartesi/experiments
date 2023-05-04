import React from "react";

type Props = {};

const BgGradient = (props: Props) => {
  return (
    <div className="w-[100vw] aspect-square fixed top-0 left-[50%] -translate-x-1/2 z-[-1] blur-3xl">
      <div>
        <div
          className="w-full h-full absolute bg-gradient-to-br from-cyan-500 via-pink-200 to-emerald-500 opacity-20"
          style={{
            clipPath:
              "polygon(0% 15%, 43% 14%, 15% 0%, 67% 0, 39% 39%, 100% 15%, 100% 85%, 79% 41%, 51% 100%, 41% 99%, 65% 43%, 0% 85%)",
          }}
        />
      </div>
    </div>
  );
};

export default BgGradient;
