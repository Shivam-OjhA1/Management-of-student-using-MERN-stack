import Home from "./Students/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Students/About";
import Login from "./Students/Login";
import AdminHome from "./Students/AdminHome";
import AddStudent from "./Students/AddStudent";
import ViewStudent from "./Students/ViewStudent";
import Student from "./Students/Student";
import EditStudent from "./Students/EditStudent";


const App = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/> 
                <Route path="/adminhome" element={<AdminHome />}/> 
                <Route path="/addstudent" element={<AddStudent />}/> 
                <Route path="/viewstudent" element={<ViewStudent />}/> 
                <Route path="/student/:id" element={<Student />}/> 
                <Route path="/editstudent/:id" element={<EditStudent />}/> 
            </Routes>
            
        </div>
    );
}

export default App;