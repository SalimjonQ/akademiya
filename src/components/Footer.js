import Adress from "./Footer/Adress"
import Phone from "./Footer/Phone"
export default function Footer() {
    return (
        <div className="footer">
            <Adress />
            <div className="contact">
                <Phone />
            </div>
            <div className="mesengers">
                <h4>Ijtimoiy tarmoqlar</h4>
                <a href="#"><i class="fa-brands fa-telegram telegram"></i></a>
                <a href="#"><i class="fa-brands fa-instagram instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook facebook"></i></a>               
            </div>
        </div>
    )
}