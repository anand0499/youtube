import React from "react";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecomendedVedio";
import "./First.css";

function Firsst() {
  return (
    <div className="app-page">
      <Sidebar />
      <RecomendedVideos />
    </div>
  );
}

export default Firsst;
