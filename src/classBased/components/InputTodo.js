import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: ""
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) { // removes whitespace from both sides of a string. This makes sure that the input field is not empty
      this.props.addtodoprops(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      console.log("Please write item")
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="form-container">

        <input 
        type="text" 
        className="input-text" 
        placeholder="Add a Todo..." 
        value={this.state.title} 
        name="title" 
        onChange={this.onChange} 
        addtodoprops={this.props.addTodoItem}/>

        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTodo