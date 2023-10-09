import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

  return (
    <div className='home col-sm-12 col-md-12 col-lg-12 '>
      <h1>Bienvenido a la Pokedex </h1>
      <img className='imgHome' src='https://e1.pxfuel.com/desktop-wallpaper/243/111/desktop-wallpaper-6-pokemon-ash-ash-and-pikachu.jpg' alt="Pikachu" />
  </div>
  )
}
