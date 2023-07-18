import { useState } from 'react'
import Auth from './components/Auth'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Applayout from './components/Applayout'
import Layout from './components/Layout'
import { Codeprovider } from './components/CodeContext'
import Profile from './components/Profile'
import Onlinecompiler from './compiler/onlinecompiler'
import Practice from './compiler/Practice'
import Question from './compiler/Question'
import Coursetopic from './course/Coursetopic'
import Topicdata from './course/Topicdata'
import Certificate from './certificate/Certificate'
import Rules from './certificate/Rules'
import Dashboard from './certificate/Dashboard'
import Certifytest from './certificate/Certifytest'

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
              <Route path='/practice' element={<Practice />} />
              <Route path='/course/:id' element={<Coursetopic />} />
              <Route path='/course/topic' element={<Topicdata />} />
              <Route path='/certificate' element={<Certificate />} />
              <Route path='/auth' element={<Auth />}>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
              </Route>
            </Route>
            <Route path='/compiler' element={<Onlinecompiler />} />
            <Route path='/practice/question/:id' element={<Question />} />
            <Route path='/certificate/rule/:id' element={<Rules />} />
            <Route path='/certificate/dashboard/:id' element={<Dashboard />} />
            <Route path='/certificate/question/:c_id/:t_id' element={<Certifytest />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Codeprovider>
  )
}

export default App
