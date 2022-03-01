import React from "react";
import "./promo-pack.css";
import { FaUserCheck} from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { BsCalendarMonth } from 'react-icons/bs';
import { BsInfoSquare } from 'react-icons/bs';
import { BsExclamationLg } from 'react-icons/bs';

class PromoPack extends React.Component {
    render() {
        return (

            <div className="background_color">

                {/* TITLUL */}
                <h1 className="promo-pack__main-title">Pachet Promotional</h1>
                {/* CE INCLUDE  */}
                <div className="promo-pack__container">
                    <div className="promo-pack__title">Ce include? <FaUserCheck/> </div>
                    <ul className="promo-pack__ul">
                        <li>chiria salii</li>
                        <li>3 ORE SI JUMATATET acces in sala de petrecre</li>
                        <li>aranjarea si decorarea spatiului (farfurii, tacamuri, pahare colorate)</li>
                        <li>supraveghetor copii</li>
                        <li>invitatii online personalizate</li>
                        <li>poze si filmuleț de la petrecere  - trimise pe whatsapp </li>
                        <li>Fotografie de grup </li>
                        <li>acces la locul de joaca modular( tobogane, piscina bile colorate, trambulina)</li>
                        <li>costumatii personaje disney pt copii ( la cerere-incluse în costul pachetului</li>
                        <li>poze panou - Elsa, Spiderman, Minionii ( la cerere- incluse în costul pachetului ) </li>
                        <li>cutia cu recuzita pt poze haioase( la cerere- inclusa în costul pachetului )</li>
                        <li>piniata ( bomboane ciocolata, caramele, mici surprize si jucarii pentru cei mici) </li>
                        <li>animator- 3 ore si jumătate ( pictura pe fata, baloane modelabile) </li>
                        <li>costumatii Animator la alegere: Anna sau Elsa -frozen, Minnie Mouse, Printesa roz-Aurora- Mica sirena-Ariel, Spiderwoman, Pirat, Clovn, Superwoman, Aladin, Unicorn, Minion, Scufița Rosie ) </li>
                        <li>dans cu, coregrafie , concursuri pe echipe </li>
                        <li>sampanie fară alcool pt copii</li>
                        <li>coifuri pt copii și părinți ( la cerere) </li>
                        <li>balon mare cifra aniversara </li>
                    </ul>
                </div>

                {/* MENIUL */}
                <div className="promo-pack__container">
                    <div className="promo-pack__title">Meniul <MdFastfood/> </div>
                    <ul className="promo-pack__ul">
                        <li className="promo-pack__subtitle">Pentru copii</li>
                        <ul>
                            <li>2 l apa plata si 2 l suc natural pe masa copiilor </li>
                            <li>6 meniuri crochete de pui cu bulete cartofi/cartofi prajiti / pizza ( 30 cm) ( restaurant “ La Butoaie “ ) </li>
                        </ul>
                        <li className="promo-pack__subtitle">Pentru adulti</li>
                        <ul>
                            <li>7 pizza (30 cm) diverse sortimente , la alegere </li>
                            <li>4 sticle de 1 l apa plata și 4 sticle  de 1 l suc din gama Pepsi ( Pepsi/Mirinda)</li>
                            <li>cafea/latte machiatto/ capuccino/ceai pt fiecare părinte</li>
                        </ul>
                    </ul>
                </div>

                {/* OPTIONAL */}
                <div className="promo-pack__container">
                    <div className="promo-pack__title">Optional <IoIosAddCircle/> </div>
                    <ul className="promo-pack__ul">
                        <li>Sala se poate închiria pentru 3 ore si jumatate cu animator inclus pe toata perioada  activitatii la pretul de 650ron. Oferta pentru 10-12 copii respectiv 10-15 adulti.In cadrul acestei ofertei puteti comanda de la orice restaurant doriti si puteti aduce bautura si orice altceva din afara locatiei</li>
                        <li>Va putem aduce si tortul aniversar -contra cost 160 ron 2,5 kg maxim(tort clasic,fara marțipan)!! Poza pe tort contra cost 35 ron!!(in colaborare cu, cofetaria Riviana)</li>
                        <li>BONUS-Mascota Minnie la venirea tortului-cadou din partea echipei pentru sarbatorit/ă  </li>
                        <li>Spectacol de magie - cu iepurasi si porumbei adevarati, recuzita magica , program artistic si interactiune cu fiecare copilas în parte -45 min/500 Ron ( colaborare cu magician) </li>
                        <li>Fântână de ciocolata + fructe de sezon si banane , vata colorata de zahar , candy bar dulce( jeleuri diferite forme , marshmellow, biscuitei  etc ) - 150 Ron</li>
                    </ul>
                </div>

                {/* PROGRAM */}
                <div className="promo-pack__container">
                    <div className="promo-pack__title">Program <BsCalendarMonth/> </div>
                    <ul className="promo-pack__ul">
                        <li>Orele -11:00-14:30 </li>
                        <li>Orele - 17:00- 20:30 </li>
                        <li>Program evenimente : în cursul săptămânii si in weekend </li>
                    </ul>
                </div>

                {/* MAI MULTE INFORMATII */}
                <div className="promo-pack__container">
                    <div className="promo-pack__title">Mai multe informatii <BsInfoSquare/> </div>
                    <ul className="promo-pack__ul">
                        <li>Copiii sub 2 ani au acces gratuit pe perioada petrecerii</li>
                        <li>Copiii cu varsta pana in 3 ani trebuie supravegheati si de parinti </li>
                        <li>Accesul la locul de joaca este permis cu 10 minute inaintea inceperii petrecerii</li>
                        <li>Pentru rezervarea datei si orei petrecerii, se achita un avans de minim 200 ron.Avansul nu se restituie!!</li>
                        <li>Petrecerile se organizeaza atat in weekend cat si în cursul săptămânii</li>
                        <li>Rezervarea datei si orei petrecerii este valabila 24h si se anuleaza daca nu se achita avansul !</li>
                        <li>Vă rugăm respectati orele de închiriere a sălii, depășirea timpului se taxează suplimentar -50 Ron / 30 min </li>
                        <li>La intrare în incinta copiii se descalta( ciorapei , botosei ) sau încalțăminte cu talpă textila iar parintii se incalță cu botoșei de unica folosinta peste incălțăminte!! Pt igiena copiilor!! Va rugăm frumos la intrare în incintă să informati invitatii ! </li>
                    </ul>
                </div>

                {/* IMPORTANT */}
                <div className="promo-pack__container">
                    <div className="promo-pack__title">Important <BsExclamationLg/> <BsExclamationLg/></div>
                    <ul className="promo-pack__ul">
                        <li>Din cauza situatiei actuale ,oferta pachetului este pentru max 10-12 copii,respectiv 10-15parinti !!! Dorim ca sala de eveniment sa fie cat mai aerisita! </li>
                        <li>Respectam normele de igiena si dezinfectare ! </li>
                        <li>Oferim condiții optime pentru copii, sala încalzită, loc de joaca cu trambulină si tobogane , Wi-fi  si un loc special amenajat pentru parinti , precum si o mini terasa pentru fumători ! </li>
                        <li>Puteti aduce orice doriti din afara incintei -gustare de biscuitei,fructe , baloane decorative, tort aniversar ( cu Certificat de Conformitate ) ! </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PromoPack;