import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Slider from './home-page';
import PromoPack from './promo-pack';
import PartyGalery from './party-galery';
import ThemedParties from './themed-parties';
import Sponsors from './sponsors';
import Parents from './parents';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/home-page" element={<Slider/>} />
          <Route path="/promo-pack" element={<PromoPack/>} />
          <Route path="/party-galery" element={<PartyGalery/>} />
          <Route path="/themed-parties" element={<ThemedParties/>} />
          <Route path="/sponsors" element={<Sponsors/>} />
          <Route path="/parents" element={<Parents/>} />
          <Route path="*" element={ <Navigate to = "/home-page"/> } /> 
        </Routes>
      </div>
    );
  }
}

export default App;
