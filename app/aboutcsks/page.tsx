import { title } from "@/components/primitives";
import Image from "next/image";
export default function Aboutcsks() {
	const textGradientStyle = {
		background: "-webkit-linear-gradient(45deg, #FFFFFF, #17c964, #17c964,#FFFFFF)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	  };
	return (
	<div className="pl-2">
		<div className="lg:ml-16 mt-0 pt-1 pl-5 md:ml-16 md:pt-10 md:pb-5 md:pl-16 lg:pl-10 mb-5 lg:px-2">
			<h1 className={title()}>About <span style={textGradientStyle}>IEEE Computer Society Kerala Chapter</span></h1>
		</div>
		<div className="flex flex-wrap justify-evenly gap-8 pt-0">
			<section >
					<div className="lg:pt-16 pl-5 pr-5">
						<Image src="/csks.jpeg" className="relative" width={500} height={500} alt="akcssc"
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
					<h1>The IEEE Computer Society (CS) Kerala Chapter, part of the IEEE Kerala Section, is a thriving and vibrant society chapter, renowned for its extensive membership and dynamic activities. Established in 1985, it proudly holds the title of the largest Computer Society Chapter worldwide, boasting 48 Student Branch Chapters and a remarkable membership count of 2043 in 2023.

Our chapter is dedicated to fostering collaborations with Student Branch Chapters and organizing exceptional flagship events. Among them, the All Kerala Computer Society Student Convention (AKCSSC), initiated in 2015, serves as a platform to enhance networking opportunities for both students and young professionals. SlashKey, a 30-hour annual Hackathon, showcases students&apos; technical prowess.

At the heart of our success are our dedicated volunteers, many of whom hold leadership positions in IEEE. We frequently collaborate with other Organizational Units (OUs) to bring exciting events to life. In 2022, we co-hosted TechX, a flagship event featuring sessions on emerging technologies, soft skills, leadership, and industry engagement in partnership with the IEEE Computer Society Student-Young Professionals (SYP) Global Committee.

Recognized for our unwavering dedication, we received the IEEE Computer Society (Global) Outstanding Chapter Award in 2018 and were honored with the Early Career Professionals Engagement in Outstanding Chapter Award Program by the IEEE Computer Society Membership and Geographic Activities Board in 2022.<br/>

In 2022, we established a Student-Young Professionals team, aiming to expand our outreach and impact on postgraduate students and working professionals. This team collaborates with volunteers at the Hub and Section levels, overseeing event planning, organization, and documentation while supporting Student Branch Chapters.

The IEEE Computer Society Kerala Chapter embodies a unique blend of passion, dedication, and innovation. Our commitment to community service and volunteerism has earned us a respected position within the IEEE community, inspiring others to drive positive change.
</h1>
					
				
				</div>
			</section>
					
			</div>
		</div>
	</div>
	);
}
