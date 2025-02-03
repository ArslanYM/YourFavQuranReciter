import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";
import Image from 'next/image'
export default function Appbar() {
    return (
      <>
        <nav className=" px-4 md:px-32 lg:px-46 py-4 md:py-4 lg:py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
          <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <BookOpen className="size-12" />
              </div>
          </Link>
          
          <Link href={"/"}>
            <Button
              variant="link"
              className="font-md font-semibold font-mono  text-xl"
            >
                YFQR
            </Button>
          </Link>
        </div>

        <Image
      src="/bismillah.png"
      width={300}
      height={200}
      alt="Picture of the author"
    />

        <ul className="flex items-center">
          <li>
            <Link href={"/guide"}>
              <Button variant="link">Guide</Button>
            </Link>
          </li>
          <li>
            <Link href={"/listen"}>
              <Button variant="link">Listen/Read</Button>
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/ArslanYM/YourFavQuranReciter"}>
              <Button variant="link">Repo</Button>
            </Link>
          </li>
        </ul>
        
      </nav>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800 ">
    </div>
      </>
    );
}




