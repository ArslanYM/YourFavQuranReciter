"use client"

import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import { Session } from "next-auth"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function LoginPage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        Signed in as {(session as Session).user?.email} <br />
        <Link href={"/listen"}><Button>Start Listening/Reading Quran</Button></Link>
      </div>
    );}
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">

            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/images/praying.jpeg"
          alt="Image"
          className=" rounded-2xl  absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
