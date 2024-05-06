import React from "react";

type PageHeaderProps = {
  title: string;
  subTitle?: string;
};

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-3 tracking-wider">
      <h1 className="text-4xl font-bold text-slate-50"> {title} </h1>
      {subTitle ? (
        <p className="leading-8 text-slate-400 text-lg font-normal">
          {" "}
          {subTitle}{" "}
        </p>
      ) : null}
    </div>
  );
};

export default PageHeader;
