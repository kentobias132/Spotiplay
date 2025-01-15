// let accessToken;
// const tokenKey = "spotifyAccessToken";
// const expiryKey = "tokenExpiryTime";

// const clientID = "c98eaf2b5e4d41fc9c9a736b74315f63";
// const redirectUrl = "https://spotiplay-nine.vercel.app/create-playlist";
// const scope = "playlist-modify-public playlist-modify-private";
// const encodedScope = encodeURIComponent(scope);

// const Spotify = {
//   async getAccessToken() {
//     if (typeof window === "undefined") return null; // Ensure code doesn't run in non-browser environments

//     accessToken = localStorage.getItem(tokenKey);

//     if (accessToken) {
//       const expireAt = localStorage.getItem(expiryKey);
//       if (expireAt > Date.now()) {
//         return accessToken;
//       } else {
//         localStorage.removeItem(tokenKey);
//         localStorage.removeItem(expiryKey);
//         accessToken = null;
//       }
//     }

//     const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
//     const expireTime = window.location.href.match(/expires_in=([^&]*)/);

//     if (tokenInUrl && expireTime) {
//       accessToken = tokenInUrl[1];
//       const expiresIn = Number(expireTime[1]);

//       // Save token and expiry time to localStorage
//       localStorage.setItem(tokenKey, accessToken);
//       localStorage.setItem(expiryKey, Date.now() + expiresIn * 1000);

//       // Clear the URL fragment
//       window.history.replaceState({}, document.title, redirectUrl);

//       return accessToken;
//     }

//     // Redirect to Spotify for authorization if no token is found
//     const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=${encodedScope}&redirect_uri=${redirectUrl}`;
//     window.location = redirect;
//   },

//   async search(term) {
//     try {
//       accessToken = await this.getAccessToken();
//       if (!accessToken) {
//         throw new Error("Failed to get access token");
//       }

//       const response = await fetch(
//         `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
//           term
//         )}`,
//         {
//           method: "GET",
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         const errorMessage =
//           errorData?.error?.message || `HTTP error! status: ${response.status}`;
//         throw new Error(errorMessage);
//       }

//       const data = await response.json();
//       const tracksDetail = data.tracks.items;

//       return tracksDetail.map((track) => ({
//         id: track.id,
//         name: track.name,
//         artist: track.artists?.[0]?.name || "Unknown Artist",
//         album: track.album.name,
//         uri: track.uri,
//         image: track.album.images?.[2]?.url,
//       }));
//     } catch (error) {
//       console.error("Search Error:", error);
//       throw error; // Rethrow the error for higher-level handling
//     }
//   },

//   async saveToPlaylist(name, trackURIs) {
//     try {
//       if (!name || !trackURIs || trackURIs.length === 0) {
//         throw new Error("Invalid playlist name or no tracks provided");
//       }

//       const token = await this.getAccessToken();
//       if (!token) {
//         throw new Error("Failed to obtain access token");
//       }

//       const header = { Authorization: `Bearer ${token}` };

//       const userId = await this.getUserId(header);
//       const playlistId = await this.createPlaylist(name, userId, header);
//       await this.addTracksToPlaylist(playlistId, trackURIs, header);

//       return playlistId; // Return the playlist ID
//     } catch (error) {
//       console.error("Error saving playlist:", error);
//       throw error; // Rethrow the error for higher-level handling
//     }
//   },

//   async getUserId(header) {
//     try {
//       const response = await fetch(`https://api.spotify.com/v1/me`, {
//         headers: header,
//       });
//       if (!response.ok) {
//         throw new Error(`Error getting user ID: ${response.status}`);
//       }
//       const user = await response.json();
//       return user.id;
//     } catch (error) {
//       console.error("Get User ID Error:", error);
//       throw error;
//     }
//   },

//   async createPlaylist(name, userId, header) {
//     try {
//       const response = await fetch(
//         `https://api.spotify.com/v1/users/${userId}/playlists`,
//         {
//           method: "POST",
//           headers: header,
//           body: JSON.stringify({ name }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`Error creating playlist: ${response.status}`);
//       }
//       const playlistData = await response.json();
//       return playlistData.id;
//     } catch (error) {
//       console.error("Create Playlist Error:", error);
//       throw error;
//     }
//   },

//   async addTracksToPlaylist(playlistId, trackURIs, header) {
//     try {
//       const response = await fetch(
//         `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
//         {
//           method: "POST",
//           headers: header,
//           body: JSON.stringify({ uris: trackURIs }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`Error adding tracks: ${response.status}`);
//       }

//       return response;
//     } catch (error) {
//       console.error("Add Tracks Error:", error);
//       throw error;
//     }
//   },
// };

// export default Spotify;

let accessToken;
// const clientID = "b5a746da8a224a479ae0cb549f22baaa";
// const redirectUrl = "http://localhost:3000";
const clientID = "c98eaf2b5e4d41fc9c9a736b74315f63";
const redirectUrl = "https://spotiplay-nine.vercel.app/create-playlist";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInUrl && expiryTime) {
      // setting access token and expire time
      accessToken = tokenInUrl[1];
      const expiresIn = Number(expiryTime[1]);

      // setting the access token to expire at the value of expiration time
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // clearing the Url after the access token has expired
      window.history.pushState("access_token", null, "/");

      return accessToken;
    }

    // Redirect user to log into their account if the first and second check is false

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
        throw new Error("Search terms error");
      }
      const data = await response.json();
      console.log(data.tracks.items);
      const tracksDetailsResponse = data.tracks.items;

      const tracks = tracksDetailsResponse.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));

      return tracks;
    } catch (error) {
      console.log(error);
    }
  },

  // Save playlist to spotify app function
  async saveToPlaylist(name, trackURI) {
    // fetch access token and api url
    const token = Spotify.getAccessToken();
    const apiUrl = "https://api.spotify.com/v1";
    const header = { Authorization: `Bearer ${token}` };

    try {
      if (!name || !trackURI) {
        alert("Please enter a valid playlist name or add song to playlist");
        throw new Error(
          "Please enter a valid playlist name or add song to playlist"
        );
      }
      // get user profile details
      const userId = await getUserProfile();

      // create playlist
      const playlistId = await createPlaylist(name, userId);

      // add track to playlist
      const playlistTrack = await addTrackToPlaylist(playlistId, trackURI);

      return playlistTrack;
    } catch (error) {
      console.error(`Error in saving playlist to spotify: ${error}`);
    }

    async function getUserProfile() {
      let response = await fetch(`${apiUrl}/me`, { headers: header });
      if (!response.ok) {
        throw new Error("Fail to fetch user profile");
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
        throw new Error("Failed to create playlist");
      }

      let playlist = await response.json();
      console.log(playlist);
      return playlist.id;
    }

    async function addTrackToPlaylist(playlistId, trackURI) {
      const response = await fetch(`${apiUrl}/playlists/${playlistId}/tracks`, {
        method: "post",
        headers: header,
        body: JSON.stringify({ uris: trackURI }),
      });

      console.log(playlistId, trackURI);
      alert("Playlist added to your  Spotify account successfully");
      window.location.reload();
      if (!response.ok) {
        throw new Error("Fail to add track to playlist");
      }
      return response;
    }
  },
};

export default Spotify;
