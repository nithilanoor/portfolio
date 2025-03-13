import SectionTitle from "./SectionTitle";


const AboutMe = () => {
    return (
        <div>
            <SectionTitle subtitle={"Introduction"} title={"Overview"} />
            <div className="border-l-8 border-b-8 shadow-xl border-[#e0e0da] bg-[#e7e7e2] rounded my-6 p-5 w-full md:w-4/5 mx-auto">
            <hr className="w-12 text-[#bbbbb3] mb-4" />
                <h4 className="font-thin text-gray-500 font-[Nunito]">Hi there! It's Nithila. I’m a Web Developer with a strong interest in building modern, responsive, and user-friendly websites. While I’m still growing my experience in this field, I’m confident in my skills with React.js, React Router, and Tailwind CSS, and I’m eager to help you bring your ideas to life. <br /> With a background in HTML, CSS, JavaScript, and React, I enjoy building dynamic and visually appealing front-end solutions. I’m also working with Tailwind CSS to craft clean and efficient UI designs. Right now, I’m diving deeper into web development to enhance my full-stack development skills. I’m dedicated to building user-friendly websites and web applications that provide seamless user experiences.</h4>
            </div>
        </div>
    );
};

export default AboutMe;