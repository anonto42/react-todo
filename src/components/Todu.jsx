import React, { useEffect, useRef, useState } from 'react';
import './css/todo.css'
import TodoItems from './TodoItems';

let count;
let listNum = 1;
const Todu = () => {
  const inputRef = useRef(null)
  const [todo,setTodo] = useState([])
  const addFun = ()=>{
    setTodo([...todo,{
      no:listNum++,
      work:inputRef.current.value,
      display:'',
    }])
    inputRef.current.value='';
    localStorage.setItem('todo_count',count++)
  }

  useEffect(()=>{
    setTodo(JSON.parse(localStorage.getItem('todo')));
    count = localStorage.getItem('todo_count')
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      localStorage.setItem('todo',JSON.stringify(todo));
    },100);
  },[todo])

  return (
    <div className='todo'>
        <div className='todo-header'>To-Do List</div>
        <div className='todo-add'>
          <input type="text" ref={inputRef} className='todo-input' placeholder='Write your wark'/>
          <div onClick={()=>{addFun()}} className="todo-add-btn">Add</div>
        </div>
        <div className="todo-list">
          {todo.map((item,index)=>{
            return <TodoItems key={index} setTodo={setTodo} no={item.no} text={item.work} display={item.display} />
          })}
        </div>
    </div>
  )
}

export default Todu