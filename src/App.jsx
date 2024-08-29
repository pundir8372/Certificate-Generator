import { Outlet } from 'react-router-dom'
import './App.css'
import DataStore from './components/DataStore'



function App() {
  return (
    <div>
      <DataStore/>
       <Outlet/>
       
    </div>
  )
}

export default App
