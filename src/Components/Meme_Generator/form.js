import React from "react";
import { useState, useEffect } from "react";
import data from "../../data/memedata";
import "./styles.css";

export default function Form() {
  document.body.style.background = "wheat";

  let allMemes = data.data.memes.map((meme) => meme.url);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bgw.jpg",
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="form_meme_generator">
        <div className="input-fields_meme_generator">
          <input
            className="input1_meme_generator"
            type="text"
            placeholder="Top Text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            className="input2_meme_generator"
            type="text"
            placeholder="Bottom Text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage}>Get a Random Meme!</button>
      </div>
      <div className="meme">
        <img className="meme_image" src={meme.randomImage} />
        <h2 className="meme_text top">
          {!meme.topText ? "Top Text" : meme.topText}
        </h2>
        <h2 className="meme_text bottom">
          {!meme.bottomText ? "Bottom Text" : meme.bottomText}
        </h2>
      </div>
    </div>
  );
}
