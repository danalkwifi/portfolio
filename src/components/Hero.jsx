import profilePic from "../assets/danalkwifiProfile.jpg"
import { HERO_CONTENT } from "../constants"
import './customStyles.css'

const Hero = () => {
  return (
    <div className="area pb-4 lg:mb-36">
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <img src={profilePic} alt="Dana Al-Kwifi" className="border order-stone-900 rounded-3xl" /> 
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className="pb-3 text-4xl tracking-tighter lg:text-8xl text-purple-900">Dana Al-Kwifi</h2>
                    <span className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">
                        Web Developer
                    </span>
                    <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-stone-500">
                        {HERO_CONTENT}
                    </p>
                    <a href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-4 text-sm text-white mb-10 relative z-20">Download Resume</a>
                </div>
            </div>
            </div>
        
    </div>
  )
}

export default Hero