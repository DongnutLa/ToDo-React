import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return (
        <section className='TodoListContainer'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
            {(!props.loading && !props.error) && props.searchedTodos.map(todo => props.render(todo))}
        </section>
    );
}

export { TodoList };