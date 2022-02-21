import React from "react";
import "./parents.css";

class Parents extends React.Component {
    render() {
        return (
            <div className="parents__main-container">
                <div className="parents__second-container">
                    <h1 className="parents__title">Pentru parinti</h1>
                    <ul>
                        <li>Date contact: </li>
                        <li>Adresa: </li> 
                        <li><a href="https://www.facebook.com/TuTupHouse" target="_blank" rel="noreferrer" >Facebook</a></li> 
                        <li><a href="https://www.instagram.com/tuptuphouse/" target="_blank" rel="noreference">Instagram</a></li>
                        <li>Ce oferim parintilor in timpul petrecerii?</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Parents;