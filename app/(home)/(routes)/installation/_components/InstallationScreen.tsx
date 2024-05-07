"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import InstallationStep from "./InstallationStep";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula as codeMirrorDracula } from "@uiw/codemirror-theme-dracula";
import { Highlighter } from "rc-highlight";

const vidSyncVite = `
   import { VidSyncPlayer } from "vidsync";

   export const App = () => {

      return <VidSyncPlayer src='https://www.your-video-source'/>

  }`;

const vidSyncNext = `
   import { VidSyncPlayer } from "vidsync";
  
   const Page = () => {
    
      return <VidSyncPlayer src='https://www.your-video-source'/>
  
  }`;

const InstallationScreen = () => {
  return (
    <Tabs defaultValue="vite" className="w-full">
      <TabsList className="grid grid-cols-2 w-full md:h-[80px] h-[50px] bg-slate-900">
        <TabsTrigger
          value="vite"
          className="h-full flex items-center justify-center gap-x-2"
        >
          <Image
            src="/icons/vite.svg"
            alt="Vite"
            width={50}
            height={50}
            className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px]"
          />
          <p className="text-lg font-bold tracking-wider hidden md:block ">
            Vite
          </p>
        </TabsTrigger>
        <TabsTrigger
          value="next"
          className="h-full flex items-center justify-center gap-x-2"
        >
          <Image
            src="/icons/next.svg"
            alt="next"
            width={50}
            height={50}
            className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px]"
          />
          <p className="text-lg font-bold tracking-wider hidden md:block ">
            NextJS
          </p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="vite" className="w-full flex flex-col gap-y-6">
        <InstallationStep>
          <h3 className="w-full text-2xl font-bold flex items-center gap-x-2">
            <div className="w-[30px] h-[30px] bg-slate-50 rounded-full flex items-center justify-center text-slate-950">
              1
            </div>
            <p>
              Install{" "}
              <span className="w-fit h-fit text-[15px] rounded-md bg-slate-900/80 text-slate-50 font-semibold px-2 py-0.5">
                React
              </span>{" "}
              using vite{" "}
            </p>
          </h3>
          <div className="p-2 flex flex-col gap-y-4">
            <Highlighter
              style={{
                background: "black",
              }}
            >
              npm create vite@latest
            </Highlighter>
          </div>
        </InstallationStep>
        <InstallationStep>
          <h3 className="w-full text-2xl font-bold flex items-center gap-x-2">
            <div className="w-[30px] h-[30px] bg-slate-50 rounded-full flex items-center justify-center text-slate-950">
              2
            </div>
            <p>
              Install{" "}
              <span className="w-fit h-fit text-[15px] rounded-md bg-slate-900/80 text-slate-50 font-semibold px-2 py-0.5">
                vidsync
              </span>{" "}
              with npm or yarn{" "}
            </p>
          </h3>
          <div className="p-2 flex flex-col gap-y-4">
            <Highlighter
              style={{
                background: "black",
              }}
            >
              yarn add vidsync
            </Highlighter>
            <Highlighter
              style={{
                background: "black",
              }}
            >
              npm install vidsync
            </Highlighter>
          </div>
        </InstallationStep>
        <InstallationStep>
          <h3 className="w-full text-2xl font-bold flex items-center gap-x-2">
            <div className="w-[30px] h-[30px] bg-slate-50 rounded-full flex items-center justify-center text-slate-950">
              3
            </div>
            <p>
              Modify{" "}
              <span className="w-fit h-fit text-[15px] rounded-md bg-slate-900/80 text-slate-50 font-semibold px-2 py-0.5">
                ./App.tsx
              </span>{" "}
              file
            </p>
          </h3>

          <Highlighter
            style={{
              background: "black",
            }}
          >
            {vidSyncVite}
          </Highlighter>
        </InstallationStep>
      </TabsContent>
      <TabsContent value="next" className="w-full flex flex-col gap-y-6">
        <InstallationStep>
          <h3 className="w-full text-2xl font-bold flex items-center gap-x-2">
            <div className="w-[30px] h-[30px] bg-slate-50 rounded-full flex items-center justify-center text-slate-950">
              1
            </div>
            <p>
              Install{" "}
              <span className="w-fit h-fit text-[15px] rounded-md bg-slate-900/80 text-slate-50 font-semibold px-2 py-0.5">
                NextJS
              </span>{" "}
              with npm or yarn{" "}
            </p>
          </h3>
          <div className="p-2 flex flex-col gap-y-4">
            <Highlighter
              style={{
                background: "black",
              }}
            >
              npx create-next-app@latest
            </Highlighter>
            <Highlighter
              style={{
                background: "black",
              }}
            >
              yarn create next-app@latest
            </Highlighter>
          </div>
        </InstallationStep>
        <InstallationStep>
          <h3 className="w-full text-2xl font-bold flex items-center gap-x-2">
            <div className="w-[30px] h-[30px] bg-slate-50 rounded-full flex items-center justify-center text-slate-950">
              2
            </div>
            <p>
              Install{" "}
              <span className="w-fit h-fit text-[15px] rounded-md bg-slate-900/80 text-slate-50 font-semibold px-2 py-0.5">
                vidsync
              </span>{" "}
              with npm or yarn{" "}
            </p>
          </h3>
          <div className="p-2 flex flex-col gap-y-4">
            <Highlighter
              style={{
                background: "black",
              }}
            >
              npm install vidsync
            </Highlighter>
            <Highlighter
              style={{
                background: "black",
              }}
            >
              yarn add vidsync
            </Highlighter>
          </div>
        </InstallationStep>

        <InstallationStep>
          <h3 className="w-full text-2xl font-bold flex items-center gap-x-2">
            <div className="w-[30px] h-[30px] bg-slate-50 rounded-full flex items-center justify-center text-slate-950">
              3
            </div>
            <p>
              Modify{" "}
              <span className="w-fit h-fit text-[15px] rounded-md bg-slate-900/80 text-slate-50 font-semibold px-2 py-0.5">
                /app/page.tsx
              </span>{" "}
              file
            </p>
          </h3>
          <Highlighter
            style={{
              background: "black",
            }}
          >
            {vidSyncNext}
          </Highlighter>
        </InstallationStep>
      </TabsContent>
    </Tabs>
  );
};

export default InstallationScreen;
