import React, { useState } from 'react';
import Checkbox from './Checkbox/Checkbox';
import "./CheckboxInput";
const CheckboxInput = ({name}) => {
    const [state, setstate] = useState(false)
    const toggleCheckbox = () => {
        setstate(!state)
    }
    console.log(name)
    return (
        <div className="CheckboxInput">
            <label>
                <Checkbox
                    checked={state}
                    onChange={toggleCheckbox}
                />
                <span style={{ marginLeft: 8 }}>{name}</span>
                </label>

        </div>
    );
}

export default CheckboxInput;
