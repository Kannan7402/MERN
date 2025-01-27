import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Parent from './components/Parent'
import Increase from './components/hooks'
import Day from './components/switch'
import List from './components/lists'
import ValidateForm from './components/forms';
import Login from './components/Condition';
function App()
 {
  return (
    <>
    <div className="App">
    </div>
    <Router>
      <ul>
        <li>
        <Link to='/parent'>Parent</Link>
        </li>
        <li>
        <Link to='/hooks'>Counter</Link>
        </li>
        <li>
        <Link to='/switch'>switch</Link>
        </li>
        <li>
        <Link to='/lists'>List</Link>
        </li>
        <li>
        <Link to='/forms'>Forms</Link>
        </li>
        <li>
        <Link to='/Condition'>Condition</Link>
        </li>
      </ul>
      <Routes>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/hooks' element={<Increase/>}></Route>
      <Route path='/switch' element={<Day/>}></Route>
      <Route path='/lists' element={<List/>}></Route>
      <Route path='/forms' element={<ValidateForm/>}></Route>
      <Route path='/Condition' element={<Login/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
