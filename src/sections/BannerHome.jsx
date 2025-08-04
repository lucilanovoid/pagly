import React from "react"

export const BannerHome = () => {
  return (
    <section className="relative pt-[80px] h-screen overflow-hidden">
      {/* fondo blanco */}
      <div className="absolute inset-0 bg-white" />

      {/* degradado con curva SVG */}
      <div className="absolute inset-0 overflow-hidden">
        {/* SVG de máscara a todo tamaño */}
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
                d="M0,0 L1,0 L1,0.4375 Q0.5,0.4375 0,0.125 Z"
                fill="#ededed"
              />
            </mask>
          </defs>
        </svg>

        {/* Gradiente animado enmascarado */}
        <div
          className="absolute inset-0 gradient-animation pointer-events-none"
          style={{
            mask: "url(#mask) no-repeat 0 0 / 100% 100%",
            WebkitMask: "url(#mask) no-repeat 0 0 / 100% 100%"
          }}
        />
      </div>

      {/* contenido encima */}
      <div className="relative z-10 w-[85%] max-w-[1600px] h-full m-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* === TEXTO === */}
        <div className="md:w-1/2 space-y-6">
          <span className="font-syne-medium inline-block bg-indigo-500 text-[#ededed] text-sm py-3 px-6 rounded-full">
            Redefinimos los pagos en LATAM
          </span>
          <div className="w-[500px]">
            <h2 className="text-5xl md:text-7xl font-syne-medium font-bold leading-tight">
              <span className="inline-block relative">
                <span className="text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                  Paga
                </span>
                <span className="absolute bottom-[-3px] left-0 w-full h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
              </span>
              <span className="ml-8 text-7xl text-black">como quieres.</span>
              <br />
              <span className="inline-block relative mt-2">
                <span className="bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent text-7xl">
                  Vende
                </span>
                <span className="absolute bottom-[-3px] left-0 w-full h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
              </span>
              <span className="ml-8 text-7xl">como nunca.</span>
            </h2>
          </div>
        </div>

        {/* === ILUSTRACIÓN + FORMA DETRÁS === */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative h-140">
            <img
              src="/img/man.png"
              alt="man"
              className="relative z-10 h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
