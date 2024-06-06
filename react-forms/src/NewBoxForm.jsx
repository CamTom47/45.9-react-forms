import React, { addBox, useState } from 'react';
import { v4 as uuid } from 'uuid';


const NewBoxForm = ({addBox}) => {

    const INTIIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [newBoxFormData, setNewBoxFormData] = useState(INTIIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewBoxFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        let newBox = { ...newBoxFormData, id: uuid() };
        addBox(newBox)
        setNewBoxFormData(INTIIAL_STATE)

    }
    
  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input 
        onChange={handleChange}
        id="width" 
        type="text" 
        name="width"
        value={newBoxFormData.width}

        ></input>
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input 
            onChange={handleChange}
            id="height" 
            type="text" 
            name="height"
            value={newBoxFormData.height}
        ></input>
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          onChange={handleChange}
          value={newBoxFormData.backgroundColor}

        ></input>
        <div>
        <button>Add Box</button>
        </div>
      </div>
    </form>
  );
};

export default NewBoxForm;
