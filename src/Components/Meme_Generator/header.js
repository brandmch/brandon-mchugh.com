import React from "react";
import pics from "../../Images/images"

export default function Header() {
    return (
        <div className="header_meme_generator">
            <img src={pics.datboi} />
            <h1>Meme Generator</h1>
            <h2>Just meme it.</h2>
        </div>
    )
}