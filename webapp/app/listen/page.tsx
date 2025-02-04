"use client";
import { AudioPlayer } from "@/components/custom/AudioPlayer";
import { SelectQuran } from "@/components/custom/SelectQuran";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ListenPage() {
    
     
    return(
        <div className="flex items-center justify-center flex-col">
          <div className="p-12"><TypographyH2/></div>
          <div className="flex items-center justify-center">
           <div className=" flex flex-col md:flex-row items-center justify-center gap-4 p-4 w-full max-w-4xl">
   
              <SelectQuran />
              {/* TODO: this above card needs to be made dynamic  */}
               <AudioPlayer />
          </div>
         </div>
        
      </div>
    )
}



 function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
      <Link href={"/login"}><Button variant="ghost"> <span className="text-3xl">Login/SignUp</span> </Button></Link>to get access to more features.
    </h2>
  )
}


 



