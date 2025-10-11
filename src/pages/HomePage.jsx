import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/sections/Hero"
import Contact from "../components/layout/sections/Contact"
import Footer from "../components/layout/Footer"

function HomePage(){
    return (
        <>
            <Navbar/>
            <Hero />
            <Contact />
            <Footer/>
        </>
    )
}

export default HomePage;