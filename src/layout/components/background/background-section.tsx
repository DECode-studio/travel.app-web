import React, { FC } from "react";

export interface Props {
  className?: string;
  children?: React.ReactNode;
}

const BackgroundSection = ({
  className = "bg-neutral-100 dark:bg-black dark:bg-opacity-20 ",
  children,
}: Props) => {
  return (
    <div
      className={`nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`}
      data-nc-id="BackgroundSection"
    >
      {children}
    </div>
  );
};

export default BackgroundSection;
