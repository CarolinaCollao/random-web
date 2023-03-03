import React from 'react';
import './Page3.css'

const Page3 = () => {
  return (
    <div className='page3' id='page3'>
      <div className='container'>
        <div className='col-1'>
          <p>Excepteur sint occaecat</p>
          <p>Fugiat nulla pariatur</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className='button'>Ver más</button>
        </div>

        <div className='col-2'>
          <iframe width='570' height='320' src='https://www.youtube.com/watch?v=sw7463aYB5k' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
      </div>
    </div>
  )
}

export default Page3