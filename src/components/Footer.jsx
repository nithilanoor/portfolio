import { IoPin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiLinkedinFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className="footer bg-[#cacac3] text-[#3A3F00] sm:footer-horizontal p-10">
      <aside>
        <img src="/assets/SignatureLogo.png" className="w-24" alt="Logo" />
        <p className="font-[Nunito]">
          Nithila Chowdhury
          <br />
          Junior Web Developer
        </p>
      </aside>
      <nav className="font-[Nunito]">
      
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 *:text-xl">
          <Link to={"https://www.linkedin.com/in/nithila-chowdhury-na207"}><p><RiLinkedinFill /></p></Link>
          <Link to={"mailto:nithilanoor@gmail.com"}><p><BiLogoGmail /></p></Link>
          <Link to={"https://github.com/nithilanoor"}><p><TbBrandGithubFilled /></p></Link>
        </div>
        <h6 className="footer-title flex items-center justify-center"><IoPin className="font-bold text-xl" />Sylhet, Bangladesh</h6>
      </nav>
    </footer>
  );
};

export default Footer;