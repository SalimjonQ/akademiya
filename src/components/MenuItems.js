import Home from "./Home"
export default function MenuItems() {
    return (
        <div className="menu-item">
            <ul>
                <li><a href="#">Bosh Sahifa</a></li>
                <li><a href="#">Yangiliklar</a></li>
                <li><a href="#">Qabul - {new Date().getFullYear()}</a></li>
            </ul>
        </div>
    )
}