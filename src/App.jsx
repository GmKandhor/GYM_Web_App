import { useState } from 'react'
import{Box} from "@mui/material"
import './App.css'
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import ExerciseDetail from "./Pages/ExerciseDetail"
import {
  BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Footer from "./Components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
      <Navbar/>
     
      <Router >
        <Switch>
        <Route path="/"><Home/></Route>
        <Route path="/exercise/:id"><ExerciseDetail/></Route>
        
        </Switch>
      </Router>
      <Footer/>
    </Box>
  )
}

export default App
