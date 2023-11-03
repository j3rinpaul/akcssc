"use client";
import { TwitterIcon } from '@/components/icons';
import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-feather'; // Import the icons you want to use


const Footers = () => {
  return (
    <footer className="bg-slate-950 text-white  py-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
         
          <li>
            <Link href="https://www.facebook.com/IEEECSKS/">
              <Facebook/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/ieeecsks/">
             <Linkedin/>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/IEEECSKS/">
             <Instagram/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footers;
