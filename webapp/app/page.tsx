import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import Link from "next/link"
export default function LoginPage() {
  return (
    <div className="bg-gray-100">
      <div className=" min-h-screen flex flex-col items-center justify-center gap-12 md:p-10 ">
     
      <div className="flex  items-center justify-center rounded-md">
                <BookOpen className="size-20" />
         </div>
        <TypographyH2/>
       <Link href={"/listen"}><Button variant={"default"}>Get Started</Button></Link> 

    
    </div>
    </div>
    
  )
}





 function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl  tracking-tight first:mt-0 m-6">
     Welcome to <span className="text-4xl font-semibold">
      {"    "}Your Favorite Quran Reciter.</span>
    </h2>
  )
}
