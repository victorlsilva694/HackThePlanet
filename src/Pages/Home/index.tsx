import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../../Components/Navbar'
import Banner from '../../Components/Banner'
import BoxListContents from '../../Components/Home/BoxListContents'
import CardDataContent from '../../Components/Home/CardDataContent'
import EventsPlataform from '../../Components/Home/EventsPlataform'
import ServicesProvided from '../../Components/Home/ServicesProvided'
import Footer from '../../Elements/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <BoxListContents />
      <CardDataContent />
      <EventsPlataform />
      <ServicesProvided />
      <Footer />
    </>
  )
}

export default Home;
