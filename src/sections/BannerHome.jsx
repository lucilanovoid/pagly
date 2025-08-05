import React from "react"

export const BannerHome = () => {
  return (
    <section className="relative pt-[60px] md:pt-[80px] md:h-screen overflow-hidden">
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
        <div className="w-full md:w-1/2 space-y-6 mt-30">
          <span className="visible sm:hidden md:visible font-syne-medium inline-block bg-[#5371e9] text-[#ededed] text-sm py-2 px-4 md:py-3 md:px-6 rounded-full">
            Redefinimos los pagos en LATAM
          </span>
          <div className="w-full md:w-[300px] lg:w-[500px]">
            <h2 className="text-5xl md:text-5xl lg:text-7xl font-syne-medium font-bold leading-tight">
              <span className="inline-block relative">
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                  Paga
                </span>
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
              </span>
              <span className="block md:inline ml-0 lg:ml-8 text-5xl md:text-7xl text-black">
                como quieres.
              </span>
              <br />
              <span className="inline-block relative md:mt-2">
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                  Vende
                </span>
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
              </span>
              <span className="block md:inline ml-0 lg:ml-8 text-5xl md:text-7xl">
                como nunca.
              </span>
            </h2>
          </div>
        </div>

        {/* === ILUSTRACIÓN + FORMA DETRÁS === */}
        <div className="mt-30">
          <div className="flex justify-center md:justify-end mb-6 md:mb-0 relative">
            {/* fondo detrás oculto en móvil */}
            <div className="w-40 h-40 md:w-60 md:h-60">
              <img
                src="/img/graphics.png"
                alt=""
                aria-hidden="true"
                className="absolute md:right-[-14vw] bottom-[-5rem] md:bottom-[-12rem]  transform md:-translate-y-1/2 -z-10 drop-shadow-lg"
              />
            </div>
            <div className="w-56 h-80 md:w-80 md:h-140 relative">
              <img
                src="/img/mobile.png"
                alt="man"
                className="relative bottom-10 md:left-[-15vw] z-10 h-full w-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
