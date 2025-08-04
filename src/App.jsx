import { useState } from "react"
import "./App.css"
import React from "react"
import "./index.css"
import { BannerHome } from "./sections/BannerHome"
import { Header } from "./sections/Header"
import { Contact } from "./sections/Contact"

function App() {
  return (
    <>
      <div className="bg-[#ededed] w-screen">
        <Header />
        <BannerHome />
        <Contact />
      </div>
    </>
  )
}

export default App
