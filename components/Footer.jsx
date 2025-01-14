import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <div className=" rounded-3xl bg-[#121212] py-8 px-4 md:px-6 flex justify-between text-white">
      <div className="flex items-center ">
        <Image src={"/logo2.png"} width={40} height={40} alt="spotiplayLogo" />
        <h2 className="font-spro text-lg font-semibold ml-2">Spotiplay</h2>
      </div>
      {/* <Image src={"/Frame45.png"} width={40} height={40} alt="payment" /> */}
      <img className="hidden md:block" src="/Frame45.png" alt="" />
      <div className="flex items-center space-x-4">
        <Instagram />
        <Twitter />
        <Facebook />
      </div>
    </div>
  );
}

export default Footer;
