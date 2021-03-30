import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../../../contextProviders/CategoryProvider';
import { MoviesContext } from '../../../../../contextProviders/MoviesProvider';
import { deleteElement } from '../../../../../customLogic/customLogic';
import Checkbox from './Checkbox/Checkbox';
import "./CheckboxInput";
const CheckboxInput = ({name}) => {
    const [check, setCheck] = useState(false)
    const [category, setCategory] = useContext(CategoryContext);
    const [state, dispatch] = useContext(MoviesContext);

    const handleFilterBtn = category => {
        dispatch({
            type: 'FILTER_MOVIES_CATEGORIES',
            payload: category,
        });
    };

    const toggleCheckbox = () => {
        setCheck(!check)
        console.log(check, category)
        !check
        ? setCategory(category.push(name))
        : setCategory(deleteElement(name, category))
        setCategory(category)
        handleFilterBtn(category)
        console.log(check, category)
    }
    //console.log(category)
    
    return (
        <div className="CheckboxInput">
            <label>
                <Checkbox
                    checked={check}
                    onChange={toggleCheckbox}
                />
                <span style={{ marginLeft: 8 }}>{name}</span>
                </label>

        </div>
    );
}

export default CheckboxInput;
