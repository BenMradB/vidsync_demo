import { PageHeader } from "@/components/shared";
import React from "react";
import { InstallationScreen } from "./_components";

const InstallationPage = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <PageHeader
        title="Installation"
        subTitle="Pick which framework or library your'e using"
      />

      <InstallationScreen />
    </div>
  );
};

export default InstallationPage;
