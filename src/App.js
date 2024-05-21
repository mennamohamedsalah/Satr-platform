import React, {useState , useEffect} from 'react'
import {BrowserRouter, Route, Routes , Switch} from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader"

import NavBar from './NavBar'

import "./App.css"
import Home from './Home';

import Features from "./Features"
import New from "./New"

import Sigin from "./Sigin"

import Tracks from "./Tracks"

import Track1 from "./Track1"


import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  //Loading not working
const [Loading , setLoading] =useState(false);
useEffect(() => {
    //Loading working
  setLoading(true)


  setTimeout (() => {
    setLoading(false)
  },3000)
},[])


  return (
    <BrowserRouter>

{Loading ? 
<div className="preloaderr">
<BeatLoader color="#36d7b7"   height={100}    />

</div>
:
<>

<NavBar />

<Routes>
  <Route path='/' element={ <Home />} />
  <Route path='/Features' element={ <Features />} />
  <Route path='/New' element={ <New />} />
  <Route path='/Sigin' element={ <Sigin />} />
  <Route path='/Tracks' element={ <Tracks />} />
  <Route path='/Track1' element={ <Track1 />} />

</Routes>






</>
}








      
    </BrowserRouter>
  )
}

export default App

