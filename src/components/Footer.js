import React from 'react'
import logo from "../assets/Asset 20@4x.png";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div className='p-4 bg-[#eaeaea]'>
      <img src={logo} alt="logo" className='logo h-[100px]' />
      <div className='flex m-6 mx-8 gap-60 justify-between text-sm'>
      <div>
        <Navbar direction='column' gap='0' />
      </div>
      <div className='flex flex-col gap-3'>
        <p>2222 Some Address<br />
          Chicago, IL</p>
        <p>(222)-222-2222</p>
        <Link to='#'>littlelemon@gmail.com</Link>
      </div>
        <div>
          <Link to='#'>Facebook</Link>
          <br />
          <Link to='#'>Instagram</Link>
        </div>
      </div>
      <p className='text-right text-xs'>&copy; 2023 Little Lemon restaurant</p>
    </div>
  )
}
