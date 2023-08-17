import React from 'react'
import Topic from './Topic'
import Home from '../Home'
import Compiler from '../compiler/Compiler'
import Course from '../course/Course'

function Layout() {
    return (
        <div>
            {/* <Topic /> */}
            <Home />
            <Compiler />
            <Course />
        </div>
    )
}

export default Layout