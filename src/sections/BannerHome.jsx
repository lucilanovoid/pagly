import React from "react"

export const BannerHome = () => {
  return (
    <section className="w-[85%] max-w-[1600px] h-[70vh] bg-transparent m-auto flex flex-col-reverse md:flex-row items-center justify-between my-20">
      {/* === TEXTO === */}
      <div className=" md:w-1/2 space-y-6">
        <span className="font-syne-medium inline-block bg-indigo-500 text-[#ededed] text-sm py-3 px-6 rounded-full">
          Redefinimos los pagos en LATAM
        </span>

        <div className="w-[500px]">
          <h2 className="text-5xl md:text-7xl font-syne-medium font-bold leading-tight relative">
            {/* “Paga” con degradado y underline */}
            <div className="inline-block relative">
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                Paga
              </span>
              <span className="absolute bottom-[-3px] left-0 w-full h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-5xl md:text-7xl font-syne-medium">
              como quieres.
            </span>
            <br />
            {/* “Vende” con degradado y underline */}
            <div className="inline-block relative mt-2">
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-[#B4C88E] to-[#115835] bg-clip-text text-transparent">
                Vende
              </span>
              <span className="absolute bottom-[-3px] left-0 w-full h-1 bg-gradient-to-r from-[#B4C88E] to-[#115835]" />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-5xl md:text-7xl font-syne-medium">
              como nunca.
            </span>
          </h2>
        </div>
      </div>

      {/* === ILUSTRACIÓN + FORMA DETRÁS === */}
      <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <div className="relative h-140">
          {/* 1) Forma degradada “arco” */}
          <div
            className="
              absolute inset-0
              h-[90%]
              rounded-t-[50%]
              rounded-b-md
             
              shape-grain-overlay
            "
          />
          {/* 2) Overlay de ruido para grain */}
          <div
            className="
                  absolute left-0 right-0 bottom-0
                  h-[85%]
                  bg-gradient-to-b from-[#B4C88E] to-[#115835]
                  rounded-t-[50%]
                  rounded-b-md                  
                "
          />
          {/* 3) Imagen del hombre por encima */}
          <img
            src="/img/man.png"
            alt="man"
            className="relative z-10 h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
