import Image from "next/image";
import React from "react";
import {
  Headphones,
  Rocket,
  CheckCheck,
  ArrowUpRightFromCircleIcon,
} from "lucide-react";
import { Button } from "./ui/button";

function DetailSection() {
  return (
    <div className="bg-[#121212] text-white my-1 rounded-3xl">
      <h1 className="text-white text-4xl font-spro font-semibold py-10 lg:py-20 w-full text-center">
        Scan To Download Spotiplay App
      </h1>
      <div className=" md:flex">
        <div className=" px-4 md:w-1/2 flex justify-center">
          <Image src={"/Group3.png"} width={400} height={400} />
        </div>
        <div className="md:w-1/2 p-4 md:px-0">
          <div className="flex items-center">
            <Headphones height={40} width={40} className="text-green-600" />
            <h1 className=" text-lg px-2 md:text-2xl font-spro font-semibold">
              Reimagine How You Build Playlists{" "}
            </h1>
          </div>
          <p className="font-sans py-2 mx-10">
            Say goodbye to the hassle of organizing your music. Our app makes it
            easy to discover tracks, add them to playlists, and enjoy them
            anytime—on any device. Whether you’re building the perfect workout
            mix or curating a chill vibe for your evening, we’ve got you
            covered.
          </p>

          <div className="py-6">
            <div className="flex items-center">
              <Rocket height={40} width={40} className="text-green-600" />
              <h1 className=" text-lg px-2 md:text-2xl font-spro font-semibold">
                Get Started in Just a Few Steps
              </h1>
            </div>

            <div className="py-2 font-spro mx-10 font-spro mx-10">
              <div className="flex font-semibold ">
                <CheckCheck className="text-green-600 mr-2" />
                <h2>Log in with Spotiplay</h2>
              </div>
              <p className="mx-8">
                Secure and quick authentication to connect your Spotify account.
              </p>
            </div>

            <div className="py-2 font-spro mx-10">
              <div className="flex font-semibold ">
                <CheckCheck className="text-green-600 mr-2" />
                <h2>Search and add Songs</h2>
              </div>
              <p className="mx-8">
                Use the search bar to find the tracks you love.
              </p>
            </div>

            <div className="py-2 font-spro mx-10">
              <div className="flex font-semibold ">
                <CheckCheck className="text-green-600 mr-2" />
                <h2>Save and enjoy</h2>
              </div>
              <p className="mx-8">
                Add songs to your playlist, customize it, and sync it to Spotify
                in seconds.
              </p>
              <Button className="bg-transparent border hover:bg-green-900/30 mt-4 p-5 text-lg rounded-full">
                Get Started For Free <ArrowUpRightFromCircleIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
