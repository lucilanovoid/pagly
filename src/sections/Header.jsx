// Header.jsx
import React, { useState } from "react"
import { Icon } from "@shopify/polaris"
import { MenuIcon, XIcon } from "@shopify/polaris-icons"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="w-[85%] max-w-[1600px] m-auto pt-8 flex items-center justify-between">
        {/* === DESKTOP === */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div
            style={{ fontFamily: "Syne" }}
            className="font-syne-bold text-2xl text-[#115835]"
          >
            <img
              src="./img/Pagly_White-LOGO.svg"
              alt="Logo Pagly"
              className="h-20 w-auto"
            />
          </div>
          <a
            href="#contacto"
            className="relative group inline-block px-4 py-2"
            style={{ fontFamily: "Syne" }}
          >
            <span className=" font-syne-medium absolute -left-[-0.5rem] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-[#ededed] text-lg">
              &gt;
            </span>
            <span className="inline-block text-xl text-[#ededed] transform transition-transform duration-200 group-hover:translate-x-2 font-syne-medium">
              Contacto
            </span>
          </a>
        </div>

        {/* === MOBILE === */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div
            style={{ fontFamily: "Syne" }}
            className="text-2xl font-bold text-[#115835]"
          >
            Pagly
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none"
          >
            <Icon
              source={MenuIcon}
              color="base"
              accessibilityLabel="Abrir menú"
            />
          </button>
        </div>
      </div>

      {/* === PANEL MÓVIL === */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-[50vh] z-50 transform transition-all duration-500 ease-in-out
          ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }
        `}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-b-full" />
        <div className="relative z-10 w-full h-full overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none"
            >
              <Icon
                source={XIcon}
                color="base"
                accessibilityLabel="Cerrar menú"
              />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6 mt-6">
            <li>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-[#500E14] hover:underline"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black opacity-20 z-40 transition-opacity duration-500"
        />
      )}
    </header>
  )
}
