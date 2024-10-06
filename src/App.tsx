import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    let tasks1 = [
        {id: 1, title:"css",isDone:true},
        {id: 2, title:"js",isDone:true},
        {id: 3, title:"react",isDone:false},
    ]

    let tasks2: Array<TaskType> = [
        {id: 1, title:"termonator",isDone:true},
        {id: 2, title:"XXX",isDone:false},
        {id: 3, title:"Jentelmens",isDone:false},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} />
            <Todolist title="Moves" tasks={tasks2} />

        </div>
    );
}


export default App;
