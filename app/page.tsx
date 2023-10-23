import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import AboutPage from "./about/page";
import Image from "next/image";

export default function Home() {
	return (
	<div>
	<div className="flex flex-wrap justify-evenly gap-8">
  <section className="flex flex-col justify-start  gap-4 py-1 pb-0 md:py-10 max-w-lg text-center ">
  <div className="mb-md px-1 lg:pt-10 md:pt-1 md:pb-1"> 
    <h1 className={title()}>All&nbsp;</h1>
    <h1 className={title({ color: "green" })}>Kerala&nbsp;</h1><br />
    <h1 className={title()}><span className="text-gradient">Computer Society&nbsp;</span></h1><br />
    <h1 className={title({ color: "green" })}>Student&nbsp;Congress</h1>
  </div>

  

   
  </section>

  {/* Right Section (Image) */}
  <div className="max-w-lg ">
    {/* Add your image here */}
	<section>
		<Image src="/sample.png" width={500} height={500} alt="roboarm" />
	</section>
	
   
  </div>
</div>
<div className="flex gap-3  justify-center">
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

  </div>
	);
}
