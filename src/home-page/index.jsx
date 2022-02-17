import React from "react";
import "./home-page.css";
import { Link } from "react-router-dom";
import Menu from "../menu";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page__main-container">
                <Menu />
                <div className="home-page__title">
                    <div>  Țup Țup </div>
                    <div className="ceva"> House </div>
                </div>
                <Link to='/promo-pack' className="home-page__promo-pack">Pachet Promotional</Link>
            </div>
        );
    }
}

export default HomePage;