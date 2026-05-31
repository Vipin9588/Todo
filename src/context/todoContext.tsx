import {createContext,useState} from 'react'
import type { arryObj } from '../hook/useStore';

type todoProviderProps = {
    children: React.ReactNode
}

type todoContextType = {
  todoList: arryObj[];
  setTodoList: React.Dispatch<React.SetStateAction<arryObj[]>>;
  updatedFlag: arryObj|null;
  setUpdatedFlag: React.Dispatch<React.SetStateAction<arryObj|null>>;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
};

export  const  todoContext =  createContext<todoContextType | null>(null);


export default function  TodoProvider({children}:todoProviderProps){

    const list =  JSON.parse(localStorage.getItem("taskList") || "[]");
    const [todoList, setTodoList] = useState<arryObj[]>(list);
    const [newTask, setNewTask] = useState<string>("");
    const [updatedFlag, setUpdatedFlag] = useState<arryObj|null>(null);
    
    return(
        <todoContext.Provider value={{todoList ,newTask,updatedFlag,setUpdatedFlag,setTodoList, setNewTask}}>
            {children}
        </todoContext.Provider>
    )
} 
