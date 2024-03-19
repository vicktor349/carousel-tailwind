import React from "react";
import Carousel from "@/components/Carousel";


export default function Home()
{
  return (
    <div>
      <div className='p-10'>
        <div className='flex justify-center items-center gap-2 '>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
