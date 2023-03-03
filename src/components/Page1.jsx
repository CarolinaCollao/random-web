import React from 'react';
import './Page1.css'
import retrato from '../images/retrato.png'

const Page1 = () => {
    return (
        <div className='page1' id='page1'>
        <div className='container'>
                <img src={retrato} alt='retrato' />
                <div className='col-2'>
                    <h2>Título</h2>
                    <span className='line'></span>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                    <button className='button'>Ver más</button>
                </div>
            </div>
        </div>
    )
}

export default Page1