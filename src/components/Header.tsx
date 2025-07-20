import React from 'react'

const Header = () => {
  return (
    <header className="w-full backdrop-blur-md bg-white/10 border border-white/20 text-white py-4 px-8 shadow-xl rounded-2xl mb-8 flex justify-between items-center">
      {/* Left - Logo/Title */}
      <h1 className="text-xl font-extrabold tracking-tight">🧠 JSON Schema Builder</h1>

      {/* Right - Nav items */}
      <div className="flex items-center gap-6">
        <a
          href="https://fayfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white hover:text-blue-300 transition-colors"
        >
          My Portfolio
        </a>
        <span className="text-sm font-medium text-yellow-200">Made by Fayeza 😊</span>
      </div>
    </header>
  )
}

export default Header
