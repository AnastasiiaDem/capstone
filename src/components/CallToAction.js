import React from 'react'
import {Link} from "react-router-dom";

export default function CallToAction() {
  
  const btnStyles = {
    background: '#f4ce14',
    padding: '0.8rem 1.3rem',
    borderRadius: '12px',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold'
  }
  
  return (
    <Link style={btnStyles} to='/reserve'>Reserve a Table</Link>
  )
}
