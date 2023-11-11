import React from "react";

const About = () => {
  return (
    <div
      name="sobre"
      className="w-full h-screen bg-gradient-to-b  from-gray-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mim
          </p>
        </div>
        <p className="text-xl mt-10">
          Sou desenvolvedor Full Stack (Web e Mobile). Tenho habilidades sólidas
          em desenvolvimento de aplicações web e mobile e estou sempre em busca
          de aprender novas tecnologias para me aperfeiçoar.
        </p>
        <br />
        <p className="text-xl ">
          Meus conhecimentos técnicos incluem: Proficiência em NodeJS(Backend),
          tendo desenvolvido aplicações escaláveis e performáticas utilizando
          Typescript. React Native (Mobile) ReactJS (Frontend) Utilizo
          diferentes tipos de bancos de dados, como MongoDB, MySQL e PostgreSQL.
        </p>

        <br />

        <p className="text-xl">
          Mas minhas habilidades vão além da técnica, sou comunicativo, criativo
          e tenho excelente capacidade de trabalhar em equipe. Sei me comunicar
          de forma eficaz com os colegas de equipe e colaboradores, garantindo
          que todos estejam trabalhando para alcançar os mesmos objetivos. Estou
          sempre em busca de novos desafios e oportunidades para ampliar meus
          conhecimentos e habilidades. Estou sempre em busca de novos desafios e
          oportunidades para ampliar meus conhecimentos e habilidades.
        </p>
      </div>
    </div>
  );
};

export default About;
