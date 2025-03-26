

const Introduction = () => {
    return (
        <div className="md:flex text-center md:text-left justify-center gap-6 lg:gap-10 items-center">

            <div className="">
                <img className="w-60 h-60 object-cover mx-auto rounded-lg  md:rounded-bl-full md:rounded-tl-full md:rounded-br-full" src="/assets/20240513_231647.jpg" alt="Image" />
            </div>

            <div className="space-y-2 pb-4">
                <h3 className="text-lg font-semibold text-[#8f9182]">Hey There!</h3>
                <h2 className="text-2xl font-bold text-[#868874] font-serif">I'm Nithila Chowdhury</h2>
                <h1 className="text-4xl font-bold text-[#3A3F00]"><span className="font-light">Junior</span> Web Developer</h1>
                <p className="font-semibold italic text-gray-500 font-[Nunito]">Front-end developer, dedicated in building intuitive and responsive user interfaces</p>
                <button className="bg-[#d9dbcc] hover:bg-[#e0e0da] rounded p-2 font-lg font-semibold">Download Resume</button>
            </div>
        </div>
    );
};

export default Introduction;