import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import { Artist, Track, Search } from 'react-spotify-api'
import { SpotifyApiContext } from 'react-spotify-api';

// const authEndpoint = 'https://accounts.spotify.com/authorize';
// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = "7783e01e553a46149197799eb021fa1b";
// const redirectUri = "http://localhost:3000/redirect";
// const scopes = [
//   "user-read-currently-playing",
//   "user-read-playback-state",
// ];

class App extends React.Component {
  state = {
    term:'radiohead'
  }

  search = (term) => {
    console.log(term)
    this.setState({term})
  }

  
  render() {
    let magicLink = `https://accounts.spotify.com/authorize?client_id=7783e01e553a46149197799eb021fa1b&redirect_uri=http://localhost:3000/redirect&scope=user-top-read%20user-read-currently-playing%20user-read-playback-state&response_type=token&show_dialog=true`

    //let params = (new URL(document.location)).searchParams;
    //let accessTokenMatch = params.get("access_token");
    let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    console.log(accessTokenMatch)
    return (
      <div>
        <div>
          <h1>Bumping</h1>
          <div className="App">

            {accessTokenMatch ?
              <SpotifyApiContext.Provider value={accessTokenMatch[1]}>

                <SearchBar onSearch={this.search} />
                {/* <div className="App-playlist">
                  <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                  <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}
                  />
                </div> */}
                <Artist id="1XpDYCrUJnvCo9Ez6yeMWh">
                  {(artist, loading, error) => (
                    artist ? <h1>{artist.name}</h1> : null
                  )}
                </Artist>

                <Track id={["4kmBkq3ONzENSIRv2ah8Gh", "58LDBCFIHWmFnRGJQPTXvb"]}>
                  {(tracks, loading, error) => {

                    console.log(tracks)
                    return (
                      tracks ? (
                        tracks.tracks.map(track => (
                          <>
                            <h1 key={track.id}>{track.name}</h1>
                            <button onClick={() => new Audio(track.preview_url).play() }>Play</button>
                          </>
                        ))
                      ) : null
                    )
                  }}
                </Track>

                <Search query={this.state.term} album artist>
                  {(data, loading, error) => {
                    console.log(data)

                    
                    return data ? (
                      <ul>
                        <li>Albums</li>
                        <ul>
                          {data.albums.items.map(album => (
                            <li key={album.id}>{album.name}</li>
                          ))}
                        </ul>
                        <li>Artists</li>
                        <ul>
                          {data.artists.items.map(artist => (
                            <li key={artist.id}>{artist.name}</li>
                          ))}
                        </ul>
                      </ul>
                    ) : null
                  }
                  }
                </Search>
              </SpotifyApiContext.Provider>
              :
              <a href={magicLink}>Login</a>
            }
          </div>


        </div>
      </div>
    );
  }
}


export default App;
