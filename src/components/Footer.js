import Adress from "./Footer/Adress"
import Phone from "./Footer/Phone"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="footer">
            <Adress />
            <div className="contact">
                <Phone />
            </div>
            <div className="mesengers">
                <h6>Ijtimoiy tarmoqlar</h6>
                <Link to={{ pathname:"https://t.me/NavoiyFMM"}} target="_blank"><i class="fa-brands fa-telegram telegram"></i></Link>
                <Link to={{pathname:"https://www.instagram.com/navoiyfmm/"}} target="_blank"><i class="fa-brands fa-instagram instagram"></i></Link>
                <Link to={{pathname:"https://www.facebook.com/futbol.akademiya"}} target="_blank"><i class="fa-brands fa-facebook facebook"></i></Link>        
            </div>
        </div>
    )
}