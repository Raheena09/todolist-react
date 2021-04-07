import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // const [input, setInput] = useState(props.edit? props.edit.value:'');
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef();

  useEffect(() => {
    // Explicitly focus the text input
   //  accessing "current" to get the DOM node
    inputRef.current.focus()
  });

  const handleChange = (e) => {
    //  Under the function 'handleChange",changes the value of the state named input and display in textfield
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    //   preventing to reload the page after clicking submit button
    e.preventDefault();

    //   sending id and text through props in addTodo function of TodoList.js
    props.onSubmit({
      //   generating random id number between the range of 0 to 10000
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
  
    <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
      <>
      <div className="edit-inputfield">
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
        </div>
      </>
    ) : (
      <>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>
      </>
    )}
  </form>
    
  );
}

export default TodoForm;
