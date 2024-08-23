import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Assessments from './pages/Assessments'

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Assessments/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
