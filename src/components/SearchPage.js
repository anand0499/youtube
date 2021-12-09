import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i0.wp.com/wikipura.com/wp-content/uploads/2021/05/h1.jpeg?resize=507%2C534&ssl=1"
        channel="Code with harry"
        verified
        subs="6.7lakh"
        noOfVideos={320}
        description="This channel is only for computer geeks and You will find every things here ...."
      />
      <hr />

      <VideoRow
        title="Fastest Way to learn Data Science"
        views="25k views"
        subs="6.7 lakh"
        timestamp="1 Week Ago"
        description="Easiest way to learn data science with python basic  "
        channel="Code With Harry"
        image="https://img.youtube.com/vi/XnNzck5-HdQ/0.jpg?resize=153%2C153"
      />

      <VideoRow
        title="Data Structures and algorithms for Beginners"
        views="2.1k views"
        subs="6.7 lakh"
        timestamp="1 Week Ago"
        description="Learn Data Structures and Algorithms  from Scratch to Adavance ...."
        channel="Code With Harry "
        image="https://i.ytimg.com/vi/5_5oE5lgrhw/maxresdefault.jpg"
      />

      <VideoRow
        title="C language Tutorial "
        views="21k views"
        subs="6.7lakh"
        timestamp="1 Week Ago"
        description=" One of the best course to start a C language if you are a comple beginner .....  "
        channel="Code With Harry"
        image="https://i.ytimg.com/vi/Wa-kgmSLls4/maxresdefault.jpg"
      />

      <VideoRow
        title="Python Tutorial "
        views="21k views"
        subs="6.7lakh"
        timestamp="2 Week Ago"
        description=" One of the best course to start a Python language if you are a comple beginner .....  "
        channel="Code With Harry"
        image=" https://i.ytimg.com/vi/vrQlEhmVFDA/maxresdefault.jpg"
      />

      <VideoRow
        title="Why Coding is Hard ? "
        views="21k views"
        subs="6.7lakh"
        timestamp="2 Week Ago"
        description="EveryOne things coding is hard but it is not true , Coding is just like math  .....  "
        channel="Code With Harry"
        image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZTEq6nWM5hP5X0Stt9aMByUFEyEniS7-1Fa6yHRKaI7DPEV12jhjh-fSXt7p5jb0WtA&usqp=CAU
  "
      />
    </div>
  );
}

export default SearchPage;
