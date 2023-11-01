import { title } from "@/components/primitives";
import Image from "next/image";
export default function AboutPage() {
	const textGradientStyle = {
		background: "-webkit-linear-gradient(45deg, #FFFFFF, #17c964, #17c964,#FFFFFF)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	  };
	return (
	<div className="pl-2">
		
		<div className="lg:ml-16 mt-0 pt-1 pl-5 md:ml-16 md:pl-16 lg:pl-10 mb-5 lg:px-2">
			<h1 className={title()}>About <span style={textGradientStyle}>AKCSSC</span></h1>
		</div>
		<div className="flex flex-wrap justify-evenly gap-8 pt-0">
			<section >
					<div className="lg:pt-16 pl-5 pr-5">
						<Image src="/akcssc.jpeg" className="relative" width={500} height={500} alt="akcssc"
						 style={{
							borderRadius: '30px', // Make the edges curved
							boxShadow: '6px 6px 0px 0px  #17c964', // Add a green drop shadow
						  }}
						/>
					</div>
			</section>
		

			<div className="max-w-lg pl-2 lg:pl-0 ">
			<section className="flex flex-row justify-start  gap-4 py-1 pb-0 md:py-10 max-w-6xl  ">
				<div className="mb-md px-1 lg:pt-4 md:pt-1 md:pb-1 text-center"> 
					<h1>The All Kerala Computer Society Student Convention (AKCSSC) stands as the flagship event of the IEEE Computer Society Kerala Chapter, held annually to ignite inspiration among IEEE CS members and enrich their technical skills and knowledge. AKCSSC&apos;23 continues this tradition, striving to unite dedicated students from across Kerala, representing a diverse range of interests under one roof. We extend a warm invitation to all AI enthusiasts and Entrepreneurs to come together, connect, learn, and grow.

<br/>This techno-managerial symposium is a unique blend of soft skills, networking, and professionalism, meticulously crafted to empower volunteers in an environment where the realm of possibilities knows no bounds. It&apos;s a vibrant synergy of technology and innovation, all harmonized through networking and the art of connecting individuals from all corners of Kerala.

As you immerse yourself in the AKCSSC&apos;23 experience, you&apos;ll also have the opportunity to bask in the breathtaking scenic beauty of Wayanad, celebrating the joy of volunteering.<br/> Join us for the ninth edition of this remarkable event, hosted by Government Engineering College Wayanad, taking place from November 24 to November 26.</h1>
					
				
				</div>
			</section>
					
			</div>
		</div>
	</div>
	);
}
