import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-700"
      style={{ paddingTop: "20vh" }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Eu sou Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Sou desenvolvedor web Full Stack. Tenho habilidades sólidas em
            desenvolvimento de aplicações web e estou sempre em busca de
            aprender novas tecnologias para me aperfeiçoar. Atualmente, adoro
            trabalhar em aplicações web usando Node.js | React.js | Nest.js |
            Javascript | Typescript | MySQL | MongoDB | Tailwind
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-950 cursor-pointer">
              Portfólio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="meu perfil"
            className="rounded-2xl mx-auto w-2/3 md:w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
