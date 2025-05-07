// app/page.tsx or app/home/page.tsx

'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Feature from './Features/Feature';
import PopularBurger from './PopularBurger/PopularBurger';
import Delivery from './Delivery/Delivery';
import Team from './Team/Team';
import Reservation from './Reservation/Reservation';
import Newsletter from './Newsletter/Newsletter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { Metadata } from 'next';

// ✅ Metadata function should be outside of the component
export const metadata: Metadata = {
  title: 'A&W Menus',
  description: 'Explore our delicious A&W menu offerings, from classic burgers to refreshing beverages.Welcome to our burger restaurant where you can find the most delicious and popular burgers in town!',
  keywords: ['a&w menu', 'A and w menus', 'Delivery', 'Reservation', 'Popular Burgers'],
};

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center',
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <Newsletter />
      
    </div>
  );
};

export default Home;
