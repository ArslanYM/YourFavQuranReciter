"use client";
import React from "react";
import { AudioPlayer } from "@/components/custom/AudioPlayer";
import { SelectQuran } from "@/components/custom/SelectQuran";





export default function ListenPage() {

  const [ayatNumber, setAyatNumber] = React.useState(0);
  const [surahNumber, setSurahNumber] = React.useState(0);
  const [reciterNumber, setReciterNumber] = React.useState(0);
  const [audio, setAudio] = React.useState(null);
  async function getAudio() {
    const res = await fetch(`https://quranaudio.pages.dev/${reciterNumber}/${surahNumber}_${ayatNumber}.mp3`, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    console.log(res.json());
  }


    
     
    return(
        <div className="bg-[url(/images/bg.jpg)] bg-cover bg-center rounded-3xl ">
     
       <div className="min-h-screen flex items-center justify-center">
  <div className=" flex flex-col md:flex-row items-center justify-center gap-4 p-4 w-full max-w-4xl">
   
    <SelectQuran />
    {/* TODO: this above card needs to be made dynamic  */}
    <AudioPlayer />
  </div>
</div>
        
        </div>
    )
}





 



