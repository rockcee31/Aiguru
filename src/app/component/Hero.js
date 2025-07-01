import Image from "next/image";
import { Lato, Inter_Tight } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["300", "700"] });
import main from "../../../public/main.png";
export default function Hero(){
    return(
        <div className="h-full relative max-w-screen-xl flex flex-col items-center md:flex-row gap-2 mx-auto">
          <div className="md:w-1/2  text-white flex items-center md:pl-5  ">
            {/* 1st half */}
            <div className="main   mb-20 ">
              <div className=" mb-5 ">
                <div className="font-bold text-center  flex items-center justify-center  text-orange-400">
                  <span
                    className={`text-4xl md:text-7xl   inline-block ${lato.className}`}
                  >
                    AiGuru
                  </span>
                  <span className="flex items-end">
                  <span 
                    className={`lg:text-md md:text-sm sm:text-[20px]   relative top-2 flex flex-col justify-end gap-0 leading-none ${lato.className} text-[#A0AEC0] typewriter`}
                  >
                    
                    <span className="p-0 ">Your Smart Learning </span>
                    <span className="p-0 ">Companion</span>

                  </span>
                  </span>
                </div>
              </div>

              <div className="md:pl-20 flex flex-col justify-center items-center">
                <h2
                  className={`font-bold  ${lato.className}  md:text-xl text-xs w-3/4 md:w-full text-center text-[#D9E3F0]`}
                >
                  AI Guru is an intelligent assistant designed to make your
                  learning more personalized, interactive, and effective.
                </h2>
                <div className="flex justify-center mt-5">
                  <button className="btn bg-orange-400 text-[#D9E3F0] border-orange-400 text-center ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mr-22 md:mr-0 flex items-center justify-center">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              <Image
                src={main}
                alt="robot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
    )
}