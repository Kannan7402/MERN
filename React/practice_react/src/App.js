import './App.css';
import Component from './components/component';
import Parent from './components/parent';
import Signup from './components/signUp';
function App() {
  return (
    <div className="App">
      <Signup/>
      <Component/>
      <Parent/>
    </div>
  );
}
export default App;
