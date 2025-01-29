import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from './components/Parent'
import Increase from './components/hooks'
import Day from './components/switch'
import List from './components/lists'
import ValidateForm from './components/forms';
import Login from './components/Condition';
import Useref from './components/UseRef';
import Tictac from './components/board';
import Navigation from './components/Navigation';
import Usememo from './components/useMemo';
import Lazy from './components/lazy';

function App()
 {
  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/hooks' element={<Increase/>}></Route>
      <Route path='/switch' element={<Day/>}></Route>
      <Route path='/lists' element={<List/>}></Route>
      <Route path='/forms' element={<ValidateForm/>}></Route>
      <Route path='/Condition' element={<Login/>}></Route>
      <Route path='/UseRef' element={<Useref/>}></Route>
      <Route path='/board' element={<Tictac/>}></Route>
      <Route path='/useMemo' element={<Usememo/>}></Route>
      <Route path='/lazy' element={<Lazy/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
