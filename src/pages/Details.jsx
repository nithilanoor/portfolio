import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";


const Details = () => {

    const projects = useLoaderData();

    const { logo, projectName, projectMotto, projectDetails, liveLink, gitHubLink, tools, improvements, challenges } = projects;

    return (
        <div>
            <div className='mt-28 mb-6 md:mb-0'>
                <SectionTitle title={"Project"} subtitle={"know more"} />
            </div>

            <div className='hero min-h-screen w-11/12 mx-auto'>
                <div className='bg-[#fcfcfb] hover:bg-[#f1f1ee] border-l-8 border-b-8 border-[#cacac3] shadow-xl p-4 rounded-lg space-y-3 text-[#3A3F00]'>

                    {/* Image */}
                    <div>
                        <img className='mx-auto border rounded-lg object-contain bg-white border-[#cacac3] p-1 w-40 h-24' src={logo} alt={projectName} />
                    </div>

                    {/* Texts */}
                    <div className='mt-6'>
                        <h2 className='text-3xl font-bold'>{projectName}</h2>
                        <p className='font-[Nunito] italic text-gray-400 my-1'>{projectMotto}</p>
                        <p className='font-semibold text-gray-500'>Project : {projectDetails}</p>
                    </div>

                    {/* Improvements & Challenges */}
                    <div className='space-y-2'>
                        <div>
                            <h4 className='text-lg font-semibold'>Potential improvements and future plans for the project</h4>
                            {improvements.map((item) => <div key={item} className="">● {item}</div>)}
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold'>Challenges faced while developing the project
                            </h4>
                            {challenges.map((challenge) => <div key={challenge} className="">● {challenge}</div>)}
                        </div>
                    </div>

                    {/* tools */}
                    <div className="space-x-4">
                        <h4 className='text-lg font-semibold'>Tech Stack</h4>
                        {tools.map((tool) => <div key={tool} className="badge badge-outline">{tool}</div>)}
                    </div>

                    {/* Links */}
                    <div className='flex justify-start items-center gap-4 *:bg-[#d9dbcc] *:hover:bg-[#e0e0da] *:rounded *:p-1 *:px-4 *:font-semibold'>
                        <Link to={liveLink}><button className='flex justify-center items-center gap-1'><HiArrowTopRightOnSquare /> View Website</button></Link>
                        <Link to={gitHubLink}><button className='flex justify-center items-center gap-1'><HiArrowTopRightOnSquare /> Github</button></Link>
                    </div>

                </div>
            </div>
            <div className='mb-12 text-center'>
                <a href="/#projects"><button className='flex mx-auto justify-center items-center gap-2 text-center bg-[#d9dbcc] hover:bg-[#e0e0da] rounded p-2 font-lg font-semibold'><IoMdArrowRoundBack /> Back</button></a>
            </div>

            

            <Footer></Footer>

        </div>
    );
};

export default Details;