import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const { setOpenModal } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}>+</button>
    );
}

export { CreateTodoButton };