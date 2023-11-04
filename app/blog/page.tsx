import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram,AiOutlineLink} from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiFillLinkedin /> },
    { icon: <AiFillInstagram /> },
  ];

  const Links = [
    { link: "https://www.facebook.com/IEEECSKS/" },
    { link: "https://www.linkedin.com/company/ieeecsks" },
    { link: "https://www.instagram.com/ieeecsks/" },
  ]
  return (
    <div className="pt-[16rem] mt-16 ">
      <footer className="bg-gray-900 ">
        <div className="container mx-auto  py-10">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <Image
                src={"/logo.png"}
                alt="footer_logo"
                width={100}
                height={100}
                className="w-[18rem]"
              />
              
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-white justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-gray-700 p-2 rounded-full hover:bg-green-500 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      <Link
                      href={Links[index].link}
                      >
                        
                      {icon}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} CSKS <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/j3rinpaul"
                >
                  Jerin Paul
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Useful Links</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] hover:text-green-400"></span>

              <Link href={"https://www.ieee.org/"}>
              <p className="text-[16px] hover:text-green-400 cursor-pointer text-[#646464] font-medium hover:font-bold">
                IEEE 
              </p>
              </Link>
              <Link href={"https://www.computer.org/"}>
              <p className="text-[16px] hover:text-green-400 cursor-pointer text-[#646464] font-medium hover:font-bold">
                IEEE Computer Society 
              </p>
              </Link>
              
             
             
            </div>

            {/* right div */}
           

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
