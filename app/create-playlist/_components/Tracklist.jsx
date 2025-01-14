import React from "react";
import Track from "./Track";
import LoadingSkeleton from "./LoadingState";
import CustomButton from "./CustomButton";

function Tracklist({ onAddTrack, searchResult, isLoading }) {
  return (
    <div className="bg-[#121212] w-[500px] bg-opacity-65 rounded-3xl p-6 m-6 ">
      <h1 className="text-white font-sans text-lg">Search Result</h1>
      <div className="h-96 overflow-y-auto overflow-x-hidden py-6">
        {isLoading && <LoadingSkeleton />}
        {searchResult.map((track) => (
          <div
            key={track.id}
            className="flex items-center hover:bg-gray-800 rounded-md justify-between px-4 my-2 text-white"
          >
            <Track track={track} />
            <CustomButton actionHandler={onAddTrack} track={track} text="Add" />
          </div>
        ))}
      </div>

      {searchResult.length === 0 && <p>No result found</p>}
    </div>
  );
}

export default Tracklist;
