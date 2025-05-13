import React, { useState } from 'react';
import './ColorBox.css';
import { colors } from '../../mock-data';

const ColorBox = () => {
  const colorRandom = Math.floor(Math.random() * colors.length);
  const [bgColor, setBgColor ]= useState(colors[colorRandom])
  
  const changeColor = () => {
    setBgColor(colors[colorRandom])
    console.log('==11==', colorRandom)
    console.log('==12==', bgColor)
  }
  return (
    <span className="ColorBox" onClick={changeColor} style={{backgroundColor: bgColor}}></span>
  )
}
export default ColorBox
