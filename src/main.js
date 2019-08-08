import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.js';
import Header from './header.js';
import Footer from './footer.js';

class Main extends Component {
    state = {
        clickedImages: [],
        score: 0,
        highScore: 0

    };

    // shuffle the array so the image order is different everytime
    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // takes input of the clicked image ID and compare it to the array of already clicked images
    checkImage = currentImage => {

        // if it has been clicked then the states reset and the game images reshuffle
        for (let i = 0; i < this.state.clickedImages.length; i++) {
            if (currentImage === this.state.clickedImages[i]) {
                this.setState({ clickedImages: []});
                this.setState({ score: 0 });
                this.loadImages();
            } else {
                // add clickedimage to array
                this.setState({
                    clickedImages: this.state.clickedImages.concat(currentImage)
                  })
                // else it hasn't been clicked before then the score++
                this.setState({ score: this.state.score++ })
                // checks if the score is the new highscore
                if (this.state.score > this.state.highScore) {
                    this.state.highScore = this.state.score;
                    document.getElementById("highScore").innerHTML = this.state.highScore;
                }
                document.getElementById("score").innerHTML = this.state.score;
                this.loadImages();
            }
        }
    }

    // reload the images
    loadImages = () => {
        // clear previous order
        document.getElementById("mainContainer").innerHTML = "";
        let array = [1,2,3,4,5,6,7,8,9];
        this.shuffleArray(array);
        // attribute and append to container
        let bigDiv = document.createElement("DIV");
        for (let i = 0; i < array.length; i++) {
            let div = document.createElement("DIV");
            div.setAttribute("className", `clickyImages`);
            div.setAttribute("id", `image${array[i]}`);
            div.setAttribute("onclick", `checkImage(${div.id})`); // <-- not sure if this is how you pass through a function
            div.setAttribute("style", `background-image: url(../public/images/${array[i]}.jpg)`);
            bigDiv.appendChild(div);
        }
        console.log(bigDiv);
        document.getElementById("mainContainer").appendChild(bigDiv);
        return;
    }

    render() {
        return (
            <div>
                <Navbar
                    score={this.state.score}
                    highScore={this.state.highScore}
                />
                <Header />
                <div id="mainContainer" className="container">
                    {this.loadImages()}
                </div>
                <Footer />
            </div>
        );

    }
};

export default Main;
