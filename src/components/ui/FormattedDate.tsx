import React from "react";

export const FormattedDate = ({ date }: { date: string }) => {
  const dateObj = new Date(date);
  return (
    <span className="whitespace-nowrap">
      {dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })}
    </span>
  );
};
