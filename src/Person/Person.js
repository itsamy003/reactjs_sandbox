import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Hi this is {props.name} and I'm {props.age} old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;