import './Header.css';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    function Logout(){
        localStorage.clear();
        alert("Are you sure want to logout");
    }
    return (
        <div className="header-base">
            <div className="header-main">
                <ul className="header-menu">
                    <li><Link to="/adminhome"><i class="bi bi-house-door-fill"></i> Home</Link></li>
                    <li><Link to="/addstudent"><i class="bi bi-person-plus-fill"></i> Add Student</Link></li>
                    <li><Link to="/viewstudent"><i class="bi bi-person-vcard-fill"></i> View Student</Link></li>
                    <li><Link to="/" onClick={ Logout }><i class="bi bi-box-arrow-right"></i> Log Out</Link></li>
                </ul>
            </div>

        </div>
    );
}

export default AdminHeader;