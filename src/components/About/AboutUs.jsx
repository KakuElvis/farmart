import React from 'react';
// import './About.css';

const About = () => (
    <>
        {/*<h1>About Farmart</h1>
         <p>
            Welcome to <strong>Farmart</strong> – your one-stop shop for all your farm fresh produce! 
            We are dedicated to connecting you with the freshest fruits, vegetables, and other farm products, 
            sourced directly from local farmers. Our mission is to make healthy, high-quality food accessible and convenient for everyone.
        </p>
        <p>
            At Farmart, we believe in supporting local agriculture and promoting sustainable practices. 
            Whether you're shopping for your family or your business, you can trust us to deliver the best nature has to offer, right to your doorstep.
        </p>
        <p>
            Thank you for choosing Farmart as your trusted source for farm fresh produce!
        </p> */}

        <section className='bg-cover bg-center  opacity-100 bg-green-800 p-20'>
            <div className='py-5 flex'>
                <h1 className='text-white text-5xl'>We are <strong>FarMart</strong></h1>
                
            </div>
            <p className='text-white'>
                Welcome to <strong>Farmart</strong> – your one-stop shop for all your farm fresh produce! 
                We are dedicated to connecting you with the freshest fruits, vegetables, and other farm products, 
                sourced directly from local farmers. Our mission is to make healthy, high-quality food accessible and convenient for everyone.
            </p>
        </section>

    </>
);

export default About;