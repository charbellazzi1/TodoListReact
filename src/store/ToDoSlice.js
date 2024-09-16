import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todolist:[],
    sortCriteria:'ALL',
    idCount:0,
}
const ToDoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        setToDoList:(state,action)=>{
            state.todolist=action.payload;
            state.idCount=action.payload.length;
        },
        addToDo:(state,action)=>{
            state.todolist.push({
                id:action.payload.id,
                task:action.payload.task,
                completed:false,
            });
            state.idCount++;
        },
        sortToDo:(state,action)=>{
            state.sortCriteria=action.payload;
        },
        updateTodo:(state,action)=>{
            const {id,task}=action.payload;
            const index=state.todolist.findIndex((todo)=>todo.id===id);
            state.todolist[index].task=task;
        },
        toggleCompleted:(state,action)=>{
            const index=state.todolist.findIndex((todo)=>todo.id===action.payload);
            state.todolist[index].completed=!state.todolist[index].completed;
        },
        deleteTask:(state,action)=>{
            state.todolist=state.todolist.filter((todo)=>todo.id!==action.payload);
        }
    }
});
export const {setToDoList,addToDo,sortToDo,updateTodo,toggleCompleted,deleteTask}=ToDoSlice.actions;
export default ToDoSlice.reducer;
