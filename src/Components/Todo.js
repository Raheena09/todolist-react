import React,{useState} from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import TodoForm from './TodoForm';
import {IoCheckmarkDoneOutline} from 'react-icons/io5';

const Todo=({todos, completeTodo, removeTodo, updateTodo})=> {
    const [edit, setEdit]=useState({
        id:null,
        value:''
    })

const submitUpdate=value=>{
    updateTodo(edit.id,value);

    // again needed to set the edit state null 
    // because it must be indicated that after updating there is not anything to be updated left 
    setEdit({
        id:null,
        value:''
    })
  
}

// if there is some value except of null in id of state named edit 
if(edit.id){
    return <TodoForm  edit={edit} onSubmit={submitUpdate} />
}
    
    return todos.map((todo,index) =>(
       
    <div className={ todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
         <div >{todo.text}</div>
         <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='remove-icon'/>
        <AiFillEdit  onClick={()=> setEdit({id: todo.id, value: todo.text})} className="edit-icon"/>
        <IoCheckmarkDoneOutline key={todo.id} onClick={()=> completeTodo(todo.id)} />
    
    </div>
        
        </div>
    

    ));
};
export default Todo;
