import AdminHeader from "../Common/AdminHeader";
import './AddStudent.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [college, setCollege] = useState("");
    let [technology, setTechnology] = useState("");
    let [totalfee, setTotalfee] = useState("");
    let [paidfee, setPaidfee] = useState("");
    let [leftfee, setLeftfee] = useState("");
    let [city, setCity] = useState("");
    let [joindate, setJoindate] = useState("");

    const addstudent = async () => {
        let result = await fetch('http://localhost:4500/addstudent',{
            method: 'post',
            body: JSON.stringify({ name, email, contact, college, technology, totalfee, paidfee, leftfee, city, joindate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        
        if (result.Status) {
            alert("Data Added Successfully");
            navigate('/adminhome');
        } 
        if (result.Required) {
            alert("All Fields are Required");
        }
    }

    function fees() {
        let f = Number(totalfee) - Number(paidfee);
        setLeftfee(f);
    }

    function join(){
        let da = new Date();
        let d = da.getDate();
        let m = da.getMonth();
        let y = da.getFullYear();
        let fd = d+"-"+m+"-"+y;
        setJoindate(fd);
    }
    return (
        <div className="top">
            <AdminHeader />
            <div className="form-container">
                <h1>Add New Student</h1><hr />
                <input type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="tel" placeholder="Enter Contact Number" onChange={(e) => setContact(e.target.value)} value={contact} />
                <input type="text" placeholder="Enter College" onChange={(e) => setCollege(e.target.value)} value={college} />
                <select onChange={(e) => setTechnology(e.target.value)} value={technology}>
                    <option selected >Select Technology</option>
                    <option value="Java">Java</option>
                    <option value="Java-EE">Java-EE</option>
                    <option value="Python">Python</option>
                    <option value="PHP Laravel">PHP Laravel</option>
                    <option value="ASP .net">ASP .net</option>
                    <option value="MERN">MERN</option>
                    <option value="Android">Android</option>
                </select>
                <input type="Number" placeholder="Total Fee" onChange={(e) => setTotalfee(e.target.value)} value={totalfee} />
                <input type="Number" placeholder="Paid Fee" onChange={(e) => setPaidfee(e.target.value)} value={paidfee} onKeyUp={fees} />
                <input type="Number" placeholder="Left Fee" onChange={(e) => setLeftfee(e.target.value)} value={leftfee} readOnly />
                <input type="text" placeholder="Student City" onChange={(e) => setCity(e.target.value)} value={city} />
                <input type="text" placeholder="joining date" onChange={(e) => setJoindate(e.target.value)} value={joindate} readOnly onClick={join}/>
                <button onClick={addstudent}>Add Student</button>
            </div>
        </div>
    );
}

export default AddStudent;