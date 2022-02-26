
import './App.css';
import Sidebar from './sibebar';
import Form from './Form';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tables from './Tables';
import LoginForm from './LoginForm';
function App() {
  return (
    <Router>
        <div className="App d-flex" style={{background:"#e8f3f0"}}>
          <Sidebar />
          <div className='container'>
            <Form />
          </div>
        </div>
    </Router>
  );
}

export default App;
