import React from 'react'
import greeksalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import bolognese from "../assets/bolognese.jpeg";
import lasagna from "../assets/lasagna.png";
import {Link} from "react-router-dom";

export default function MenuSection() {
  return (
    <>
      <div className='flex flex-wrap justify-between mx-4 py-4' id='menu'>
        <div className='card'>
          <img src={greeksalad} alt="Greek salad"/>
          <div className="desc">
            <h3>Greek salad</h3>
            <h4>$12.99</h4>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
              with
              crunchy garlic and rosemary croutons.</p>
            <div className="card-footer">
              <Link to="/reserve">Order</Link>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={bruchetta} alt="Bruchetta"/>
          <div className="desc">
            <h3>Bruchetta</h3>
            <h4>$5.99</h4>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and
              olive
              oil. </p>
            <div className="card-footer">
              <Link to="/reserve">Order</Link>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={bolognese} alt="Bolognese"/>
          <div className="desc">
            <h3>Bruchetta</h3>
            <h4>$5.99</h4>
            <p>Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli
              sauce.</p>
            <div className="card-footer">
              <Link to="/reserve">Order</Link>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={lasagna} alt="Lasagna"/>
          <div className="desc">
            <h3>Lemon Dessert</h3>
            <h4>$5.00</h4>
            <p> Layered with a rich meat sauce and a creamy parmesan white sauce, plus the perfect amount of mozzarella
              cheese!</p>
            <div className="card-footer">
              <Link to="/reserve">Order</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center p-4'>
        <Link className='text-[#495e57] cursor-pointer' to='/reserve'>View full menu!</Link>
      </div>
    </>
  )
}
