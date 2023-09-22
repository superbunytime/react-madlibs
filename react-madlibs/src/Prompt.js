import React, { useState } from "react";
import Madlib from "./Madlib";
import PromptForm from "./PromptForm";

function Prompt(){
    const [madlibs, setMadlibs] = useState([]);
    
    // add the madlib to state
    const add = madlib => {
        setMadlibs(madlibs => [...madlibs, madlib]);
    }

    // Handle deletion of a madlib from the list of madlibs
    const remove = id => {
        setMadlibs(madlibs => madlibs.filter(madlib => madlib.id !== id));
    }

    // map the individual components of the madlib to be displayed
    const madlibComponents = madlibs.map(madlib => (
        <Madlib 
        key={madlib.id}
        id={madlib.id}
        noun={madlib.noun}
        noun2={madlib.noun2}
        adjective={madlib.adjective}
        color={madlib.color}
        handleRemove = {remove}
        />
    ))

    // Show the form,and display the resultant madlibs
    return (
        <div>
            <PromptForm createMadlib={add} />
            {madlibComponents}
        </div>
    )
}

export default Prompt;