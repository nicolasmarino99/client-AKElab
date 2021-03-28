import React, { useState } from 'react';
import Checkbox from './Checkbox/Checkbox';

const CheckboxInput = ({category}) => {
    const [state, setstate] = useState(false)
    const toggleCheckbox = () => {
        setstate(!state)
    }

    return (
        <>
            <label>
                <Checkbox
                    checked={state}
                    onChange={toggleCheckbox}
                />
                <span style={{ marginLeft: 8 }}>{category}</span>
                </label>

        </>
    );
}

export default CheckboxInput;
