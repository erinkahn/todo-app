import React, {useState, useEffect} from 'react';
import styles from './TodoItem.module.scss';
import { FaTrash } from "react-icons/fa"

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false)
 
  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = e => {
    if (e.key === 'Enter') {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => {
    return () => {
      console.log("cleaning up")
    }
  }, []) //  if we do not specify an array, the effect goes back to default

  return (
    <li className={styles.item}>

      <div onDoubleClick={handleEditing} style={viewMode}>

        <input 
          type="checkbox" 
          className={styles.checkbox} 
          checked={completed} 
          onChange={() => props.handleChangeProps(id)}
        /> 
        
        <button 
          onClick={() => props.deleteTodoProps(id)} 
          className={styles.button}>
            <FaTrash style={{ color: "darkcyan", fontSize: "16px" }}/>
        </button>

        <span style={completed ? completedStyle : null}>{title}</span>

      </div>

      <input 
        type="text" 
        value={props.todo.title} 
        style={editMode} 
        className={styles.textInput}   
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }} 
        onKeyDown={handleUpdatedDone}
      />

    </li>
  )

}

export default TodoItem