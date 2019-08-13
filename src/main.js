import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.js';
import Header from './header.js';
import Footer from './footer.js';
import images from './images.json';
import CharacterDiv from './chracterDiv';

class Main extends Component {

    state = {
        clickedImages: [],
        score: 0,
        highScore: 0,
        images,

    };

    // shuffle the array so the image order is different everytime
    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    shuffleResult = () => {
        let shuffledImages = this.shuffleArray(images);
        this.setState({ images: shuffledImages })
    }

    // takes input of the clicked image ID and compare it to the array of already clicked images
    checkImage = id => {

        // if it has been clicked then the states reset and the game images reshuffle
            if (this.state.clickedImages.indexOf(id) === -1) {
                this.setState({ score: this.state.score + 1})
                this.setState({ clickedImages: this.state.clickedImages.concat(id) });
                if (this.state.score > this.state.highScore) {
                    this.setState({ highscore: this.state.highscore + 1});
                }
                this.shuffleResult();
            } else {
                this.setState({ score: 0 });
                this.setState({ clickedImages: [] });
                this.shuffleResult()
            }
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
                    <div className="row">
                        {this.state.images.map(characters => (
                            <CharacterDiv 
                                key={characters.id}
                                image={characters.image}
                                id={characters.id}
                                onClick={this.checkImage}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        );

    }
};

export default Main;
