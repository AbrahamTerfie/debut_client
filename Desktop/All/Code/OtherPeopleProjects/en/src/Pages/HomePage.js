import React from "react";
import NotesCard from "../Components/NotesCard";
import NotesDetails from "../Components/NotesDetails";

export default function HomePage() {
  return (
    <div className="homeContainer">
      <div className="bigCol">
        {" "}
        <NotesCard />{" "}
      </div>
      <div className="bigCol">
        <NotesDetails />
      </div>
      <div className="bigCol">thhis is home page</div>
    </div>
  );
}
