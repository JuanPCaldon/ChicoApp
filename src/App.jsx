import React from 'react'
import { Route, Router } from 'react-router'

export const App = () => {
  return (
    <Router>
        <Route>
           <Route path='/' element={<LoginPage/>} />
           <Route path="/Landing" element= {<LandingPages />}/>  
           <Route path="/movies/:movieId/:imagen" element = {<MovieDetails/> }/> 
        </Route>    

    </Router>
  )
}
