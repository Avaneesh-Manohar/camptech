import Courses from "./Courses";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./Help";
import Quizzes from "./Quizzes";

function App() {
  return (
    <BrowserRouter>
    <div className="App ">
      <Routes>
      {/* <div className="container-fluid"> */}
        <Route path='/' element={<Courses />}/>
        <Route path='/quiz' element={<Quizzes />}/>
        <Route path='/help' element={<Help />}/>
      {/* </div> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
