import React, { Component } from "react";
// import FontAwesome from "./node_modules/font-awesome";

class LikeBtn extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onToggleLike}
        className={classes}
        area-hidden="true"
      />
    );
  }
}

export default LikeBtn;
