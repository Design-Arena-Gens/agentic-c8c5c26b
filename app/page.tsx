'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '917013806196'
    const message = `Hi, I'm interested in Bhogapuram plots.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested Plot Size: ${formData.plotSize}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+917013806196'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Bhogapuram Plots</h1>
          </div>
          <button
            onClick={handleCall}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
          >
            📞 Call Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 rounded-full px-6 py-2 mb-6">
              <span className="text-emerald-300 font-semibold">🔥 Limited Time Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Smart Investment</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Exclusive Gated Community Plots in Bhogapuram on NH-16
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <div className="text-3xl font-bold text-white">₹18,500</div>
                <div className="text-slate-300 text-sm">Per Sq. Yard</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <div className="text-3xl font-bold text-white">200-600</div>
                <div className="text-slate-300 text-sm">Sq. Yards Plots</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <div className="text-3xl font-bold text-white">VMRDA</div>
                <div className="text-slate-300 text-sm">Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Project Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '✔️', title: 'VMRDA Approved Layout', desc: 'Fully authorized and certified' },
              { icon: '🛣️', title: '6-Lane Highway', desc: 'Prime location on NH-16 (AH-45)' },
              { icon: '🌳', title: 'Avenue Plantations', desc: 'Beautiful greenery on all roads' },
              { icon: '⚡', title: '24x7 Electricity', desc: 'Uninterrupted power supply' },
              { icon: '🔒', title: 'Fully Secured', desc: 'Complete compound wall protection' },
              { icon: '🏘️', title: 'Gated Community', desc: 'Premium lifestyle amenities' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Prime Location Advantages</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🚗', text: 'Situated Directly on NH-16 (AH-45)' },
              { icon: '🌇', text: 'Very Close to 900-Acre Miracle Software Park & Gum City' },
              { icon: '✈️', text: 'Near Greenfield International Airport, Bhogapuram' },
              { icon: '🏙', text: 'Just 40 Minutes Drive to Visakhapatnam' },
              { icon: '🕒', text: 'Only 25 Minutes from Madhurawada' }
            ].map((loc, idx) => (
              <div key={idx} className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-lg p-6 flex items-start gap-4 hover:border-emerald-400 transition-all duration-300">
                <div className="text-3xl flex-shrink-0">{loc.icon}</div>
                <p className="text-lg text-white font-medium">{loc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-slate-300 text-lg">Book your site visit or request more information</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Interested Plot Size *</label>
                  <select
                    required
                    value={formData.plotSize}
                    onChange={(e) => setFormData({...formData, plotSize: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="">Select plot size</option>
                    <option value="200 Sq. Yards">200 Sq. Yards</option>
                    <option value="300 Sq. Yards">300 Sq. Yards</option>
                    <option value="400 Sq. Yards">400 Sq. Yards</option>
                    <option value="500 Sq. Yards">500 Sq. Yards</option>
                    <option value="600 Sq. Yards">600 Sq. Yards</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  💬 Contact via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  📞 Call: 7013806196
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-white mb-2">Bhogapuram Premium Plots</h4>
            <p className="text-slate-400">Your Gateway to Smart Investment</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="tel:+917013806196" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              📞 7013806196
            </a>
            <a href={`https://wa.me/917013806196`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              💬 WhatsApp
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Bhogapuram Plots. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
