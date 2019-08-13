import React from 'react';

function Navbar (props) {
    return (
        <nav className="navbar">
            <ul>
                <li>Clicky Game</li>
                <li>Click an image to begin!</li>
                <li>Score: <span id="score">{props.score}</span> | Top Score: <span id="topScore">{props.highScore}</span></li>
            </ul>
        </nav> 
    )
};

export default Navbar;