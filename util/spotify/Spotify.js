let accessToken;

const clientID = "c98eaf2b5e4d41fc9c9a736b74315f63";
const redirectUrl = "http://localhost:3000/create-playlist";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
    const expireTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInUrl && expireTime) {
      accessToken = tokenInUrl[1];
      const expiresIn = Number(expireTime[1]);

      // Set token expiration logic
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // Clear the URL fragment
      window.history.replaceState({}, document.title, redirectUrl);

      return accessToken;
    }

    // If no token and no token in URL, redirect to Spotify
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },

  async search(term) {
    accessToken = Spotify.getAccessToken();
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const tracksDetail = data.tracks.items;

      console.log("Access Token:", accessToken);
      console.log("fetch Data:", data);
      console.log("Tracks Details:", tracksDetail);

      const tracks = tracksDetail.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists?.[0]?.name || "Unknown Artist",
        album: track.album.name,
        uri: track.uri,
        image: track.album.images?.[2]?.url,
      }));

      console.log("Tracks:", tracks);
      return tracks;
    } catch (error) {
      console.error(error);
    }
  },

  //save playlist to spotify
  async saveToPlaylist(name, trackURI) {
    //fetch access token and api url
    const apiUrl = "https://api.spotify.com/v1";
    const token = Spotify.getAccessToken();
    const header = { Authorization: `Bearer ${token}` };

    try {
      if (!name || !trackURI) {
        alert("please enter a valid name or add song to playlist");
        throw new Error("Playlist name or Track is not valid");
      }

      const userId = await getUserId();

      const playlistName = await createPlaylist(name, userId);

      const playlistTracks = await addTrackTpPlaylist(playlistName, trackURI);

      return playlistTracks;
    } catch (error) {
      console.error(`Error in saving playlist to Spotify ${error}`);
    }

    async function getUserId() {
      let response = await fetch(`${apiUrl}/me`, { headers: header });
      if (!response.ok) {
        throw new Error(
          `HTTP Error! status: ${response.status}, Reason: Failed to get user id`
        );
      }
      let user = await response.json();
      return user.id;
    }

    async function createPlaylist(name, userId) {
      let response = await fetch(`${apiUrl}/users/${userId}/playlists`, {
        method: "post",
        body: JSON.stringify({ name: name }),
        headers: header,
      });

      if (!response.ok) {
        throw new Error(
          `HTTP Error! Status: ${response.status} Reason: Failed to create playlist`
        );
      }

      console.log(name);

      let playlist = await response.json();
      console.log(playlist);
      return playlist.id;
    }

    async function addTrackTpPlaylist(playlistID, trackUrl) {
      const response = await fetch(`${apiUrl}/playlists/${playlistID}/tracks`, {
        method: "post",
        body: JSON.stringify({
          uris: Array.isArray(trackUrl) ? trackUrl : [trackUrl],
        }),
        headers: header,
      });

      console.log("PlaylistID:", playlistID, "Tracks:", trackUrl);

      if (!response.ok) {
        throw new Error(
          `HTTP Error! Status: ${response.status} Reason: Failed to add track to playlist`
        );
      }

      alert("Playlist added successfully");
      return response;
    }
  },
};

export default Spotify;
