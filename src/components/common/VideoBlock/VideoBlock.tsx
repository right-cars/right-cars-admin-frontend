"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input } from "@nextui-org/react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface VideoBlockProps {
  onSaveVideoUrl: (url: string | null) => void;
  initialVideoUrl?: string | null;
}

export default function VideoBlock({ onSaveVideoUrl, initialVideoUrl }: VideoBlockProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(initialVideoUrl ?? null);

  // useEffect(() => {
  //   if (initialVideoUrl !== videoUrl) {
  //     setVideoUrl(initialVideoUrl ?? null);
  //   }
  // }, [initialVideoUrl, videoUrl]);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    onSaveVideoUrl(url);
  };

  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">Video</h2>

      <Input
        variant="underlined"
        label="enter a link for a video"
        placeholder="Type here"
        value={videoUrl || ""}
        onChange={handleUrlChange}
        className="mb-4"
      />

      {videoUrl && (
        <div className="mt-4 w-[560px]">
          <ReactPlayer url={videoUrl} controls width="100%" />
        </div>
      )}
    </div>
  );
}
