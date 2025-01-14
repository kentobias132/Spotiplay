import Image from "next/image";
import React from "react";
import Link from "next/link";

function BannerImg() {
  return (
    <div
      className="hidden md:block px-4 pt-5 bg-green-900/25 rounded-3xl bg-contain bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/spotifycurves.png')" }}
    >
      <div className="text-white py-4 items-center lg:px-10 font-spro flex justify-between w-full ">
        <Link href={"/"}> Premium </Link>
        <Link href={"/"}> Download </Link>
        <Link href={"/"}> Support </Link>
        <Link href={"/"}> Profile </Link>
      </div>
      <div className="flex justify-center">
        <Image
          alt="spotiplay logo"
          src={"/morkhand.png"}
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}

export default BannerImg;
