import React, { Component } from "react";

import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [
        { name: "name1", artist: "artist1", album: "album1" },
        { name: "name2", artist: "artist2", album: "album2" },
        { name: "name3", artist: "artist3", album: "album3" },
      ],
      playlistName: "Bohemian Rhapsody",
      playlistTracks: [
        { id: 1, name: "name1", artist: "artist1", album: "album1" },
        { id: 2, name: "name2", artist: "artist2", album: "album2" },
        { id: 3, name: "name3", artist: "artist3", album: "album3" },
      ],
    };
  }
  addTrack = (track) => {
    const tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id == track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  };
  removeTrack = (track) => {
    const tracks = this.state.playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    this.setState({ playlistTracks: tracks });
  };
  updatePlaylistName = (name) => {
    this.setState({ PlaylistName: name });
  };
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
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
            />
          </div>
        </div>
      </div>
    );
  }
}
