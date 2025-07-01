import {Inter_Tight } from 'next/font/google';
const interTight = Inter_Tight({ subsets: ['latin'], weight: ['300', '700'] });
import Image from "next/image";
import bot from '../../../public/bot.png'
import header from '../../../public/header.png'
export default function Navbar(){
    return(
        <nav>
            <div className="  text-white  navbar   shadow-sm flex items-center justify-between px-5 w-full h-20 font-lato font-bold">
          <div className="flex">
            <span>
                <Image
            src={header}
            alt={"robot image short"}
            height={60}
            width={60}/>
            </span>
            <a className={`p-0 btn btn-ghost text-2xl animate-fade-in ${interTight.className} leading-none`}><span className="text-gray-500">Ai</span><span>Guru</span></a>
          </div>
         
            <div
               
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full animate-fade-in-scale bg-gray-500 coin-flip">
                <Image
                  height={40}
                  width={40}
                  alt="Tailwind CSS Navbar component"
                  src={bot}
                  className="rounded-full cursor-pointer"
                />
              </div>
            
          </div>
        
      </div>
        </nav>
    )
}