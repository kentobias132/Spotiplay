import Image from "next/image";
import React from "react";
// import Button from "./Button";

function Track({ track }) {
  return (
    <div className="text-white">
      <div key={track.id}>
        <div className=" flex items-center py-1 justify-center space-x-2">
          <img
            src={track.image}
            className="w-11 h-11 rounded-sm"
            alt="track image"
          />
          <div>
            <h1 className="truncate max-w-[20ch] font-spro font-semibold text-gray-200">
              {track.name}
            </h1>
            <p className="truncate max-w-[30ch] text-gray-100 text-sm">
              {track.artist} | {track.album}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
