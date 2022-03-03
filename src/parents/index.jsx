import React from "react";
import "./parents.css";
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';

class Parents extends React.Component {
    render() {
        return (
            <div className="parents__main-container">
                <div className="parents__second-container">
                    <h1 className="parents__title">Pentru parinti</h1>
                    <div className="parents__ceva">
                        <div className="parents__div-left">
                            <ul>
                                {/* ----- adresa ----- */}
                                <li >
                                    <div className="parents__li-title">Unde ne gasesti?</div>
                                    <div className="parents__li-info"><ImLocation /> Pitesti, strada STRADA, nr</div>
                                </li>

                                {/* ----- telefon facebook instagram ----- */}
                                <li >
                                    <div className="parents__li-title">Cum putem comunica?</div>
                                    <div className="parents__li-info"> <ImFacebook2 /> <a href="https://www.facebook.com/TuTupHouse" target="_blank" rel="noreferrer" >Facebook</a></div>
                                    <div className="parents__li-info"> <GrInstagram /> <a href="https://www.instagram.com/tuptuphouse/" target="_blank" rel="noreference">Instagram</a></div>
                                    <div className="parents__li-info"> <AiFillPhone /> nr telefon</div>
                                    <div className="parents__li-info"> <GrMail /> adresa de mail</div>
                                </li>
                            </ul>
                        </div>

                        <div className="parents__div-right">
                            <ul>
                                <li>
                                    <div className="parents__li-title">Ce oferim parintilor in timpul petrecerii?</div>
                                    <div className="parents__li-info">Terasa fumatori</div>
                                    <div className="parents__li-info">Acces WIFI</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Parents;