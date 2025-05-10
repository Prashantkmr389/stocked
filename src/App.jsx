import './App.css'
import {Route, Routes } from 'react-router-dom'
// import Dashboard from './pages/Dashboard'
import LandingPage from './pages/common/LandingPage/LandingPage'
// import UserProfile from './pages/user/UserProfile'
// import Login from './pages/common/Login'
// import Signup from "./pages/common/Signup"
import Page404 from './pages/common/Page404'

function App() {
  

  return (

    <Routes>

      <Route path='/'>
        <Route index element={<LandingPage/>} />
      </Route>

      {/* <Route path ='/profile' element = {<UserProfile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path = '/signup' element = {<Signup/>}/> */}

      <Route path='*' element={<Page404/>} />



    </Routes>

  )
}

export default App
