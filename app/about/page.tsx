import { subtitle, title } from "@/components/primitives";
import Image from "next/image";
export default function AboutPage() {
	return (
	<div className="pl-2">
		<div className="lg:ml-16 lg:px-2">
			<h1 className={title()}>About</h1>
		</div>
		<div className="flex flex-wrap justify-evenly gap-8 pt-10">
			<section >
					<div className="lg:pt-16">
						<Image src="/akcssc.jpeg" className="relative" width={500} height={500} alt="akcssc"
						 style={{
							borderRadius: '30px', // Make the edges curved
							boxShadow: '6px 6px 0px 0px  #17c964', // Add a green drop shadow
						  }}
						/>
					</div>
			</section>
		

			<div className="max-w-lg ">
			<section className="flex flex-row justify-start  gap-4 py-1 pb-0 md:py-10 max-w-6xl  ">
				<div className="mb-md px-1 lg:pt-4 md:pt-1 md:pb-1 align-middle"> 
					<h1>All Kerala Computer Society Student Convention is the flagship event of
														the IEEE Computer Society Kerala Chapter organised every year to inspire IEEE CS 
														members to enhance their technical skills and knowledge. AKCSSC&apos;22 is no exception. This
														year, IEEE Computer Society Kerala Chapter seeks to gather together volunteers from the
														Computer Society to redefine goals, aspire higher, educate them to be Future Technological
														Leaders, and make them shed their square edges and fit into the circular hole - the team.
													This techno-managerial symposium is an amalgamation of soft skills, networking and
														professionalism, empowering volunteers in an environment where nothing is inconceivable. It
														is technology and innovation acting together, catalysed by networking and the art of
														connecting the whole of Kerala. AKCSSC&apos;22, the eightth edition of the All Kerala Computer Society Student Convention will
														be
														hosted by Mar Baselios Christian College of Engineering, Kuttikkanam, Peermade on November
														25 to 27th</h1>
					
				
				</div>
			</section>
					
			</div>
		</div>
	</div>
	);
}
