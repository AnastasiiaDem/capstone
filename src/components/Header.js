import React from 'react'
import Navbar from "./Navbar";
import { ReactComponent as Logo } from '../assets/Logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <Navbar direction='row' gap='1rem' />
    </header>
  )
}
