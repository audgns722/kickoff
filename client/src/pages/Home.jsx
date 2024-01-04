import React from 'react'
import Nav from '../components/layout/Nav';
import Aside from '../components/layout/Aside';
import MainCont from '../components/main/MainCont';
import Footer from '../components/layout/Footer';


const Home = () => {

    return (
        <>
            <Nav />
            <Aside />
            <MainCont />
            <Footer />
        </>
    )
}

export default Home