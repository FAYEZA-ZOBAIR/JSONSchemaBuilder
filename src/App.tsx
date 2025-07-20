import React from 'react'
import SchemaBuilder from './components/SchemaBuilder'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050017] via-[#0a043b] to-[#1a1b3a] p-8 font-sans text-white">
      {/* Glassmorphism Header */}
      <Header />

      {/* Schema Builder Card Container */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6">
        <SchemaBuilder />
      </div>
    </div>
  )
}

export default App
