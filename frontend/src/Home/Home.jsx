import React from 'react'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import PopularCollection from './components/PopularCollection'
import SpecialOffer from './components/SpecialOffer'
import CompleteLook from './components/CompleteLook'


const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <PopularCollection />
      <SpecialOffer/>
      <CompleteLook/>
    </>
  );
}

export default Home
