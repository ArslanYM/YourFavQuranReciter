
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

import { useQuranStore } from '@/stores/quranStore';
import { useIsLoadingStore } from "@/stores/isLoadingStore"





export function SelectQuran() {
  const { 
    setAyat,
    setSurah,
    setReciter 
  } = useQuranStore();

  const { setIsLoading} = useIsLoadingStore();


    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Select your options</CardTitle>
          <CardDescription>Fill the form to listen</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label >Ayah Number</Label>
                <Input required placeholder=" Enter the Ayah Number"  onChange={(e)=>{
                  setAyat(parseInt(e.target.value)) 
                }}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Surah Number</Label>
                <Input required placeholder=" Enter the Surah Number" onChange={(e)=>{
                  setSurah(parseInt(e.target.value))
                }} />
              </div>  
              <div className="flex flex-col space-y-1.5">
                <Label>Reciter</Label>
                <Select 
                onValueChange={(e)=>{
                 setReciter(parseInt(e))
                }}
                >
                  <SelectTrigger >
                    <SelectValue placeholder="Select"  />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1">Mishary Rashid Al-Afasy</SelectItem>
                    <SelectItem value="2">Abu Bakr Al-Shatri</SelectItem>
                    <SelectItem value="3">Nasser Al Qatami</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button onClick={()=>{
           setIsLoading(true)

          }}>Search</Button>
        </CardFooter>
      </Card>
    
    )
  }
  