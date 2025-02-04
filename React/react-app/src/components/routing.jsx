import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Parent from './Parent';
import Increase from './hooks';
import Day from './switch';
import FormComponent from './forms';
import FocusInput from './useRef';
import Lazy from './lazy';
import Login from './Condition';
import Usememo from './useMemo';
import Tictac from './board';
import List from './lists';
import Child from './Child';
import Navigation from './Navigation';
import Usereducer from './useReducer';
import Custom from './cutomElements';
import ProfilerDemo from './profiler';
import Modal from './portal';
import UseContextDemo from './useContext';
import Fetchdata from './filterAxios';
import AxiosExample from './axios';
function Routing ()
{
    return(
        <>
    <Router>
      <Navigation/>
      <Routes>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/Child' element={<Child/>}></Route>
      <Route path='/hooks' element={<Increase/>}></Route>
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
      
      </Routes>
    </Router>
    </>
    );
}
export default Routing