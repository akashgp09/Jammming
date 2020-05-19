import React, { Component } from "react";
import "./Track.css";
export default class Track extends Component {
  renderAction = () => {
    if (this.props.isRemoval) {
      // This logic will be displayed in the Playlist section of the site.
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      // This logic will be displayed in the Results section of the site.
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  };
  //This method  adds a new selected Track to the Playlist Section
  addTrack = () => {
    this.props.onAdd(this.props.track);
  };
  //This method removes a new selected Track from the Playlist Section
  removeTrack = () => {
    this.props.onRemove(this.props.track);
  };
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
