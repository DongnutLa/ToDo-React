import React from 'react';
import { useTodos } from './useTodos';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { EmptySearchResults } from '../EmptySearchResults';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { ChangeAlert } from '../ChangeAlert';

function App() {

  const { error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal,
    sincronizeTodos,
} = useTodos();

  return(
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            {<TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />}
        </TodoHeader>

        <TodoList 
          error={error}
          onError={() => <TodosError />}
          loading={loading}
          onLoading={() => <TodosLoading />}
          searchedTodos={searchedTodos}
          onEmptyTodos={() => <EmptyTodos />}
          totalTodos={totalTodos}
          searchText={searchValue}
          onEmptySearchResults={(searchText) => <EmptySearchResults searchText={searchText} />}
          render={todo => (<TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />

        {!!openModal && (
            <Modal>
                <TodoForm
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />

        <ChangeAlert 
          sincronize={sincronizeTodos}
        />
    </React.Fragment>
  );
}

export default App;
