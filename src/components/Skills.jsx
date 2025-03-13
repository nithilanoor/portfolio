import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { GoCodeReview } from "react-icons/go";
import SectionTitle from "./SectionTitle";

const Skills = () => {

    const data = [
        {
            "id": 1,
            "skill": <GoCodeReview />,
            "skillName": "Frontend"
        },
        {
            "id": 2,
            "skill": <IoLogoHtml5 />,
            "skillName": "HTML"
        },
        {
            "id": 3,
            "skill": <IoLogoCss3 />,
            "skillName": "CSS"
        },
        {
            "id": 4,
            "skill": <TbBrandJavascript />,
            "skillName": "JavaScript"
        },
        {
            "id": 5,
            "skill": <IoLogoReact />,
            "skillName": "React"
        },
        {
            "id": 6,
            "skill": <SiTailwindcss />,
            "skillName": "Tailwind CSS"
        }
    ]


    return (
        <div>
            <SectionTitle title={"Capability"} subtitle={"Development Skills"} />
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-6">
                {data.map(item => (
                    <div key={item.id} className="border rounded-lg w-56 lg:w-58 bg-[#e7e7e2] hover:bg-[#f1f1ee] hover:shadow-xl mx-auto text-center p-4 text-[#3A3F00]">
                        <p className="text-5xl flex justify-center">{item.skill}</p>
                        <h3 className="text-xl font-bold mt-2">{item.skillName}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;