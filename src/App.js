import React from 'react';
import Header from './components/header/Header';
import CreateTask from './components/createTaskBar/CreateTask';
import Tasks from './components/tasks/Tasks';
import PaginationButtons from './components/controllButtons/PaginationButtons';
import SortButtons from './components/controllButtons/SortButtons';
import Alert from './components/alert/Alert';
import './index.css';





function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Alert/>
      <CreateTask/>
      <PaginationButtons/>
      <SortButtons/>
      <Tasks/>
    </div>
  );
}

export default App;
