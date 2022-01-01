import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI() {

    const { error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desesperate, huno un error...</p>}
                {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };