"use client";
import { title } from "@/components/primitives";
import Image from "next/image";

function Sponser() {
  const list = [
   
    {
      img: "/sblogo.png",
    },
    {
      img: "/ieeelogo.png",
    }, {
      img: "/cslogo.png",
    },
  ];

  return (
    <div className="pb-16">
      <div className="flex justify-center pt-5 pb-5">
        <h1 className={title()}>Powered by</h1>
      </div>
      <div className="flex gap-4 lg:flex-row flex-col items-center justify-center">
        {list.map((item, index) => (
          <div key={index} className="flex items-center">
            <Image
            style={{borderRadius:"10px"}}
              width={100}
              height={100}
              alt="sponser"
              className="w-[200px] bg-slate-300 object-scale-down h-[80px]"
              src={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sponser;
