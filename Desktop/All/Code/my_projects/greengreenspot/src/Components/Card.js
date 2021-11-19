import React from "react";

export default function Card( {img , title , author}) {
  return (
    <div className="singleCard">
      <div className="card">
        <img src={img} />
        <div className="card-body">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
}
