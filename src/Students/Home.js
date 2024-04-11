import Footer from "../Common/Footer";
import Header from "../Common/Header";
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-base">
                <div className="home-content">
                    Welcome <br/> To <br/> Student <br/> Management <br/> System
                </div>
                <div className="home-image">
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;