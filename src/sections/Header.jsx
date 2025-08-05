// Header.jsx
import React from "react"

export const Header = () => (
  <header className="absolute top-0 left-0 w-full z-20">
    <div className="w-[85%] max-w-[1600px] m-auto pt-8 flex items-center justify-between">
      {/* Logo */}
      <div
        style={{ fontFamily: "Syne" }}
        className="font-syne-bold text-2xl text-[#115835]"
      >
        <img
          src="./img/Pagly_White-LOGO.svg"
          alt="Logo Pagly"
          className="h-18 w-auto"
        />
      </div>

      {/* Enlace “Contacto” */}
      <a
        href="#contacto"
        className="relative group inline-block px-4 py-2"
        style={{ fontFamily: "Syne" }}
      >
        <span className="font-syne-medium absolute -left-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-[#ededed] text-lg">
          &gt;
        </span>
        <span className="inline-block text-xl text-[#ededed] transform transition-transform duration-200 group-hover:translate-x-2 font-syne-medium">
          Contacto
        </span>
      </a>
    </div>
  </header>
)
