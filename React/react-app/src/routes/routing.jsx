import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Parent from '../components/Parent';
import Day from '../components/switch';
import FormComponent from '../components/forms';
import FocusInput from '../components/useRef';
import Lazy from '../components/lazy';
import Login from '../components/Condition';
import Usememo from '../components/useMemo';
import Tictac from '../components/board';
import List from '../components/lists';
import Child from '../components/Child';
import Navigation from './Navigation';
import Usereducer from '../components/useReducer';
import Custom from '../components/cutomElements';
import ProfilerDemo from '../components/profiler';
import Modal from '../components/portal';
import UseContextDemo from '../components/useContext';
import Fetchdata from '../components/filterAxios';
import AxiosExample from '../components/axios';
import AddUser from '../stores/reducers/addUser';
import DisplayFetch from '../components/hooks';
import Lifecycle from '../components/classComponent';
function Routing ()
{
    return(
        <>
    <Router>
      <Navigation/>
      <Routes>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/Child' element={<Child/>}></Route>
      <Route path='/hooks' element={<DisplayFetch/>}></Route>
      <Route path='/switch' element={<Day/>}></Route>
      <Route path='/lists' element={<List/>}></Route>
      <Route path='/forms' element={<FormComponent/>}></Route>
      <Route path='/Condition' element={<Login/>}></Route>
      <Route path='/useRef' element={<FocusInput/>}></Route>
      <Route path='/board' element={<Tictac/>}></Route>
      <Route path='/useMemo' element={<Usememo/>}></Route>
      <Route path='/lazy' element={<Lazy/>}></Route>
      <Route path='/useReducer' element={<Usereducer/>}></Route>
      <Route path='/customElement' element={<Custom/>}></Route>
      <Route path='/profiler' element={<ProfilerDemo/>}></Route>
      <Route path='/portal' element={<Modal/>}/>
      <Route path='/useContextDemo' element={<UseContextDemo/>}/>
      <Route path='/filterAxios' element={<Fetchdata/>}/>
      <Route path='/axios' element={<AxiosExample/>}/>
      <Route path='/addUser' element={<AddUser/>}/>
      <Route path='/classComponent' element={<Lifecycle/>}/>

      </Routes>
    </Router>
    </>
    );
}
export default Routing