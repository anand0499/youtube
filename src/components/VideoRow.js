import React from "react";
import "./VideoRow.css";

function VideoRow({
  channel,
  views,
  subs,
  description,
  timestamp,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" image />
      <div className="videoRow-text">
        <h3>{title}</h3>
        <p className="videoRow-headline">
          {channel} .{" "}
          <span className="videoRow-subs">
            {" "}
            <span className="videoRow-subsNumber">{subs} subscribers</span>
          </span>{" "}
          {views} views .{timestamp}
        </p>
        <p className="videoRow-description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
