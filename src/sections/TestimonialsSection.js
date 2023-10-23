import React from 'react'
import person1 from "../assets/3ca412176fe4306326b04a78b51fa148c49f99c1.png";
import person2 from "../assets/08c5772c481233a30a46aeca552132053604e2a8.png";
import person3 from "../assets/44dd2beb0c06094368ffbb7fa1843005cfdae174.png";
import person4 from "../assets/b64f988f077b50ffdab0afee9de4d701e4a9d5da.png";
import star from "../assets/8fab66317d6c35dc211a165dbc3735e15466ae68.png";

export default function TestimonialsSection() {
  const stars = (num) => {
    return new Array(num).fill(0).map((el, i) => {
      return <img src={star} alt={"star"} key={i} width='20px'/>;
    });
  }
  
  return (
    <div className='flex flex-wrap justify-between px-4 py-40' id='testimonials'>
      <div className='testimonial-block'>
        <div className="testimonial-header">
          <img src={person1} alt="person1" className='person'/>
          <h4>Jack James</h4>
        </div>
        <div className="desc mt-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, sint?</p>
          <div className="testimonial-footer mt-4">
            {stars(4)}
          </div>
        </div>
      </div>
      <div className='testimonial-block'>
        <div className="testimonial-header">
          <img src={person2} alt="person2" className='person'/>
          <h4>Ella Swan</h4>
        </div>
        <div className="desc mt-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, sint?</p>
          <div className="testimonial-footer mt-4">
            {stars(5)}
          </div>
        </div>
      </div>
      <div className='testimonial-block'>
        <div className="testimonial-header">
          <img src={person3} alt="person3" className='person'/>
          <h4>Jenna Jim</h4>
        </div>
        <div className="desc mt-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, sint?</p>
          <div className="testimonial-footer mt-4">
            {stars(5)}
          </div>
        </div>
      </div>
      <div className='testimonial-block'>
        <div className="testimonial-header">
          <img src={person4} alt="person4" className='person'/>
          <h4>X Kim</h4>
        </div>
        <div className="desc mt-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, sint?</p>
          <div className="testimonial-footer mt-4">
            {stars(3)}
          </div>
        </div>
      </div>
    </div>
  )
}
