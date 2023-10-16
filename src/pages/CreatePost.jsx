import React, { useState } from 'react';
import '../css/CreatePost.css';

import { RiCheckLine } from "react-icons/ri";
import { RiDeleteBin7Fill } from "react-icons/ri";

function CreatePost() {
  const [inputValue, setInputValue] = useState('');
  const [notCompleteTasks, setNotCompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setNotCompleteTasks([...notCompleteTasks, inputValue]);
      setInputValue('');
    }
  };

  const handleMarkComplete = (taskIndex) => {
    const taskToComplete = notCompleteTasks[taskIndex];
    setNotCompleteTasks(notCompleteTasks.filter((_, index) => index !== taskIndex));
    setCompleteTasks([...completeTasks, taskToComplete]);
  };

  const handleDeleteTask = (taskIndex, isComplete) => {
    if (isComplete) {
      setCompleteTasks(completeTasks.filter((_, index) => index !== taskIndex));
    } else {
      setNotCompleteTasks(notCompleteTasks.filter((_, index) => index !== taskIndex));
    }
  };

  return (
    <section className='container-fluid' id='CreatePost'>
      <div className='Task'>
        <div className='addTask'>
          <input
            type='text'
            placeholder='Add a Task'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        <ol className='notComplete'>
          <h4>Not Complete</h4>
          {notCompleteTasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleMarkComplete(index)}><RiCheckLine/></button>
              <button onClick={() => handleDeleteTask(index, false)}><RiDeleteBin7Fill/></button>
            </li>
          ))}
        </ol>

        <ol className='Complete'>
          <h4>Complete</h4>
          {completeTasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index, true)}><RiDeleteBin7Fill/></button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CreatePost;
