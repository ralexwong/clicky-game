import React from 'react';

function Navbar (props) {
    return (
        <nav className="navbar">
            <ul>
                <li><a >Clicky Game</a></li>
                <li>Click an image to begin!</li>
                <li>Score: <span id="score">0</span> | Top Score: <span id="topScore">0</span></li>
            </ul>
        </nav> 
    )
};

export default Navbar;