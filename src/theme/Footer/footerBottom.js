import * as React from "react";
import Logo from "/img/logo_dark.svg";
import Link from "@docusaurus/Link";

const FooterBottom = () => {
  return (
    <footer className="bg-slate-800 py-8 text-sm  text-white lg:py-12 xl:py-16">
      <div className="container max-w-screen-lg">
        <div className="flex flex-col items-start justify-start gap-6 sm:flex-row ">
          <div className="mb-6 flex justify-center sm:mb-0">
            <Link to="https://cartesi.io/">
              <Logo width="164" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterBottom;
