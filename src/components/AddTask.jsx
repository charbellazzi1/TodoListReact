import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToDo } from '../store/ToDoSlice.js'

const AddTask = () => {
  const dispatch=useDispatch();
  const idCount=useSelector((state)=>state.todo.idCount);
  console.log(idCount);
 const handleSubmit=(e)=>{
    e.preventDefault();
    const task=e.target[0].value;
    if(task.replaceAll(' ','')===''){
      alert('Cannot add an empty task');
        return;
    }
    dispatch(addToDo({id:idCount+1,task:task}));
    e.target[0].value='';

  }
  return (
    <form onSubmit={handleSubmit} className='pl-10 mb-5' >
       <div className='flex'>
        <input type='text' className='w-8/12 p-2 m-2 border border-gray-400 rounded-full' placeholder='Add a task'/>
        <button className='bg-slate-400 text-white p-2 m-2 rounded-full ml-0'>Add Task</button>
      </div>
    </form>
   
  )
}

export default AddTask