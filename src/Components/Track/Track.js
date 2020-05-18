import React, { Component } from "react";
import "./Track.css";
export default class Track extends Component {
  renderAction = () => {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  };
  addTrack = () => {
    this.props.onAdd(this.props.track);
  };
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
