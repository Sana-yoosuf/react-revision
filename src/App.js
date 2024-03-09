import "./App.css";
import Effecthook from "./components/Effecthook";
import Formhandling from "./components/Formhandling";
import Header from "./components/Header";
import Home from "./components/Home";
import Input from "./components/Input ";
import Mapping from "./components/Mapping";
import Price from "./components/Price";
import Images from "./components/Images";

import Registration from "./components/Registration";
import UpdateState from "./components/UpdateState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Context from "./components/Context";
import { createContext, useState} from "react";

export const NameContext= createContext()

function App() {
  const [username,setUsername]=useState("Sana")
  return (
    
    <>
  <NameContext.Provider value={username}>

 
  
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/registration" element={<Registration />} />
          <Route path="/input" element={<Input />} />
          <Route path="/main" element={<Mapping />} >
           
          </Route>
          <Route path="/state" element={<UpdateState />} />
          <Route path="/contact" element={<Contact/>}>
          <Route path="images" element={<Images/>}/>
            <Route path="price" element={<Price/>}/>
          </Route>
        </Routes>

        <hr />
        <Effecthook />
        <hr />

        <Formhandling />
        <Context/>
      </BrowserRouter>
      </NameContext.Provider>
    </>
  );
}

export default App;
