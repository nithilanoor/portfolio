import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="w-11/12 mx-auto">
                {/* Introduction */}
                <section id="introduction" className="mt-32 mb-18">
                    <Introduction></Introduction>
                </section>

                {/* About me*/}
                <section id="aboutMe" className="my-12">
                    <AboutMe></AboutMe>
                </section>

                {/* Skills*/}
                <section id="skills" className="my-12">
                    <Skills></Skills>
                </section>

                {/* Projects*/}
                <section id="projects" className="my-12">
                    <Projects></Projects>
                </section>

                {/* Contacts*/}
                <section id="contacts" className="my-12">
                    <Contact></Contact>
                </section>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default Home;