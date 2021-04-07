import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
    
  const [todos,setTodos]=useState([]);

  const addTodo = todo =>{

    // prevents empty data to be displayed i.e. doesnot accepts if only space is typed
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //  " ...todos" contains the previously typed list 
      const newTodo=[ ...todos, todo];
      setTodos(newTodo)


    //   console.log(newTodo);
  }

// todoId from edit.id and  newValue from value which is in todo.js
const updateTodo = (todoId, newValue) => {

  // prevents empty data to be displayed i.e. doesnot accepts if only space is typed
  if (!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
  } 
    // if item.id matches with the clicked id, then it will replace the newValue passed , otherwise no change 
    setTodos(prev =>prev.map(item => (item.id === todoId ? newValue : item)));
   
   

};

  const completeTodo = id =>{
     let updatedTodos= todos.map(todo=>{
          if(todo.id === id){
            //   compares between id of the list of todo state (todo.id) with tha id passed in the function named completeTodo 
              todo.isComplete = !todo.isComplete;
            //   toggle function (opposite of the current state)
          }
          return todo;
      })
      setTodos(updatedTodos);
    //   console.log(updatedTodos);
  }


  const removeTodo =id =>{
    //   gives new list or array by selecting the only those todo whose id does not matches the clicked ones ->use of filter
    // this excludes the clicked one in the list 
      const removeOne= todos.filter(todo => todo.id!=id);
      setTodos(removeOne);
  }
    return (
        <div >
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList;
