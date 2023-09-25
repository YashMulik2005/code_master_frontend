import React from 'react'
import Topic from './Topic'
import Home from '../Home'
import Compiler from '../compiler/Compiler'
import Course from '../course/Course'
import Discuss from '../discuss/Discuss'
import Review from './Review'

function Layout() {
    return (
        <div>
            {/* <Topic /> */}
            <Home />
            <Compiler />
            <Course />
            <Discuss />
            <Review />
        </div>
    )
}

export default Layout