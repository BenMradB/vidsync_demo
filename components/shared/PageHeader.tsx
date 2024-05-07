"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

type PageHeaderProps = {
  title: string;
  subTitle?: string;
};

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col gap-y-3 tracking-wider">
      <h1 className="text-4xl font-bold text-slate-50"> {title} </h1>
      {subTitle ? (
        <>
          <p className="hidden md:block leading-8 text-slate-400 text-lg font-normal">
            {" "}
            {subTitle}{" "}
          </p>
          <p className="md:hidden leading-8 text-slate-400 text-lg font-normal flex flex-col w-full items-start gap-y-2 ">
            {" "}
            <span>
              {showMore ? subTitle : `${subTitle.slice(0, 100)} ...`}{" "}
            </span>
            <Button
              variant={"link"}
              onClick={() => setShowMore((curr) => !curr)}
            >
              {" "}
              {showMore ? "Show Less" : "Show More"}{" "}
            </Button>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default PageHeader;
