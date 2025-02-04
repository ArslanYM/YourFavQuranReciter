"use client";
import { AudioProgress } from "@/components/custom/AudioProgress";
import { SelectQuran } from "@/components/custom/SelectQuran";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription ,CardFooter } from "@/components/ui/card";
import React from "react";





export default function ListenPage() {
    
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





 const AudioPlayer = () => {
    const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Card className="w-[350px]">
       <div className="flex flex-col items-center justify-center">
       <CardHeader>
          <CardTitle>Playing your Favorite Reciter</CardTitle>
          <CardDescription>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيْمِ.</CardDescription>
        </CardHeader>
       </div>
        <CardContent>
          <AudioProgress />
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button variant="outline">{isLoading? <Loader/> : "Play" }</Button>
          
        </CardFooter>
      </Card>
    
  )
}



 const Loader = () => {
  return (
    <div>Searching...</div>
  )
}
