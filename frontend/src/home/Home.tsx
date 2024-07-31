// to create template rafce+tab
import React from 'react'
import Navbar from '../components/homeComponents/Navbar'
import Footer from '../components/homeComponents/Footer'
import Carousel from '../components/homeComponents/Carousel'
import News from '../components/homeComponents/News'


function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <News/>
            <Footer/>
            
        </>

    )
}

export default Home