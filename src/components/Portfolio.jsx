import React from "react";

import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoURL:
        "https://user-images.githubusercontent.com/83254191/276341236-e0fcd992-9c9e-4129-94c0-ae417c769d2b.jpg",
      codeURL: "https://github.com/darkbecker4-97/AppHotelReactNative.git",
    },
    {
      id: 2,
      src: installNode,
      demoURL: "https://portfolioiagobecker.netlify.app",
      codeURL: "https://github.com/darkbecker4-97/Potfolio.git",
    },
    {
      id: 3,
      src: navbar,
      demoURL: "https://github.com/darkbecker4-97/Bootstrap2.0.git",
      codeURL: "https://github.com/darkbecker4-97/Bootstrap2.0.git",
    },
    {
      id: 4,
      src: reactParallax,
      demoURL: "https://tourmaline-cassata-fe6185.netlify.app",
      codeURL: "https://github.com/darkbecker4-97/finance-control.git",
    },
    {
      id: 5,
      src: reactSmooth,
      demoURL: "https://github.com/darkbecker4-97/ServicosMDark.git",
      codeURL: "https://github.com/darkbecker4-97/ServicosMDark.git",
    },
    {
      id: 6,
      src: reactWeather,
      demoURL: "https://github.com/darkbecker4-97/LandingPageProt.git",
      codeURL: "https://github.com/darkbecker4-97/LandingPageProt.git",
    },
  ];

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfólio
          </p>
          <p className="py-6">Confira alguns dos meus trabalhos aqui</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoURL, codeURL }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "200px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => demoURL && openLinkInNewTab(demoURL)}
                >
                  Demonstração
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => codeURL && openLinkInNewTab(codeURL)}
                >
                  Código
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
