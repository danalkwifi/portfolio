import { FaJava, FaJsSquare, FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"

export const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl text-purple-900">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-cyan-500" />
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
                <FaJsSquare  className="text-7xl text-teal-700" />
            </div>
            <div className="p-4">
                <FaJava  className="text-7xl text-red-500" />
            </div>
        </div>
    </div>
  )
}
