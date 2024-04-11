import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-base">
            <div className="header-main">
                <ul className="header-menu">
                    <li><Link to="/"><i class="bi bi-house-door-fill"></i> Home</Link></li>
                    <li><Link to="/about"><i class="bi bi-info-circle-fill"></i> About</Link></li>
                    <li><Link to="/login"><i class="bi bi-box-arrow-in-right"></i> Login</Link></li>
                </ul>
            </div>

        </div>
    );
}

export default Header;