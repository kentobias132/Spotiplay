"use client";

import React, { useState } from "react";
import Playlist from "./Playlist";
import Tracklist from "./Tracklist";
import SearchBar from "./SearchBar";
import Spotify from "@/util/spotify/Spotify";
import { ToastContainer, toast } from "react-toastify";

function Container() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTrack, setPlaylistTrack] = useState([]);

  async function handleSearch() {
    setLoading(true);
    setTrackList([]);
    if (searchTerm === "") {
      toast.error("Search term cannot be empty");
      return;
    }
    const searchResult = await Spotify.search(searchTerm);
    setTrackList(searchResult);
    setLoading(false);
  }

  function addTrackToPlaylist(newTrack) {
    const existingTrack = playlistTrack.find(
      (track) => track.id === newTrack.id
    );
    if (!existingTrack) {
      toast(`${newTrack.name} Added to Playlist`);
      setPlaylistTrack((prev) => [...prev, newTrack]);
    } else {
      toast.error(`${newTrack.name} Already exist in your playlist`);
    }
  }

  function removeTrackFromPlaylist(trackID) {
    toast(`${trackID.name} Remove from Playlist`);
    setPlaylistTrack((prev) => prev.filter((track) => track.id !== trackID.id));
  }

  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover bg-green-600/25
  "
      style={{ backgroundImage: "url('spotifycurves.png')" }}
    >
      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onSearchHandler={handleSearch}
      />

      <div className="flex space-x-4">
        <Tracklist
          isLoading={loading}
          searchResult={trackList}
          onAddTrack={addTrackToPlaylist}
        />
        <Playlist
          isLoading={loading}
          playlistTrack={playlistTrack}
          onRemoveTrack={removeTrackFromPlaylist}
          playlistName={playlistName}
          onChangePlaylistName={setPlaylistName}
          onSubmit={setPlaylistTrack}
        />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}

export default Container;
