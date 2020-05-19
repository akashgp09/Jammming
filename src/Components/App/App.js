import React, { Component } from "react";

import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [],
      playlistName: "Your playlist",
      playlistTracks: [],
    };
  }
  //This method add a new track to the playlist
  addTrack = (track) => {
    const tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  };
  // This method removes a track from the playlist
  removeTrack = (track) => {
    const tracks = this.state.playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    this.setState({ playlistTracks: tracks });
  };
  // This method Updates the Playlist Name to users's input
  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };
  //This Method Push your custom playlist to your spotify Account
  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  };
  //This method Searchs a song/artist/album provided by the user in the searchbar
  search = (term) => {
    Spotify.search(term).then((searchResults) => {
      this.setState({ SearchResults: searchResults });
    });
  };

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
