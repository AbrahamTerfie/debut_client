import React from "react";
import Card from "./Card";

export default function SpotCards() {
  return (
    <div className="spotCard cards">
      <Card
        img="https://picsum.photos/id/54/400/300"
        title="What I learned from my visit to The Upside Down"
        author="Nancy Wheeler"
      />
      <Card
        img="https://picsum.photos/id/54/400/300"
        title="What I learned from my visit to The Upside Down"
        author="Nancy Wheeler"
      />
      <Card
        img="https://picsum.photos/id/54/400/300"
        title="What I learned from my visit to The Upside Down"
        author="Nancy Wheeler"
      />
      <Card />
      <Card />
    </div>
  );
}
