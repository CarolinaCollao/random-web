import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className='container'>
            <ul>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>

                <li className='nav-item'>
                    <a href='/page1'>Página 1</a>
                </li>

                <li className='nav-item'>
                    <a href='/page2'>Página 2</a>
                </li>
                <li className='nav-item'>
                    <a href='/page3'>Página 3</a>
                </li>
            </ul>

            <div className='botton'>
                <span className='line'></span>
                <p>Creado por Nutrita, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer