import React from "react";

const TableOfContent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <h2 className="text-2xl font-semibold text-slate-200"> {title} </h2>
      {children}
    </div>
  );
};

export default TableOfContent;
