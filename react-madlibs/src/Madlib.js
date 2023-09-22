import React from "react";

function Madlib({id, handleRemove, noun, noun2, adjective, color}){
    const remove = () => handleRemove(id);

    // piece together the seperate components into a story
    return (
        <div>
            <p>There was a {color} {noun} who loved a {adjective} {noun2}</p>
            <button onClick={remove}>Delete this story</button>
        </div>
    )
}

export default Madlib;