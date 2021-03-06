import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext';

import './styles.css';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Check from '@material-ui/icons/Check';

function Task({ task }){
  const { removeTask, findItem, doneTask } = useContext(TaskContext);

  return (
    <li className="list-item">
      <span>{task.description}</span>
      <div>
        <Delete className="btn-icons" onClick={() => removeTask(task.id)}/>
        <Edit className="btn-icons" onClick={() => findItem(task.id)}/>
        <Check className="btn-icons" onClick={() => doneTask(task.id)}/>
      </div>
    </li>
  );
}

export default Task;