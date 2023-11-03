import { subtitle, title } from "@/components/primitives";
import Image from "next/image";

export default function AboutAkcs() {

	
		const textGradientStyle = {
		background: "-webkit-linear-gradient(45deg, #FFFFFF, #17c964, #17c964,#FFFFFF)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	  };
  return (
    <div className="md:ml-5 md:pl-10 lg:pl-2">
      <div className="flex justify-center  pt-5 pb-5">
        <h1 className={title()}>Meet our host - <span style={textGradientStyle}> Government Engineering College Wayanad</span></h1>
      </div>
      <div className="flex flex-col lg:flex-row md:pl-16 justify-center gap-8 lg:py-0">
        {/* Left Section (Text) */}
        <section className="flex flex-col text-justify gap-4 py-1 pb-0 md:py-16 max-w-xl ">
          <div className="mb-md px-1 lg:pt-0 md:pt-1 md:pb-1">
            <h1>
              The IEEE Student Branch of Government Engineering College Wayanad
              (GECW) has created an environment for tech-savvy engineering
              students to develop skills and come up with innovative ideas. The
              SB marked its first step in August 2012. The student branch
              organizes technical quizzes, seminars, and other student-led
              competitions. Invited lectures by experts from industry and other
              academic institutions are also conducted. With the aspiring minds
              of GECW, the greatest achievement was the IEEE Regional Exemplary
              Student Branch Award 2022 for exemplary performance as an active
              IEEE Student Branch offering technical programs, activities, and
              professional networking opportunities that enable members to build
              critical skills. The most recent event that was successfully
              conducted was the Malabar Hub Meet (MHM&apos;22) which was a
              two-day annual flagship event of IEEE Malabar Hub aimed at
              connecting the vibrant volunteers across the Malabar Hub. A 3-day
              techno-cultural event ‘Illustra’ a blend of talks, workshops, and
              cultural was also conducted. A 3-day sight camp hosted by the IEEE
              SIGHT GECW to Baveli and Begur forest area ended off with a blast.
              Another event that was hosted by the SB GECW was the 2nd National
              Symposium and Research Colloquium, which was a 2-day hybrid event.
            </h1>
          </div>
        </section>
        {/* Right Section (Image) */}
        <div className="max-w-lg flex-row pt-10 lg:pt-16 md:pt-2 pl-5 pr-5 lg:pr-0 lg:pl-0">
          {/* Add your image here */}
          <section className="lg:pt-10">
            <div>
              <Image
                src="/GECWYD.png"
                className="relative"
                width={700}
                height={1000}
                alt="akcssc"
                style={{
                  borderRadius: "20px",
                  boxShadow: "6px 6px 0px 0px  #17c964",
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


