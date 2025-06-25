import React from "react";
import "./GifCard.css";

const GifCard = ({ data }) => {
  console.log("this is data-->", data[0]?.images);
  console.log("this is data-->", data[0]);

  // slice from 1 to 10
  // using fixed_height.url for gif because the normal sized gif is too big.
  return (
    <div className="gif-card-container">
      {data.slice(1, 10).map((gif) => (
        <div className="cards" key={gif?.id}>
          <img src={gif?.images?.fixed_height?.url} alt={gif?.alt_text} />
        </div>
      ))}
    </div>
  );
};
/*
    <div className="gif-card-container">
      <div className="cards">
        <img src={data[0]?.images?.preview_gif.url}></img>
      </div>
      <div className="cards">ghdgh</div>
      <div className="cards">dfghdh</div>
      <div className="cards">dfghd</div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards">hdgh</div>
      <div className="cards"></div>
      <div className="cards"></div>
    </div>*/

export default GifCard;
