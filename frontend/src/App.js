import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import CardTiles from './components/cardtiles/CardTiles';
import Experiences from './components/experiences/Experiences';
import GiftCards from './components/gift/GiftCard';
import Host from './components/host/Host';
import Inspiration from './components/inspiration/Inspiration';
import Footer from './components/footer/Footer';
import Location from './pages/location/Location';
import LocationInfo from './pages/location/LocationInfo';
import Listing from './pages/listing/Listing';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<>
          <Banner/>
          <CardTiles/>
          <Experiences/>
          <GiftCards/>
          <Host/>
          <Inspiration/>
          <Footer/>        
        </>}/>
        <Route path="/locations" element={<Location/>}/>
        <Route path="/location-info/:id" element={<LocationInfo/>}/>
        <Route path="/listings" element={<Listing/>}/>
      </Routes>
    </div>
  )
}

export default App