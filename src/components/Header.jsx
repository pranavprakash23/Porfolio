import { useState } from "react";
import { Link } from "react-scroll";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {motion} from "framer-motion";


const Header = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () =>{
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transition:{
                stiffness: 20,
                damping: 15 
            }
        },
        closed: {
            x: '-100%',
            transition:{
                stiffness: 20,
                damping: 15 
            }
        }
    }

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
        <div className="max-w-[1300px] mx-auto flex justify-between text-xl items-center px-12 h-20">

            <a href="#">Pranav</a>

            <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul>


            <div onClick={toggleNav} className="md:hidden z-30 text-grey-800">
                {nav? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

            <motion.div
                initial={false}
                animate={nav?'open':'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen z-40'>
                
                <ul className="space-y-8 mt-24 text-center ">
                    <li>
                        <Link to="home" onClick={closeNav} smooth={true} offset={50} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" onClick={closeNav}  smooth={true} offset={50} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="skills" onClick={closeNav}  smooth={true} offset={50} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to="portfolio" onClick={closeNav}  smooth={true} offset={50} duration={500}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="contact" onClick={closeNav}  smooth={true} offset={50} duration={500}>Contact</Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Header