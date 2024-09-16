import React from 'react'
import { FaCheckSquare,FaSquare } from 'react-icons/fa';
import { MdEditNote,MdDeleteForever } from "react-icons/md";
import { useDispatch} from 'react-redux';
import {toggleCompleted,deleteTask,updateTodo } from '../store/ToDoSlice.js';
const Item = ({todo}) => {
    const dispatch = useDispatch();
    const isChecked = todo.completed;
    const handleCheck = () => {
        dispatch(toggleCompleted(todo.id));
    }
    const deleteHandler=()=>{
        dispatch(deleteTask(todo.id));
    }
    const editHandler=()=>{
        const newTask=prompt('Enter the new task');
        if(newTask.replaceAll(' ','')===''){
            alert('Cannot add an empty task');
            return;
        }
        dispatch(updateTodo({
            id:todo.id,
            task:newTask,
        }))
    }
    
  return (
    <div className='container flex items-center bg-gray-200 my-2 mx-2 w-auto pl-10'>
        <button onClick={handleCheck}>
        {isChecked ? (
          <FaCheckSquare className="text-green-500 mr-2 " />
        ) : (
          <FaSquare className="text-gray-400 mr-2 " />
        )}
        </button>
        <p className={`inline text-lg relative ${
    isChecked ? 'before:content-[""] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-px before:bg-gray-400' : ''
}`}>{todo.task}</p>
        <span className='justify-end ml-auto flex'>
          <button onClick={editHandler}><MdEditNote className='w-6 h-6 mr-1'/></button>
          <button onClick={deleteHandler}><MdDeleteForever className='w-6 h-6' /></button>
        </span>
        
        
       
    </div>
  )
}

export default Item