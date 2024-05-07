"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { VidSyncPlayer } from "vidsync";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Demo = () => {
  const [newSource, setNewSource] = useState<string>("");
  const [newPoster, setNewPoster] = useState<string>("");
  const [defaultVideo, setDefaultVideo] = useState<number>(1);
  const [sources, setSources] = useState<string[]>([
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  ]);

  const [posters, setPosters] = useState<string[]>([
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.traileraddict.com%2Fcontent%2Ffocus-features%2F9feature-20.jpg&f=1&nofb=1&ipt=1efbd3e982922f6882ede7d55b90f943c46fdda0ac3bfc466b4f1e7a058bba85&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flivewallpaperhd.com%2Fwp-content%2Fuploads%2F2017%2F06%2FReal-Madrid-Poster-700x394.jpg&f=1&nofb=1&ipt=ba26d66debd0e073e2656ad12fd32ee8277d6f0fb8301b2efa01dae6f2c99741&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F95489.jpg&f=1&nofb=1&ipt=d0dce46a8eb08aab5de3a06c7a5271da79a7886bb05a704f2335d48bad3ba7aa&ipo=images",
  ]);

  const [primaryColor, setPrimaryColor] = useColor("#FF782D");
  const [iconsColor, setIconsColor] = useColor("#FFFFFF");
  return (
    <div className="w-full h-full grid grid-cols-1 gap-y-3 px-6">
      <div className="w-full h-fit overflow-y-auto flex items-center gap-x-3  rounded-md">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className=""
              style={{
                backgroundColor: primaryColor.hex,
              }}
            >
              <p className="text-slate-50 font-bold">Set Primary Color</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ColorPicker
              color={primaryColor}
              onChange={setPrimaryColor}
              height={150}
              hideInput={true}
            />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              style={{
                backgroundColor: iconsColor.hex,
              }}
            >
              <p className="text-slate-950 font-bold">Set Icons Color</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ColorPicker
              color={iconsColor}
              onChange={setIconsColor}
              height={150}
              hideInput={true}
            />
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <p className=" font-bold">{sources.length} videos. Add More</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] flex flex-col gap-y-4">
            {sources.map((source, index: any) => (
              <Input key={index} readOnly value={source} />
            ))}
            <Input
              placeholder="Enter a video source"
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
            />
            <Button
              onClick={() => {
                setSources([...sources, newSource]);
                setNewSource("");
              }}
              disabled={!newSource}
            >
              Add Now
            </Button>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <p className=" font-bold">{posters.length} Posters. Add More</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] flex flex-col gap-y-4">
            {posters.map((poster, index: any) => (
              <Input key={index} readOnly value={poster} />
            ))}
            <Input
              placeholder="Enter a Poster Image URL"
              value={newPoster}
              onChange={(e) => setNewPoster(e.target.value)}
            />
            <Button
              onClick={() => {
                setPosters([...posters, newPoster]);
                setNewPoster("");
              }}
              disabled={!newPoster}
            >
              Add Now
            </Button>
          </DialogContent>
        </Dialog>

        {/* <Input
          type="number"
          max={sources.length}
          min={1}
          placeholder="The first video is the default one to play"
          value={defaultVideo}
          onChange={(e) => {
            console.log("on change", e.target.value);
            setDefaultVideo(+e.target.value);
          }}
        /> */}
      </div>

      <div>
        <VidSyncPlayer
          src={sources}
          poster={posters}
          iconsColor={iconsColor.hex}
          primaryColor={primaryColor.hex}
          containerStyles={{
            width: "100%",
          }}
          videoStyles={{
            maxHeight: "100% !important",
          }}
          index={defaultVideo - 1}
        />
      </div>

      <div className="w-full flex gap-x-3 items-center flex-wrap gap-y-2">
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          Shift + N =&gt; Next Video
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          Shift + P =&gt; Previous Video
        </Button>
        <Button className="font-bold rounded-ful bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          Space / k =&gt; Play/Pause Video
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          M =&gt; Mute / Unmute Video
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          I =&gt; Play picture-in-picture
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          F =&gt; Toggle FullScreen
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          ArrowUp =&gt; Increase Volume
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          ArrowDown =&gt; Decrease Volume
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          ArrowRight =&gt; Forward 10 seconds
        </Button>
        <Button className="font-bold rounded-full bg-slate-900/50 text-slate-50 hover:bg-slate-900/50 ">
          ArrowLeft =&gt; Backward 10 seconds
        </Button>
      </div>
    </div>
  );
};

export default Demo;
