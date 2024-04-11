import AdminHeader from "../Common/AdminHeader";
import './ViewStudent.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ViewStudent = () => {
    let [student, setStudent] = useState([]);
    const getStudent = async () => {
        let result = await fetch('http://127.0.0.1:4500/getstudent');
        result = await result.json();
        console.log(result);
        setStudent(result);
    }
    useEffect(() => {
        getStudent();
    }, []);


    let deleteData = async (id) => {
        if (window.confirm("Are you sure ?")) {
            let result = await fetch(`http://127.0.0.1:4500/deletedata/${id}`, {
                method: 'delete'
            });
            result = await result.json();
            if (result) {
                getStudent();
            }
        }
    }

    let searchStudent = async (e) => {
        let key = e.target.value;
        if (key) {
            let data = await fetch(`http://localhost:4500/searchdata/${key}`);
            data = await data.json();
            if (data) {
                setStudent(data);
            } else {
                getStudent();
            }
        }else{
            getStudent();
        }

    }
    return (
        <div>
            <AdminHeader />
            <div className="view-base">
                <div className="view-main">
                    <div className="view-heading">All Students</div>
                    <table className="view-table" cellSpacing="0" cellPadding="0">
                        <tr>
                            <td colSpan="2" id="td1">
                                <input type="search" onChange={searchStudent} className="view-search" placeholder="Search Student" />
                            </td>
                        </tr>
                        <tr className="view-row">
                            <th>S.no</th>
                            <th>Name</th>
                            {/* <th>Email</th> */}
                            {/* <th>Mobile</th> */}
                            <th>Technology</th>
                            {/* <th>College</th> */}
                            {/* <th>City</th> */}
                            <th>Total Fees</th>
                            {/* <th>Paid Fees</th> */}
                            <th>Left Fees</th>
                            <th>Join Date</th>
                            <th>Action</th>
                        </tr>
                        {
                            student.length > 0 ? student.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    {/* <td>{ item.email }</td> */}
                                    {/* <td>{ item.contact }</td> */}
                                    <td>{item.technology}</td>
                                    {/* <td>{ item.college }</td> */}
                                    {/* <td>{ item.city }</td> */}
                                    <td>{item.totalfee}</td>
                                    {/* <td>{ item.paidfee }</td> */}
                                    <td>
                                        {
                                            item.leftfee > 0 ? (
                                                <span className="leftfee1">Rs. {item.leftfee}</span>
                                            ) :
                                                <span className="leftfee0">Paid <i class="bi bi-check-circle-fill"></i></span>
                                        }
                                    </td>
                                    <td>{item.joindate}</td>
                                    <td>
                                        <Link to={"/student/" + item._id} className="viewbtn"><i class="bi bi-eye-fill"></i> View</Link>
                                        <Link to={"/editstudent/" + item._id} className="udbtn"><i class="bi bi-pencil-square"></i> Update</Link>  &nbsp; <button className="delbtn" onClick={() => deleteData(item._id)}><i class="bi bi-trash3-fill" ></i> Delete</button> </td>
                                </tr>
                            ) :
                                <tr>
                                    <td colSpan="7">
                                    <h1>No Data Found</h1>
                                    </td>
                                </tr>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewStudent;


//Student.js
//EditStudent.js
//create on student folder