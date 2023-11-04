"use client";
import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import NextLink from "next/link";
import AboutPage from "./about/page";
import AboutAkcs from "./aboutakcs/page";
import CardList from "./Events/page";
import PricingCards from "./pricing/page";
import Aboutcsks from "./aboutcsks/page";
import Head from "next/head";
import Maps from "./blog/page";
import Sponser from "./docs/page";

export default function Home() {
  const dissolvingEffectStyle = {
    filter:
      "linear-gradient(90deg, transparent, transparent 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 60%, transparent 80%, transparent)",
  };

  const handleDownload = () =>{
      const downloadLink = document.createElement('a');
      downloadLink.href = "/brouchure.pdf";
      downloadLink.download = "brouchure.pdf";
      downloadLink.click();
  };

  const textGradientStyle = {
    background:
      "-webkit-linear-gradient(45deg, #FFFFFF, #17c964, #17c964,#FFFFFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div>
       <Head>
        <title>Akcssc</title>
        <meta property="og:title" content="All kerala computer society student convention" key="title" />
      </Head>
     
      <div className="flex flex-wrap justify-evenly gap-8 lg:py-10">
        <section className="flex flex-col justify-start  gap-4 py-0 pb-0 md:py-16 max-w-3xl text-center ">
          <div className="mb-md px-0 lg:pt-16 md:pt-1 md:pb-1">
            <h1 className={title()}>All&nbsp;</h1>
            <h1 className={title()}>
              <span style={textGradientStyle}>Kerala&nbsp;</span>
            </h1>
            <br />
            <h1 className={title()}>Computer Society&nbsp;</h1>
            <br />
            <h1 className={title()}>
              <span style={textGradientStyle}>Student&nbsp;Convention</span>
            </h1>
            <h2 className={subtitle()}>November 24 - 26 2023</h2>
          </div>
        </section>

        {/* Right Section (Image) */}
        <div className="max-w-lg pl-8 pr-8 lg:pr-0 lg:pl-0 ">
          {/* Add your image here */}
          <section>
            <div>
              {/* <div className="absolute w-[40%] h-[35%]  bg-gradient-to-r from-gray-700"/> */}
              <Image
                src="/sample.png"
                className="relative"
                width={500}
                height={500}
                alt="roboarm"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="flex gap-3 pt-8 lg:pt-3 pr-2 mb-10 justify-center">
        <Link
          isExternal
          as={NextLink}
          href={"#register"}
          className={buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
          })}
        >
          <span style={{ color: "white" }}>Registration Soon</span>
        </Link>
        <Link

          
          onClick={handleDownload}
          href={""}
          className={buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
          })}
        >
          <span style={{ color: "white" }}>Brouchure</span>
        </Link>
      </div>

      <div className="pt-16 mt-16 pb-10 mb-16 pl-5 pr-5 lg:pl-0" id="about">
        <section>
          <AboutPage />
        </section>
      </div>

      <div>
        <section className="pr-5 pl-5">
          <AboutAkcs />
        </section>
      </div>

      <div>
        <section className="pr-5 pt-10 pl-5">
          <Aboutcsks />
        </section>
      </div>

      <div>
        <section className="pr-5 pl-2 lg:pl-0 lg:pr-0">
          <CardList />
        </section>
      </div>

      <div >
        <section >
            <Sponser/>
        </section>
      </div>


      {/* <div className="m-5" id="register">
        <section>
          <PricingCards />
        </section>
      </div> */}
      {/* 
      <div>
        <section>
          <Maps />
        </section>
      </div> */}
    </div>
  );
}
