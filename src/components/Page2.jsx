import React from 'react';
import './Page2.css';
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'


const Page2 = () => {
    return (
        <div className='page2' id='page1'>
            <div className='container'>
                <h2>Página 2</h2>
                <span className='line'></span>
                <div className='content'>

                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>"Etiam aliquet accumsan leo nec mattis. Fusce rutrum, urna a gravida pellentesque, metus diam condimentum sapien, at auctor augue tortor eget sem". </p>
                        <p><span>Gonzalo González</span></p>
                        <p>Sed pellentesque dapibus</p>
                    </div>

                    <div className='card'>
                        <img src={user2} alt='user2' />
                        <p>"Maecenas lobortis semper rutrum. Donec eget dui sapien. Maecenas porta, lorem sed ultricies porttitor, elit eros posuere augue, et bibendum erat eros ultricies felis".</p>
                        <p><span>Jimena Jimenéz</span></p>
                        <p>Lorem ipsum dolor sit amet"</p>
                    </div>

                    <div className='card'>
                        <img src={user3} alt='user3' />
                        <p>"Donec volutpat ex ligula, et fermentum eros interdum in. Vivamus id nibh eu risus condimentum consectetur sit amet in nisl, lorem sed ultricies porttitor".</p>
                        <p><span>Ramiro Ramírez</span></p>
                        <p>Consectetur adipiscing elit</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Page2