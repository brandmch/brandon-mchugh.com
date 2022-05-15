import React from "react";
import './App.css';
import pics from './Images/images.js'

function Maintenance_Alert() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>
                    Website is undergoing maintenance!
                </h3>
                <small>-Brandon McHugh</small>
                <p>For now, here is a picture of my dog, Savannah.</p>
                <img src={pics.savannahPic} />
            </header>


        </div>
    );
}

export default Maintenance_Alert;