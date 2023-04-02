// import logo from './logo.svg';
// import './App.css';
// import NavBar from './Components/NavBar';
// // import Header from './Components/Header';
// // import About from './Components/About';
// // import Home from './Components/Home';
// // import Skills from './Components/Skills';
// // import {Link} from 'react-router-dom'
// // import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>
//         RESUME
//       </h1>
//       <NavBar/>
//       {/* <About/> */}
//       {/* <Home/> */}
//       {/* <Skills/> */}
//     </div>
//   );
// }

// export default App;
import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Achievements from './Components/Achievements'
const App = () => {
  return (
    <div><h1 style={{textAlign:'center',color:"green",textDecoration:"underline"}}>Resume</h1>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/achievements' element={<Achievements/>}></Route>
      </Routes>
    </BrowserRouter>
    
    

    </div>
  )
}

export default App
