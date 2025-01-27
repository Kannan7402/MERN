import './App.css'
import Displayof from './components/intro'
import Parent from './components/Parent'
import Increase from './components/hooks'
import Login from './components/Conditoin'
import Day from './components/switch'
import List from './components/lists'
import MultiInputForm from './components/forms'
function App() {
  return (
    <>
      <div>
        <Displayof name={'react'}/>
        <Parent/>
        <Increase/>
        <Login/>
        <Day/>
        <List/>
        <MultiInputForm/>
      </div>
    </>
  )
}
export default App
