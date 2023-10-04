import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Holiday from './component/Holiday';
import Corporate from './component/Corporate';
import Experience from './component/Experience';
import MyFirstFamily from './component/My-First-Family';
import Weading from './component/Weading';

function App() {
  const navListData = [
    {id:1, name:"Home",path:"/"},
    {id:2, name:"Holiday",path:"/Holiday"},
    {id:3, name:"Corporate", path:"/corporate"},
    {id:4, name:"Experience",path:"/Experience"},
    {id:5, name:"My-First-Family",path:"/MyFirstFamily"},
    {id:6, name:"Weading",path:"/Weading"}
  ]
  console.log("jdioj",navListData)
  return (
    <div className="App">
    <nav className="navbar navbar-light bg-light">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home navListData={navListData}/>} />
        <Route path='/Holiday' element={<Holiday  navListData={navListData} />}/>
        <Route path='/Corporate' element={<Corporate  navListData={navListData} />}/>
        <Route path='/Experience' element={<Experience  navListData={navListData} />}/>
        <Route path='/MyFirstFamily' element={<Holiday  navListData={navListData} />}/>
        <Route path='/Weading' element={<Weading/>}/>
       </Routes>
       </BrowserRouter>
   </nav>
   </div>
  );
}

export default App;
