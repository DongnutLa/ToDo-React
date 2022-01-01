import React from 'react';
import './TodosLoading.css';

function TodosLoading(props) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        Cargando TODOs...
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodosLoading };