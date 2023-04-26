import React from 'react'
import Hero from '../components/Hero';
import HeroCards from '../components/HeroCards';

function Home() {
  return (
    <section>
        <Hero/>
       <div className='container'> <HeroCards/></div>
    </section>
  )
}

export default Home;