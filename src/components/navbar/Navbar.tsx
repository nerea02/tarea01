import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
   
    return (
        <nav className="navbar">
            <ul className="nav">
                <Link to="/">
                    <li>
                        HOME
                    </li>
                </Link>
                <Link to="publications">
                    <li>
                        LISTA DE PUBLICACIONES
                    </li>
                </Link>
            </ul>

        </nav>
    )
}
export default Navbar;
