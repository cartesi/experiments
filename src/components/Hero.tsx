import Link from "@docusaurus/Link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col justify-center py-12 sm:py-24">
      <div className="container max-w-screen-lg">
        <div className="text-center flex flex-col">
          <h1 className="text-5xl inline-block mx-auto sm:text-6xl lg:text-7xl mb-6 bg-clip-text bg-gradient-to-r text-transparent from-cyan-500  to-pink-400">
            Rollup Lab
          </h1>
          <p className="text-lg">
            Welcome to the Cartesi community’s repository of proof of concepts,
            hackathon projects, and experimental DApps developed with Cartesi
            Rollups. Get inspired to push the boundaries of Web3 tech together!
          </p>
        </div>
        <div className="mt-2 flex flex-col justify-center gap-2 text-center sm:flex-row sm:items-center">
          <Link
            to="https://docs.cartesi.io/build-dapps/"
            className="lg:min-w-[15rem] px-6 py-3 border-solid hover:no-underline no-underline border hover:bg-slate-700 font-semibold rounded-lg border-slate-800 text-slate-900 hover:border-slate-700 transition-colors hover:text-white"
          >
            Start Building
          </Link>
          <Link
            href="https://github.com/cartesi/experiments/discussions/17"
            className="lg:min-w-[15rem] px-6 py-3 border-solid hover:no-underline no-underline   border hover:bg-slate-700 font-semibold rounded-lg border-slate-800 text-slate-900 hover:border-slate-700 transition-colors hover:text-white"
          >
            Submit your project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
