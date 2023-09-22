import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function PromptForm({createMadlib}){
    const [formData,setFormData] = useState({
        noun : '',
        noun2 : '',
        adjective : '',
        color : ''
    });

    // add the form data into state
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // Collect the input, add a unique id and reset the form 
    const gatherInput = evt => {
        evt.preventDefault();
        createMadlib({...formData, id : uuid()});
        setFormData({noun : '', noun2 : '', adjective : '', color : ''})
    }

    // Displays the form for creating a madlib
    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <input onChange={handleChange} type="text" name="noun" value={formData.noun} id='noun' placeholder="Noun" required></input>
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="noun2" value={formData.noun2} id='noun2' placeholder="Noun" required></input>
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="adjective" value={formData.adjective} id='adjective' placeholder="Adjective" required></input>
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="color" value={formData.color} id='color' placeholder="Color" required></input>
                </div>
                <button id="newMadlib">Create your story</button>
            </form>
        </div>
    )
}

export default PromptForm;