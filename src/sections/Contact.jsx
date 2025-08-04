import React from "react"

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="
          w-screen h-screen 
        bg-[url('/img/map.png')]
        bg-[length:100%_100%] bg-no-repeat bg-center
        flex items-center justify-between
        px-4 gap-[100px]
      "
    >
      <div className="w-[85%] max-w-[1600px] m-auto flex items-center justify-between">
        {/* Contacto box */}
        <div
          className="
          bg-[#115835] text-white
          px-12 py-16
          rounded-2xl shadow-lg
        
        "
        >
          <h2 className="pb-12">
            <span className="text-4xl font-syne-medium">Contacto</span>
          </h2>
          <div className="flex gap-20 text-sm">
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
            <div>
              <h4 className="font-syne-medium mb-1">Teléfono</h4>
              <p className="font-syne lining">+598 94 921 324</p>
            </div>
          </div>
        </div>

        {/* Texto a la derecha, centrado */}
        <span className="text-4xl text-[#115835] font-syne-medium w-[15vw]">
          Evolucionando junto a vos.
        </span>
      </div>
    </section>
  )
}
