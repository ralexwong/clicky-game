import React from 'react';

function CharacterDiv (props) {
    return (
        <div 
            className="col-sm-4"
            value={props.id}
            onClick={ () => {props.onClick(props.id)}}
            >

            <img 
                className="card"
                src={props.image}
                id={props.id}
                alt={props.id}
            />
        </div>
    )
};


export default CharacterDiv;