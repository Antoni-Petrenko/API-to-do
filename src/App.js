import React from 'react';
import Header from './components/header/Header';
import CreateTask from './components/createTaskBar/CreateTask';
import Tasks from './components/tasks/Tasks';
import PaginationButtons from './components/controllButtons/PaginationButtons';
import SortButtons from './components/controllButtons/SortButtons';
import Message from './components/message/Message';
import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Header/>
        <main>
          <Message/>
          <CreateTask/>
          <PaginationButtons/>
          <SortButtons/>
          <Tasks/>
        </main>
      
    </div>
  );
}

export default App;
