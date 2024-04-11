import AdminHeader from "../Common/AdminHeader";
import './AdminHome.css';
const AdminHome = () => {
    return (
        <div className="main">
            <AdminHeader />
            <div className="admin-base">
                <div className="admin-txt">
                    <p><strong>Hey<br /></strong><br />Welcome To the Student Dashboard <br /> here you can add a student data and also view Student Data</p>
                </div>
                <div className="admin-img">
                </div>
            </div>
            <div className="container-box">
                <div className="container"><i class="bi bi-person-fill"></i><br/><h2>ABOUT STUDENT</h2><hr/><p>A student is a person enrolled in a school or other educational institution.In the United Kingdom and most commonwealth countries, a "student" attends a secondary school or higher (e.g., college or university); those in primary or elementary schools are "pupils".</p></div>
                <div className="container"><i class="bi bi-building"></i><br/><h2>ABOUT COLLEGE</h2><hr/><p>Both school life and college life is the most memorable time of a person's life, but both of them are quite different from each other. While in School life, we learn everything in a protected environment, College Life exposes us to a new environment where we have to learn new things and face new challenges by ourse…</p></div>
                <div className="container"><i class="bi bi-person-workspace"></i><br/><h2>ABOUT TEACHER</h2><hr/><p>n many countries, a person who wishes to become a teacher must first obtain specified professional qualifications or credentials from a university or college. These professional qualifications may include the study of pedagogy, the science of teaching. Teachers, like other professionals, may have to, or …</p></div>
            </div>
        </div>
    );
}

export default AdminHome;