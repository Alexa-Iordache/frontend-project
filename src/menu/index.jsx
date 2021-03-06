import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu__main-container">
                <ul>
                    {/* <li className="menu__li">Oferta</li> */}
                    <Link to='/party-galery' id="first">Galerie Petreceri</Link>
                    <Link to='/themed-parties' className="menu__li">Petreceri tematice</Link>
                    <li className="menu__li">Ateliere de creație</li>
                    <Link to="/sponsors" className="menu__li">Colaboratori</Link>
                    <Link to="/parents" className="menu__li">Pentru parinti</Link>
                    <li className="menu__li">Opționale</li>
                </ul>
            </div>
        );
    }
}

export default Menu;