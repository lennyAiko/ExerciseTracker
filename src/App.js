import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components import
import Navbar from "./components/navbar";
import CreateUser from "./components/create-user";
import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import ExercisesList from "./components/exercises-list";

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<ExercisesList/>}/>
            <Route path="/edit/:id" element={<EditExercise/>}/>
            <Route path="/create" element={<CreateExercise/>}/>
            <Route path="/user" element={<CreateUser/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
