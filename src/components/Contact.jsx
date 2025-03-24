import SectionTitle from "./SectionTitle";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";


const Contact = () => {

    const contacts = [
        {
            "id": 1,
            "logo": <FaLinkedin />,
            "link": "https://www.linkedin.com/in/nithila-chowdhury-na207",
            "contactName": "Linkedin",
        },
        {
            "id": 2,
            "logo": <MdEmail />,
            "link": "mailto:nithilanoor@gmail.com",
            "contactName": "Gmail",
        },
        {
            "id": 3,
            "logo": <FaSquareGithub />,
            "link": "https://github.com/nithilanoor",
            "contactName": "Github",
        },
    ]

    return (
        <div>
            <SectionTitle title={"Contacts"} subtitle={"Reach Out to Me"} />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-6">
                {contacts.map(contact => (
                    <div key={contact.id} className="border border-[#dbdbd5] rounded-lg w-full bg-gray-100 hover:shadow-xl hover:bg-white mx-auto text-center p-4 text-[#3A3F00]">
                        <Link to={contact.link}>
                            <p className="text-5xl flex justify-center">{contact.logo}</p>
                            <h3 className="flex  justify-center items-center gap-1 text-xl font-[Nunito] font-bold mt-2"><HiArrowTopRightOnSquare /> {contact.contactName}</h3>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Contact;