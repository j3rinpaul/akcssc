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
					<div >
						<Image src="/anoth.jpg" className="relative" width={400} height={400} alt="roboarm" />
					</div>
			</section>
		

			<div className="max-w-lg ">
			<section className="flex flex-row justify-start  gap-4 py-1 pb-0 md:py-10 max-w-3xl  ">
				<div className="mb-md px-1 lg:pt-10 md:pt-1 md:pb-1"> 
					<h1 className={subtitle()}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
					<h1 className={subtitle()}> Itaque officiis impedit voluptatibus quae </h1>
					<h1 className={subtitle()}>sit incidunt libero iusto sed. Corrupti earum ut sapiente quo totam </h1>
					<h1 className={subtitle()}> sequi incidunt distinctio deserunt accusamus reiciendis.;</h1>
				
				</div>
			</section>
					
			</div>
		</div>
	</div>
	);
}
