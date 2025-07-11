import Cards from "./Cards";
import Hero from "./Hero";
import { Lato} from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Main() {
  return (
    <div className="flex flex-col gap-1 min-h-screen w-full  ">
      <section className="h-[75vh] w-full pt-10 md:pt-0  ">
        <Hero/>
      </section>

      <section>
        <div className="min-h-screen w-full  flex flex-col justify-center">
          <div className={`${lato.className} pb-5 font-semibold text-7xl flex justify-center items-center text-[#cedee6]`}>Services</div>
          <Cards/>
        </div>
      </section>
    </div>
  );
}
