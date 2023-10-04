import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  backgroundColor?: string;
  height?: string;
  minHeight?: string;
  children: React.ReactNode;
};

const HeroContainer = ({
  children,
  backgroundColor = "#00F6FF",
  height = "100vh",
  minHeight,
  className,
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "relative -mt-headerMobile flex min-h-[640px] flex-col overflow-hidden pt-headerMobile sm:min-h-[900px] lg:-mt-headerDesktop lg:pt-headerDesktop",
        className
      )}
      style={{ height, backgroundColor, minHeight }}
    >
      {children}
    </div>
  );
};

export default HeroContainer;
