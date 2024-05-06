"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import InstallationStep from "./InstallationStep";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula as codeMirrorDracula } from "@uiw/codemirror-theme-dracula";
import { VidSyncPlayer } from "vidsync";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Header } from "@/components/shared";

const InstallationScreen = () => {
  return (
    <Tabs defaultValue="vite" className="w-full">
      <TabsList className="grid grid-cols-2 w-full h-[80px] bg-slate-900">
        <TabsTrigger
          value="vite"
          className="h-full flex items-center justify-center gap-x-2"
        >
          <Image src="/icons/vite.svg" alt="Vite" width={50} height={50} />
          <p className="text-lg font-bold tracking-wider">Vite</p>
        </TabsTrigger>
        <TabsTrigger
          value="next"
          className="h-full flex items-center justify-center gap-x-2"
        >
          <Image src="/icons/next.svg" alt="next" width={50} height={50} />
          <p className="text-lg font-bold tracking-wider">NextJS</p>
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
            <CopyBlock
              text={`npm create vite@latest`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
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
            <CopyBlock
              text={`yarn add vidsync`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
            <CopyBlock
              text={`npm install vidsync`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
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

          <CodeMirror
            value={`import { VidSyncPlayer } from "vidsync";\n\nexport const App = () => {\n\n  return <VidSyncPlayer src='https://www.your-video-source'/>\n\n}`}
            className="rounded-xl h-fit bg-red-500"
            extensions={[javascript({ jsx: true })]}
            theme={codeMirrorDracula}
            editable={false}
          />
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
            <CopyBlock
              text={`yarn create next-app@latest`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
            <CopyBlock
              text={`npx create-next-app@latest`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
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
            <CopyBlock
              text={`yarn add vidsync`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
            <CopyBlock
              text={`npm install vidsync`}
              language="bash"
              showLineNumbers={false}
              theme={dracula}
            />
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

          <CodeMirror
            value={`import { VidSyncPlayer } from "vidsync";\n\nconst Page = () => {\n\n  return <VidSyncPlayer src='https://www.your-video-source'/>\n\n}`}
            className="rounded-xl h-fit bg-red-500"
            extensions={[javascript({ jsx: true })]}
            theme={codeMirrorDracula}
            editable={false}
          />
        </InstallationStep>
      </TabsContent>
    </Tabs>
  );
};

export default InstallationScreen;
