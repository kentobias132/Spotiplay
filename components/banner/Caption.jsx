import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightFromCircleIcon } from "lucide-react";
import UsersIllustration from "./UsersIllustration";
import Link from "next/link";

function Caption() {
  return (
    <div className="p-4 bg-[#121212] text-white rounded-3xl">
      <div className="flex items-center py-4 lg:px-10 ">
        <Image src={"/logo.png"} width={35} height={35} />
        <h1 className="font-spro font-semibold text-xl mx-1">Spotiplay</h1>
      </div>
      <div className="py-10 md:py-0 md:px-5 lg:px-10 md:flex flex-col justify-center h-[90%]">
        <h1 className="font-spro text-4xl lg:text-6xl font-semibold">
          Connecting You to the Music That Moves Your Soul
        </h1>
        <p className="py-8 font-spro ">
          Turn your favorite songs into playlists that speak to you. Seamless
          Spotify integration makes it quick, easy, and fun.
        </p>
        <Link href={"/create-playlist"}>
          <Button className="bg-transparent border hover:bg-green-900/30 lg:w-1/2 p-5 text-lg rounded-full">
            Get Started For Free <ArrowUpRightFromCircleIcon />
          </Button>
        </Link>

        <UsersIllustration />
      </div>
    </div>
  );
}

export default Caption;
