// import {Link} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import React from "react";

export default function Navbar(props) {
  
  const handleScrollTop = () => {
    window.scroll(0, 0);
  };
  
  return (
    <>
      <nav className='flex' style={{flexDirection: props.direction, gap: props.gap}}>
        <span className='mr-2'>
          <Link to='' onClick={handleScrollTop}>Home</Link>
        </span>
        <span>
          <Link to='/#about'>About</Link>
        </span>
        <span>
          <Link to='/#menu'>Menu</Link>
        </span>
        <span>
          <Link to='/#testimonials'>Testimonials</Link>
        </span>
        <span>
          <Link to='/reserve'>Reserve</Link>
        </span>
      </nav>
    </>
  )
}
