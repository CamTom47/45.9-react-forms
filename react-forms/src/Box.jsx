import React from "react";

const Box = ({
    id,
    width = 5,
    height = 5,
    backgroundColor = "blue",
    removeBox
}) => {
    return(

        <div>
        <div
            style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
            }}></div>
                        <button onClick={() => removeBox(id)}>X</button>


    </div>

)
}

export default Box;