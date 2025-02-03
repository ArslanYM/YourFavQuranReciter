
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"







export function SelectQuran() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Select your options</CardTitle>
          <CardDescription>Fill the form to listen</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ayahNumber">Ayah Number</Label>
                <Input id="ayahNumber" placeholder=" Enter the Ayah Number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="surahNumber">Surah Number</Label>
                <Input id="surahNumber" placeholder=" Enter the Surah Number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Reciter</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Mishary Rashid Al-Afasy</SelectItem>
                    <SelectItem value="sveltekit">Abu Bakr Al-Shatri</SelectItem>
                    <SelectItem value="nuxt">Nasser Al Qatami</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Search</Button>
        </CardFooter>
      </Card>
    )
  }
  