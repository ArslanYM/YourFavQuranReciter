"use client";


import { AudioPlayer } from "@/components/custom/AudioPlayer";
import { SelectQuran } from "@/components/custom/SelectQuran";





export default function ListenPage() {
    
     
    return(
        <div>
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





 



