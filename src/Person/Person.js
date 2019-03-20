import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hi this is {props.name} and I'm {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default person;