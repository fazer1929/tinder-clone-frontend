import React from "react";
import "./SwipeButton.css";
import { IconButton } from "@material-ui/core";
import { Replay, Close } from "@material-ui/icons/";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <Close />
      </IconButton>
      <IconButton>
        <Replay />
      </IconButton>
      <IconButton>
        <Replay />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
