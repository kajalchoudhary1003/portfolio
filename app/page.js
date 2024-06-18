"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Rampart_One } from "next/font/google";
import Typewriter from "typewriter-effect";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const pop = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const ram = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* navigation */}
      <div className={`${pop.className}`}>
        <nav className=" bg-primary mx-auto lg:px-10 flex flex-row justify-between pb-2">
          <div className="name">
            <h3
              className={`${ram.className} kajal text-light lg:text-4xl md:text-2xl ml-2 cursor-pointer hover:skew-y-2`}
            >
              Kajal Choudhary
            </h3>
          </div>
          <div className="nav-items flex flex-row">
            <h5
              className={`${pop.className} cursor-pointer lg:mx-5 md:mx-2 pt-2 text-light lg:text-xl md:text-lg hover:text-dark`}
            >
              About
            </h5>
            <h5
              className={`${pop.className} cursor-pointer lg:mx-5 md:mx-2 pt-2 text-light lg:text-xl md:text-lg hover:text-dark`}
            >
              Projects
            </h5>
            <h5
              className={`${pop.className} cursor-pointer lg:mx-5 md:mx-2 pt-2 text-light lg:text-xl md:text-lg hover:text-dark`}
            >
              Skills
            </h5>
            <h5
              className={`${pop.className} cursor-pointer lg:mx-5 md:mx-2 pt-2 text-light lg:text-xl md:text-lg hover:text-dark`}
            >
              Blogs
            </h5>
          </div>
        </nav>
      </div>

      {/* second div */}
      <div>
        {/* hi section */}
        <section className="flex md:flex-row md:justify-between bg-primary xs:hidden md:flex lg:pl-5 md:pl-0">
          {/* typewriter */}
          <div className="w-1/2 flex flex-col justify-center lg:ml-8 md:ml-3 md:pt-4 lg:pt-0">
            <h1
              className={`${pop.className} lg:text-4xl xl:text-5xl  md:text-3xl text-dark`}
            >
              Hi, 👋
            </h1>
            <h1
              className={`${pop.className} lg:text-4xl xl:text-5xl  md:text-3xl text-dark`}
            >
              I am <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r  from-secondary via-pink-500 to-dark font-extrabold">Kajal Choudhary</span>
            </h1>
            <h1
              className={`${pop.className} lg:text-4xl xl:text-5xl  md:text-3xl text-dark`}
            >
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "MERN Developer",
                    "Designer",
                    "Blogger",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            {/* icons */}
            <div className="flex flex-row mt-4">
              {/* github icon */}
              <svg
                className="cursor-pointer fill-dark drop hover:fill-light hover:scale-105 hidden md:block md:mr-2 lg:mr-3 md:h-9 md:w-9 lg:h-12 lg:w-12"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>

              {/* linkedin icon */}
              <svg
                className="cursor-pointer fill-dark drop hover:fill-light hover:scale-105 hidden md:block md:mx-2 lg:mx-3 pt-1 md:h-9 md:w-9 lg:h-12 lg:w-12"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>

              {/* twitter icon */}
              <svg
                className="cursor-pointer fill-dark drop hover:fill-light hover:scale-105 hidden md:block md:mx-2 md:h-9 md:w-9 lg:h-12 lg:w-12 lg:mx-3 pt-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>

              {/* medium icon */}
              <svg
                className="cursor-pointer fill-dark drop hover:fill-light hover:scale-105 hidden md:block md:mx-2 md:h-11 md:w-11 lg:h-14 lg:w-14 lg:mx-3 "
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
              </svg>

              {/* instagram icon */}
              <svg
                className="cursor-pointer fill-dark drop hover:fill-light hover:scale-105 hidden md:mx-2 md:block md:h-10 md:w-10 lg:h-12 lg:w-12 lg:mx-3 pt-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="45"
                height="45"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </div>
            {/* button */}
            <Button
              className={`${pop.className} border-solid border-2 border-dark text-light hover:bg-transparent hover:shadow-sm hover:shadow-dark lg:w-52 md:w-36 md:h-8 lg:h-10 rounded-full resume hover:font-semibold  mt-5 lg:text-xl md:text-lg`}
            >
              Resume
            </Button>
          </div>

          {/* gif */}
          <div className="w-1/2 flex md:justify-end">
            <Image
              src={`/robot.gif`}
              alt="gif should be here"
              width={200}
              height={200}
              className="md:w-3/5 lg:mr-24 object-contain"
            />
          </div>
        </section>
      </div>

      {/* wave */}
      <div className="relative bg-primary">
        <svg viewBox="0 0 500 200" className="absolute inset-0 w-full ">
          <path
            d="M 0 10 C 147 79 345 -5 500 27 L 500 0 L 0 0"
            className="fill-secondary"
          ></path>
          <path
            d="M 0 6 C 157 74 334 -10 500 23 L 500 0 L 0 0"
            className="fill-primary"
          ></path>
        </svg>

        <div className="relative z-10 xl:p-6 lg:py-2 ">
          <p
            className={`${ram.className} text-center text-light xl:text-3xl md:text-2xl uppercase`}
          >
            Projects
          </p>
          <div className="flex flex-row justify-center">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="animate-bounce mt-4 xl:h-14 xl:w-14 lg:w-10 lg:h-10 md:h-8 md:w-8"
            />
          </div>
        </div>
      </div>
      <Projects/>
      <Skills/>
    </>
  );
}
