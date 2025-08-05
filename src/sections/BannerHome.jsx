import React from "react"

export const BannerHome = () => {
  return (
    <section
      id="home"
      className="relative pt-[60px] md:pt-[80px] md:h-screen overflow-hidden"
    >
      {/* fondo blanco */}
      <div className="absolute inset-0 bg-white" />

      {/* degradado con curva SVG */}
      <div className="absolute inset-0 overflow-hidden">
        {/* SVG de máscara */}
        <svg
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask
              id="mask"
              maskUnits="objectBoundingBox"
              maskContentUnits="objectBoundingBox"
            >
              <path
                d="M0,0 L1,0 L1,0.4375 Q0.5,0.4375 0,0.155 Z"
                fill="#ededed"
              />
            </mask>
          </defs>
        </svg>

        {/* gradiente enmascarado */}
        <div
          className="absolute inset-0 gradient-animation pointer-events-none"
          style={{
            mask: "url(#mask) no-repeat 0 0 / 100% 100%",
            WebkitMask: "url(#mask) no-repeat 0 0 / 100% 100%"
          }}
        />
      </div>

      {/* contenido encima */}
      <div className="relative z-10 w-[85%] max-w-[1600px] h-full mx-auto flex flex-col-reverse sm:flex-row items-center justify-between">
        {/* === TEXTO === */}
        <div className="w-full md:w-1/2 space-y-6 md:mt-30">
          <span className="w-[230px] block sm:hidden md:[display:block] font-outfit inline-block bg-[#5371e9] text-[#ededed] text-sm py-2 px-4 md:py-3 md:px-6 rounded-full">
            Lanzamiento diciembre 2025
          </span>
          <div className="w-full md:w-[300px] lg:w-[550px] mt-4">
            <h2 className="text-5xl md:text-5xl lg:text-7xl font-syne-medium font-bold leading-tight">
              <span className="inline-block relative">
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                  Pagan
                </span>
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
              </span>
              <span className="block md:inline ml-0 lg:ml-6 text-5xl md:text-7xl text-black">
                como quieren.
              </span>
              <br />
              <span className="inline-block relative md:mt-2">
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                  Vendés
                </span>
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
              </span>
              <span className="block md:inline ml-0 lg:ml-6 text-5xl md:text-7xl">
                como nunca.
              </span>
            </h2>
          </div>
          <span className=" text-xl block sm:hidden md:[display:block] font-outfit inline-block text-black opacity-50 text-sm">
            Redefinimos los pagos en LATAM
          </span>
        </div>

        {/* === ILUSTRACIÓN + FORMA DETRÁS === */}
        <div className="mt-40 md:mt-30">
          <div className="flex justify-center md:justify-end mb-6 md:mb-0 relative w-full">
            <div className="relative left-5 md:left-[15vw] bottom-[5vh]">
              <img
                src="/img/imgbanner.png"
                alt="banner"
                className="z-10 drop-shadow-lg max-w-none w-[400px] md:w-[800px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
