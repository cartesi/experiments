import React, { useRef } from "react";
import { motion } from "framer-motion";
import useMouse from "../../hooks/useMouse";
type Props = {
  children: React.ReactNode;
  showDrag?: boolean;
};

const CarouselContainer = ({ children, showDrag = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y, isInside, isDesktop } = useMouse(ref);

  const variants = {
    show: {
      opacity: 1,
      scale: 1,
      x: Number(x),
      y: Number(y),
      transition: {
        duration: 0,
      },
    },
    hide: {
      opacity: 0,
      scale: 0,
      x: Number(x),
      y: Number(y),
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  if (!showDrag) return <div>{children}</div>;

  return (
    <>
      <div
        style={{
          cursor: isInside && isDesktop ? "none" : "auto",
        }}
      >
        <div ref={ref}>{children}</div>
        <motion.div
          variants={variants}
          initial="hide"
          animate={isInside ? "show" : "hide"}
          className="pointer-events-none fixed left-0 top-0 z-20 -ml-10 -mt-10 hidden aspect-square w-20 items-center justify-center rounded-full bg-secondary/90 font-heading text-xs uppercase tracking-wide text-primary lg:flex"
        >
          Drag
        </motion.div>
      </div>
    </>
  );
};

export default CarouselContainer;
