"use client";
import React, { useState } from "react";
import Track from "./Track";
import Spotify from "@/util/spotify/Spotify";
import CustomButton from "./CustomButton";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

function Playlist({
  playlistName,
  onChangePlaylistName,
  playlistTrack,
  onRemoveTrack,
  onSubmit,
  isLoading,
}) {
  async function saveToSpotify() {
    const trackUri = playlistTrack.map((track) => track.uri);

    if (playlistName === "") {
      toast.error("Please Name your Playlist");
    } else {
      await Spotify.saveToPlaylist(playlistName, trackUri);
      toast.success(
        ` 🎉🎉  ${playlistName} Playlist added to your spotify account`
      );
      onChangePlaylistName("");
      onSubmit([]);
    }
  }

  return (
    <div className="bg-[#121212] bg-opacity-65 rounded-3xl p-6 m-6 ">
      <div className="flex justify-between items-center pb-6">
        <input
          value={playlistName}
          onChange={(e) => onChangePlaylistName(e.target.value)}
          type="text"
          placeholder="Name your playlist"
          className="bg-transparent text-2xl font-semibold outline-none w-1/2 text-white border-b"
        />
        <h1 className="text-white text-sm font-semibold font-spro">
          Your custom Playlist
        </h1>
      </div>
      {/* <h2>{playlistName}</h2> */}

      <div className=" h-96 overflow-y-auto overflow-x-hidden py-6">
        {playlistTrack.length ? (
          playlistTrack.map((track) => (
            <div
              key={track.id}
              className="flex items-center hover:bg-gray-800 rounded-md justify-between px-4 my-2 text-white"
            >
              <Track track={track} />
              <CustomButton
                actionHandler={onRemoveTrack}
                track={track}
                text="Remove"
              />
            </div>
          ))
        ) : (
          <div className=" flex  justify-center items-center h-full">
            <p className=" text-white">Your Playlist is empty</p>
          </div>
        )}
      </div>

      {playlistTrack.length ? (
        <div className="w-full text-center py-4">
          <Button
            onClick={saveToSpotify}
            className="text-white  bg-green-950 border"
          >
            Add to Spotify
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Playlist;
