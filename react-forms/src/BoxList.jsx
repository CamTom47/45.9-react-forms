import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {

    let [boxes, setBoxes] = useState([]);

    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox])
    }

    const removeBox = id => {
        setBoxes( boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxes.map( box =>(
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            removeBox={removeBox}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </>
    )   
}

export default BoxList