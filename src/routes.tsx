import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import Character from './pages/Character'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/character/:id" component={Character} />
        </BrowserRouter>
    )
}

export default Routes;