import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Parent from '../components/parent';
import Day from '../components/switch';
import FormComponent from '../components/forms';
import FocusInput from '../components/useRef';
import Lazy from '../components/lazy';
import Login from '../components/condition';
import Usememo from '../components/useMemo';
import Tictac from '../components/board';
import List from '../components/lists';
import Child from '../components/child';
import Navigation from './navigation';
import Usereducer from '../components/useReducer';
import Custom from '../components/customElements';
import ProfilerDemo from '../components/profiler';
import Modal from '../components/portal';
import UseContextDemo from '../components/useContext';
import Fetchdata from '../components/filteringList';
import AxiosExample from '../components/axios';
import AddUser from '../stores/reducers/addUser';
import DisplayFetch from '../components/hooks';
import Lifecycle from '../components/classComponent';
import PostList from '../stores/reducers/addPosts';
import Counter from '../stores/reducers/addCount';
import Posts from '../components/posts';
import Effect from '../components/useEffect';
import EditPost from '../components/editPosts';
import EditComment from '../components/editComments';
import MockLogin from '../components/mockLogin';
import UseCallback from '../components/useCallback';
import Message from '../components/message';
import ChatComponent from '../components/webSocket';
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
      <Route path='/addPosts' element={<PostList/>}/>
      <Route path='/addCounter' element={<Counter/>}/>
      <Route path='/useCallback' element={<UseCallback/>}/>
      <Route path="/mocklogin" element={<MockLogin/>}/>
      <Route path='/posts/:id' element={<Posts/>}>
        <Route path='/posts/:id/editPosts' element={<EditPost/>}/>
        <Route path='/posts/:id/editComment' element={<EditComment/>}/>
      </Route>
      <Route path='useEffect' element={<Effect/>}/>
      <Route path='message' element={<Message/>}/>
      <Route path='webSocket' element={<ChatComponent/>}/>
      </Routes>
    </Router>
    </>
    );
}
export default Routing