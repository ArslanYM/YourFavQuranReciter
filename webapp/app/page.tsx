import { LoginForm } from "@/components/login-form"


export default function LoginPage() {
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white p-6 md:p-10 dark:bg-neutral-950">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </>
  )
}
