import AdminHeader from "../Common/AdminHeader";
import './EditStudent.css';
import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditStudent = () => {
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
    let params = useParams();
    
    let getStudent = async () => {
        let result = await fetch(`http://127.0.0.1:4500/studentdata/${params.id}`);
        result = await result.json();
        setName(result.name); setEmail(result.email); setContact(result.contact); setCollege(result.college); setTechnology(result.technology); setTotalfee(result.totalfee); setPaidfee(result.paidfee); setLeftfee(result.leftfee); setCity(result.city); setJoindate(result.joindate);
    }
    useEffect(() => {
        getStudent();
    }, []);

    let updateStudent = async () => {
        let result = await fetch(`http://localhost:4500/updatestudent/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, email, contact, college, technology, totalfee, paidfee, leftfee, city, joindate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.Success) {
            alert("Data Updated Successf0ll");
            navigate('/viewstudent');
        }
        if (result.status) {
            alert("Something went wrong unable to change to ");
        }
    }

    function fees() {
        let f = Number(totalfee) - Number(paidfee);
        setLeftfee(f);
    }


   
    return (
        <div>
            <AdminHeader />
            <div className="edit-base">
                <div className="edit-main">
                   
                    <div className="edit-heading">Update data of {name}</div>
                    <table className="edit-table" cellSpacing="0">
                         
                        
                            <tr>
                            <th>Name :</th>
                            <td>  <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td>  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Contact :</th>
                            <td>  <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>College :</th>
                            <td>  <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Technology :</th>
                            <td> {
                                technology === "Java" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></>
                            } 
                            {
                                technology === "Java-EE" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></> 
                            }
                            {
                                 technology === "Python" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></>
                            }
                            {
                                 technology === "PHP Laravel" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></>
                            }
                            {
                                 technology === "ASP .net" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></>
                            }
                            {
                                 technology === "MERN" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></>
                            }
                            {
                                 technology === "Android" ? (
                                    <select onChange={(e) => setTechnology(e.target.value)} value={technology} className="selectedit">
                                        <option value="Java">Java</option>
                                        <option value="Java-EE">Java-EE</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP Laravel">PHP Laravel</option>
                                        <option value="ASP .net">ASP .net</option>
                                        <option value="MERN">MERN</option>
                                        <option value="Android">Android</option>
                                    </select>
                                ):
                                <></>
                            }
                            </td>
                        </tr>
                        <tr>
                            <th>Total Fees :</th>
                            <td>  <input type="number" value={totalfee} onChange={(e) => setTotalfee(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Paid Fees :</th>
                            <td>  <input type="number" value={paidfee} onChange={(e) => setPaidfee(e.target.value)} onKeyUp={fees}/> </td>
                        </tr>
                        <tr>
                            <th>Left Fees :</th>
                            <td>  <input type="number" value={leftfee} onChange={(e) => setLeftfee(e.target.value)} readOnly/> </td>
                        </tr>
                        <tr>
                            <th>City :</th>
                            <td>  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Join Date :</th>
                            <td>  <input type="text" value={joindate} onChange={(e) => setJoindate(e.target.value)} /> </td>
                        </tr>
                    </table>
                    <button className="editbtn" onClick={updateStudent}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;