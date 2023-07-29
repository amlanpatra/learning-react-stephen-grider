import React from "react";
import VideoItem from "./VideoItem";
// const VideoList = (props) => {

const VideoList = ({ videos, onVideoSelect }) => {
  //   return <div>{props.videos.length}</div>;

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
