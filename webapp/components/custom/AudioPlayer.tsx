"use client";
import { AudioProgress } from "@/components/custom/AudioProgress";
import { Loader } from "@/components/custom/Loader";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription ,CardFooter } from "@/components/ui/card";
import React from "react";

export const AudioPlayer = () => {
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