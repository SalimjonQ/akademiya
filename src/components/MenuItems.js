import Home from "../pages/Home"
import News from "../pages/News"
import Exam from "../pages/Exam"
import { Link } from "react-router-dom"

export default function MenuItems() {

    return (
        <div className="menu-item">
            <ul>
                <li><Link to="/" components={Home}>Bosh Sahifa</Link></li>
                <li><Link to="/News" components={News}>Yangiliklar</Link></li>
                <li><Link to="/Exam" components={Exam}>Qabul - {new Date().getFullYear()}</Link></li>
            </ul>
        </div>
    )
}