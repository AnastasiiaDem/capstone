import React from 'react'
import MarioAndAdrian from '../assets/Mario and Adrian A.jpg';
import MarioAndAdrian2 from '../assets/Mario and Adrian b.jpg';

export default function AboutSection() {
  return (
    <div className='about-section' id='about'>
      <img src={MarioAndAdrian} alt='MarioAndAdrian'/>
      <div>
        <h1 className='text-3xl'>About us</h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur debitis earum eos expedita
          ipsum laboriosam nemo neque officia officiis, pariatur quidem quis quod sequi ut veritatis vitae. Alias,
          aperiam
          cupiditate deleniti enim ex expedita optio provident rem repellat sequi similique, totam?
        </p>
      </div>
      <img src={MarioAndAdrian2} alt='MarioAndAdrian2'/>
    </div>
  )
}
