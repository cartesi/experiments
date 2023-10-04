import React, { useMemo } from "react";
import { cn } from "../../lib/utils";
import moment from "moment";

type Props = {
  date: string;
  className?: string;
};

const EventDate = ({ date, className }: Props) => {
  const formattedDate = useMemo(() => {
    const month = moment(date).format("MMM");
    const day = moment(date).format("D");

    return { month, day };
  }, [date]);

  return (
    <div className={cn("relative", className)}>
      <span className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center pt-1 leading-none">
          <span className="opacity-60">{formattedDate.month}</span>
          <span className="text-lg">{formattedDate.day}</span>
        </div>
      </span>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 stroke-current"
      >
        <path
          d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 1V5"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 1V5"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default EventDate;
