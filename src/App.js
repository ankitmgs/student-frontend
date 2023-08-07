import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentForm from "./components/StudentForm";
import Attendence from "./components/Attendence";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/save" element={<StudentForm />} />
          <Route path="/attendence" element={<Attendence />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
