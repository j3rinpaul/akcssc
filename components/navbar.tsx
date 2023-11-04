"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";



const LinkStyles = (isActive: boolean) => ({
	color: "foreground",
	fontWeight: isActive ? "bold" : "normal",
	paddingBottom: isActive ? "1px" : "0",
	borderBottom: isActive ? "2px solid green" : "none",
  });

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);


  return (
    <NextUINavbar maxWidth="xl" position="sticky" height={"5rem"}>
      <NavbarBrand as="li" className="gap-3 pt-10 max-w-screen-xl">
        <NextLink className="flex flex-col justify-start items-center gap-1" href="/">
        <Image src={logo} alt="brand" width={100} height={50} />
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-10 justify-start ml-1">
		{siteConfig.navItems.map((item, index) => (
          <NavbarItem key={item.href}>
              <NextLink
              style={LinkStyles(index === activeLink)}
              color="foreground"
              onClick={() => setActiveLink(index)} // Update the active link on click
              href={item.href}
            >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <ThemeSwitch /> */}
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal  text-default-600 bg-default-100"
            href={"register link"}
            // startContent={"H"}
            variant="flat"
          >
            <span className="success">Register</span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link> */}
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === activeLink
                    ? "success"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "foreground"
                    : "foreground"
                }
                href="#"
                size="lg"
                onClick={() => setActiveLink(index)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
