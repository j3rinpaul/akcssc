import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Image from "next/image";
import { Container } from "postcss";
import AboutPage from "./about/page";

export default function Home() {

  const dissolvingEffectStyle = {
    filter: "linear-gradient(90deg, transparent, transparent 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 60%, transparent 80%, transparent)",
  };

  const textGradientStyle = {
    background: "-webkit-linear-gradient(45deg, #FFFFFF, #17c964, #17c964,#FFFFFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
	return (
	<div>
	<div className="flex flex-wrap justify-evenly gap-8 lg:py-16">
  <section className="flex flex-col justify-start  gap-4 py-1 pb-0 md:py-16 max-w-3xl text-center ">
  <div className="mb-md px-1 lg:pt-16 md:pt-1 md:pb-1"> 
    <h1 className={title()}>All&nbsp;</h1>
    <h1 className={title()}><span style={textGradientStyle}>Kerala&nbsp;</span></h1><br />
    <h1 className={title()}>Computer Society&nbsp;</h1><br />
    <h1 className={title()}><span style={textGradientStyle}>Student&nbsp;Convention</span></h1>
    <h2 className={subtitle()}>November 23,25 2023</h2>
  </div>

  

   
  </section>

  {/* Right Section (Image) */}
  <div className="max-w-lg pl-2 pr-2 lg:pr-0 lg:pl-0">
    {/* Add your image here */}
	<section >
      <div >
        {/* <div className="absolute w-[40%] h-[35%]  bg-gradient-to-r from-gray-700"/> */}
        <Image src="/anoth.jpg" className="relative" width={500} height={500} alt="roboarm" />
      </div>
	</section>
	
   
  </div>
</div>
<div className="flex gap-3 pt-2  justify-center">
      <Link
        isExternal
        as={NextLink}
        href={siteConfig.links.docs}
        className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
      >
		<span style={{ color: "white" }}>
        Register Now
		</span>
      </Link>
      
    </div>

    <div className="pt-16 mt-14 mb-16 pl-3 pr-2 lg:pl-0" id="about">
      <section>
        <AboutPage/>
      </section>
    </div>

  </div>
	);
}
