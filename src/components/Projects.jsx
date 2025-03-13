import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";


const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);



    return (
        <div>
            <SectionTitle title={"Projects"} subtitle={"My Work"} />

            <div className="grid bg-[#cacac3] grid-cols-1 gap-4 py-6 px-4 rounded-lg my-6">
                {
                    projects.map((project) => (
                        <div key={project.id} project={project} className="border border-[#cacac3] shadow-xl p-2 bg-[#f1f1ee] hover:bg-[#fcfcfb] w-full md:w-2/3 mx-auto rounded-lg text-center">
                            <div>
                                <img className="w-28 h-20 object-contain border rounded-lg mx-auto p-1 bg-white" src={project.logo} alt={project.projectName} />
                            </div>
                            <div className="my-2">
                                <h2 className="text-2xl font-bold text-[#3A3F00] font-serif">{project.projectName}</h2>
                                <h4 className="font-[Nunito] italic text-gray-400">"{project.projectMotto}"</h4>
                            </div>
                            <Link to={`/details/${project.id}`}><button className="bg-[#d9dbcc] hover:bg-[#e0e0da] rounded p-2 font-lg font-semibold mt-4 flex justify-center items-center mx-auto gap-1"><HiArrowTopRightOnSquare />View More</button></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Projects;