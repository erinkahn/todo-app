import React from 'react';
import styles from './TodoItem.module.scss';

class TodoItem extends React.Component {

  state = {
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = e => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false
      })
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

  render() {

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>

        <div onDoubleClick={this.handleEditing} style={viewMode}>

          <input 
            type="checkbox" 
            className={styles.checkbox} 
            checked={this.props.todo.completed} 
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          /> 
          
          <button 
            onClick={() => this.props.deleteTodoProps(this.props.todo.id)} 
            className={styles.button}>delete
          </button>

          {this.props.todo.title}
        </div>

        <input 
          type="text" 
          value={this.state.title} 
          style={editMode} 
          className={styles.textInput}   
          onChange={e => {
            this.props.setUpdate(e.target.value, this.props.todo.id)
          }} 
          onKeyDown={this.handleUpdatedDone}
        />

      </li>
    )
  }
}

export default TodoItem