
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'


function App() {
  


  return (
    <div >
      <Dashboard />
      <Routes >
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      </Routes>
    </div>
  )
}

export default App
