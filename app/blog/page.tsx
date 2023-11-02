import { title } from "@/components/primitives";

export default function Maps() {
	return (
		<div className="lg:pl-16 lg:ml-16 pb-0">
			<div className="lg:pt-16 lg:ml-16 lg:pl-16 pr-10 pl-10 max-w-sm">
			<iframe
			 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.0269297509485!2d75.96802622474155!3d11.8333877883871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5db955198afb1%3A0x6b304f91fab809b6!2sGovernment%20Engineering%20College%2C%20Wayanad!5e0!3m2!1sen!2sin!4v1698907544488!5m2!1sen!2sin"
			  width="600" height="450" style={{border:0}} loading="lazy" ></iframe>
			</div>
		</div>
	);
}
