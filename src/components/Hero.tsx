import Link from "@docusaurus/Link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col justify-center py-12 lg:py-24 xl:min-h-[50vh]">
      <div className="container max-w-4xl">
        <div className="text-center text-yellow-50">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8">
            Hello, builders.
          </h1>
          <p className="font-serif text-lg lg:text-xl">
            From exciting proof of concepts, hackathon projects and DApps, check
            out what’s being built with Cartesi tech, the teams behind the
            projects and get inspired to build something awesome together.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
          <Link
            to="#dapps"
            className="px-6 py-3 border-solid hover:no-underline no-underline border border-yellow-50 text-yellow-50 hover:bg-gray-800/50 transition-colors hover:text-white"
          >
            Browse DApps
          </Link>
          <a
            href="#dapps"
            className="px-6 py-3 border-solid hover:no-underline no-underline   border border-yellow-50 text-yellow-50 hover:bg-gray-800/50 transition-colors hover:text-white"
          >
            Submit your project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
