import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={`h-52 w-full bg-gray-100 flex justify-evenly items-center text-4xl dark:bg-darkMode dark:border-t-2 dark:border-gray-400 dark:${'shadow-none'}`} style={{boxShadow: '0 -3px 15px -3px rgb(0 0 0 / .3)'}}>
      <a href="https://github.com/ahmadpht/Restaurant" title="Project Code"><ImGithub /></a>        
      <a href="https://www.linkedin.com/in/ahmad-pirhayati-7335aa2a1/" title="My Linkedin"><FaLinkedin /></a>
      <a href="https://www.themealdb.com/api.php" title="Api Source"><FaStaylinked /></a>
    </div>
  )
}

export default Footer
