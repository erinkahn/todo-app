import React from 'react';
import ReactDOM from 'react-dom';
// import TodoContainer from './classBased/components/TodoContainer';
import TodoContainer from './functionBased/components/TodoContainer';
import './App.scss';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer/>
    </Router>
  </React.StrictMode>, 
  document.getElementById('root')
);
