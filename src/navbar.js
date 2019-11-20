import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Navbar (props) {
    return (
        <Row className="top">
            <Col>
                Clicky Game
            </Col>
            <Col>
                Click an image to begin!
            </Col>
            <Col>
                Score: <span id="score">{props.score}</span> | Top Score: <span id="topScore">{props.highScore}</span>
            </Col>
        </Row> 
    )
};

export default Navbar;