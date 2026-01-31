import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import Skills from "../components/sections/Skills/Skills"
import Contact from "../components/sections/Contact"
import Footer from "../components/layout/Footer"
import ProjectSection from "../components/sections/Projects/ProjectSection"

function HomePage(){
    return (
        <div data-theme="lofi" className="min-h-screen flex flex-col selection:bg-primary selection:text-primary-content">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Skills />
                <ProjectSection />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;