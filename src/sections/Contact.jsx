import React from "react"

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="w-screen flex flex-col items-center justify-center gap-8 bg-white"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(222, 223, 242, 0.6) 20%, rgba(255,255,255,0.6) 80%), url('/img/map.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="w-[85%] max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-8 my-24">
        {/* Left column: Contacto + Lema */}
        <div className="flex flex-col items-start gap-8 w-full md:w-[45%]">
          {/* Contacto box */}
          <div className="inset-shadow-sm w-full bg-white backdrop-blur-md text-black px-8 py-10 rounded-4xl shadow-lg">
            <h2 className="pb-8">
              <span className="text-2xl font-syne-medium">Contacto</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 text-sm">
              <div>
                <h4 className="font-outfit-medium mb-1">LATAM Offices</h4>
                <p className="font-outfit lining">
                  26 de Marzo 3438 Office 401
                  <br /> Montevideo, Uruguay
                </p>
              </div>
              <div>
                <h4 className="font-outfit-medium mb-1">Mail</h4>
                <a
                  href="mailto:info@pagly.com"
                  className="font-outfit text-[#115835] hover:underline"
                >
                  info@pagly.com
                </a>
              </div>
            </div>
          </div>

          {/* Lema debajo de Contacto */}
          <span className="text-4xl font-syne-medium text-black">
            Evolucionando junto a vos.
          </span>
        </div>

        {/* Right column: Formulario de Cola */}
        <form className="w-full md:w-[45%] bg-white backdrop-blur-md text-black px-8 py-10 rounded-4xl shadow-lg inset-shadow-sm">
          <span className="text-2xl font-syne-medium">Unite a la cola</span>
          <div className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer w-full py-3 rounded-full font-syne-medium shadow-md bg-[#115835] hover:opacity-90 inset-shadow-sm text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
