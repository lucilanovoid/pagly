import React from "react"

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="w-screen flex flex-col items-center justify-center px-4 py-8 gap-8 bg-white"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(172,177,241,0.6) 20%, rgba(255,255,255,0.6) 80%), url('/img/map.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="w-[85%] max-w-[1600px] mx-auto flex flex-col items-center justify-center gap-8 my-24">
        {/* Texto de llamada arriba */}

        {/* Contacto box */}
        <div className="w-full md:w-auto bg-white backdrop-blur-md text-black px-8 py-12 rounded-4xl shadow-lg">
          <h2 className="pb-8">
            <span className="text-3xl md:text-4xl font-syne-medium">
              Contacto
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 text-sm">
            <div>
              <h4 className="font-syne-medium mb-1">LATAM Offices</h4>
              <p className="font-syne lining">
                26 de Marzo 3438 Office 401
                <br />
                Montevideo, Uruguay
              </p>
            </div>
            <div>
              <h4 className="font-syne-medium mb-1">Mail</h4>
              <p className="font-syne">info@pagly.com</p>
            </div>
          </div>
        </div>
        <span className="text-center max-w-sm text-4xl md:text-4xl font-syne-medium text-black">
          Evolucionando junto a vos.
        </span>
      </div>
    </section>
  )
}
