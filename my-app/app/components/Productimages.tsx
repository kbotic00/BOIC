"use client"
import Image from "next/image"
import { useState } from "react";

const images=[
    {
        id:1,
        url:"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:2,
        url:"https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:3,
        url:"https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:4,
        url:"https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
];

const Productimages =()=>{

    const[index,setIndex]=useState(0);


    return (
    <>
    <div>
        <div className="h-[500px] relative">
            <Image src={images[index].url} alt="" fill sizes="50vw"className="object-cover rounded-md"></Image>
        </div>
        <div className="flex justify-between gap-4 cursor-pointer">
            {images.map((img,i)=>(
                 <div className="w-1/4 h-32 relative gap-4 mt-8"key={img.id} onClick={()=>setIndex(i)}>
                    <Image src={img.url} alt="" fill sizes="30vw"className="object-cover rounded-md"></Image>
                </div> 
            ))}  
        </div>
        
    </div>
    </>)
    
}

export default Productimages