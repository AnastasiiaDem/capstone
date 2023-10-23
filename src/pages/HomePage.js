import React from 'react'
import CallToAction from "../components/CallToAction";
import restaurantfood from '../assets/restauranfood.jpg';
import AboutSection from "../sections/AboutSection";
import MenuSection from "../sections/MenuSection";
import TestimonialsSection from "../sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <div className='welcome-block'>
        <section>
          <h1 className='text-7xl'>Little Lemon</h1>
          <p className='text-lg m-4'>Chicago</p>
          <p className='text-xl w-2/3 mb-6'>We are family owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist</p>
          <CallToAction/>
        </section>
        <img src={restaurantfood} alt='restaurantfood' className='restaurant-food'/>
      </div>
      <AboutSection/>
      <MenuSection/>
      <TestimonialsSection/>
    </>
  )
}
