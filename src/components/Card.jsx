import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {setToDoList, sortToDo} from '../store/ToDoSlice.js'
import AddTask from './AddTask.jsx'
import Item from './Item.jsx'


const Card = () => {
    const dispatch=useDispatch();
    const todoList=useSelector((state)=>state.todo.todolist);
    const sortCriteria=useSelector((state)=>state.todo.sortCriteria);
    const viewAll=()=>{
        dispatch(sortToDo('ALL'));
    }
    const viewActive=()=>{
        dispatch(sortToDo('ACTIVE'));
    }
    const viewCompleted=()=>{
        dispatch(sortToDo('COMPLETED'));
    }
    const addFiveDefaultTasks=()=>{
        dispatch(setToDoList([
            {id:1,task:'First Task',completed:false},
            {id:2,task:'Second Task',completed:false},
            {id:3,task:'Third Task',completed:false},
            {id:4,task:'Fourth Task',completed:false},
            {id:5,task:'Fifth Task',completed:false},
        ]));
    }
    console.log(todoList);
    const sortedList=todoList.filter((todo)=>{
        if(sortCriteria==='ALL'){
            return todo;
        }
        if(sortCriteria==='COMPLETED'){
            return todo.completed;
        }
        if(sortCriteria==='ACTIVE'){
            return !todo.completed;
    }
})
console.log(sortCriteria);
  return (
    <div className='container flex flex-col text-center mx-auto w-8/12 bg-gray-200 rounded-xl ]'>
        <AddTask />
        <div className='flex text-sm mb-2'>
            <button className={` ml-12  hover:bg-gray-300 w-10 ${(sortCriteria==='ALL')?'border-b-2 border-gray-900':''} `} onClick={viewAll}>All</button>
            <button className={`mx-1   hover:bg-gray-300 w-auto ${(sortCriteria==='ACTIVE')?'border-b-2 border-gray-900':''}`} onClick={viewActive}>Active</button>
            <button className={`  hover:bg-gray-300 w-auto ml-1 ${(sortCriteria==='COMPLETED')?'border-b-2 border-gray-900':''}  `} onClick={viewCompleted}>Completed</button>
        </div>
        <div className='flex flex-col mb-6'>
        {sortedList.map((todo)=>(
            <Item todo={todo}/>
        ))}
         {todoList.length===0 && <button className='m-0 rounded-full  w-40 my-10 mx-12 hover:bg-gray-300 ' onClick={addFiveDefaultTasks}>Add 5 Default Tasks</button>}
        </div>
        
       
        

    </div>
  )
}

export default Card