import React from "react";
import MainMap from "../Components/MainMap";
import SpotCards from "../Components/SpotCards";
export default function Main() {
  return (
    <div className="pageContainer">
      <MainMap />
      <SpotCards />
    </div>
  );
}
