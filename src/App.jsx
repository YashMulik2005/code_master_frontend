import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Auth from './components/Auth'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Applayout from './components/Applayout'
import Layout from './components/Layout'
import { Codeprovider } from './components/CodeContext'
import Profile from './components/Profile'
import Onlinecompiler from './compiler/onlinecompiler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Codeprovider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Applayout />} >
              <Route index element={<Layout />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/auth' element={<Auth />}>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
              </Route>
            </Route>
            <Route path='/compiler' element={<Onlinecompiler />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Codeprovider>
  )
}

export default App
