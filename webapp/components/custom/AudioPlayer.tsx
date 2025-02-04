"use client";
import { Card, CardHeader, CardTitle, CardContent, CardDescription ,CardFooter } from "@/components/ui/card";
import { useIsLoadingStore } from "@/stores/isLoadingStore";
import { useIsPlayingStore } from "@/stores/isPlayingStore";
import { useQuranStore } from "@/stores/quranStore";
import React, { useEffect } from "react";

export const AudioPlayer = () => {
    const [audioSrc, setAudioSrc] = React.useState<string>("//");
const { 
           ayatNumber,
           surahNumber,
           reciterNumber 
         } = useQuranStore();


         const {
          isLoading,
          setIsLoading
        } = useIsLoadingStore();


        useEffect(() => {
          if(isLoading){

            getAudio();
          }


        }, [isLoading])
    async function getAudio() {
      const res = await fetch(`https://quranaudio.pages.dev/${reciterNumber}/${surahNumber}_${ayatNumber}.mp3`, { next: { revalidate: 3600 } });
      
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      
        setIsLoading(false);  
        setAudioSrc(`https://quranaudio.pages.dev/${reciterNumber}/${surahNumber}_${ayatNumber}.mp3`)
  
    }
  
    return (
    <Card className="w-[350px]">
       <div className="flex flex-col items-center justify-center">
       <CardHeader>
          <CardTitle>Playing your Favorite Reciter</CardTitle>
          <CardDescription>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيْمِ.</CardDescription>
        </CardHeader>
       </div>
        <CardContent>
          <audio src={audioSrc} controls autoPlay> 
</audio>
        </CardContent>
      </Card>
    
  )
}