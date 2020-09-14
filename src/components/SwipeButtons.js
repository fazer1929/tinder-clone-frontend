import React from "react";
import "./SwipeButton.css";
import { IconButton } from "@material-ui/core";
import {
  Replay,
  Close,
  StarRate,
  Favorite,
  FlashOn,
} from "@material-ui/icons/";
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
        <StarRate />
      </IconButton>
      <IconButton>
        <Favorite />
      </IconButton>
      <IconButton>
        <FlashOn />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
