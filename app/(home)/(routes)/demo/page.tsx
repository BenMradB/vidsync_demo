import { PageHeader } from "@/components/shared";
import React from "react";
import Demo from "./_components/Demo";

const DemoPage = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      {/* <PageHeader
        title="Demo"
        subTitle="In this page, we'll try the package with all the different use cases, and see how it works, and how it is customizable."
      /> */}
      <Demo />
    </div>
  );
};

export default DemoPage;
