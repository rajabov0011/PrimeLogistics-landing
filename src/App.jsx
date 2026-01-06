import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Globe, Package, Clock, Shield, TrendingUp, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import dafTruck from './assets/daf-primelogistics.jpg';

export default function LogisticsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'freight', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: 'freight', message: '' });
      }, 3000);
    }
  };

  const services = [
    { 
      title: 'International Freight', 
      description: 'Seamless cross-border transportation across Europe, Asia, and beyond',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Express Delivery', 
      description: 'Time-critical shipments with guaranteed delivery windows',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Warehousing Solutions', 
      description: 'Secure storage facilities with inventory management systems',
      icon: <Package className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Fleet Management', 
      description: 'Modern Euro 6 compliant trucks with real-time GPS tracking',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Cargo Insurance', 
      description: 'Comprehensive protection for your valuable shipments',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      title: 'Supply Chain Optimization', 
      description: 'Data-driven insights to improve efficiency and reduce costs',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { value: '25+', label: 'Countries Served' },
    { value: '150+', label: 'Modern Vehicles' },
    { value: '99.8%', label: 'On-Time Delivery' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                <Truck className="text-white" size={28} />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Prime Logistics</span>
                <p className="text-xs text-gray-500">Logistics Solutions</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition font-medium">Services</button>
              <button onClick={() => scrollToSection('fleet')} className="text-gray-700 hover:text-blue-600 transition font-medium">Our Fleet</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">Services</button>
              <button onClick={() => scrollToSection('fleet')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">Our Fleet</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium">Get Quote</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                  🌍 Operating in 10+ Countries
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Your Trusted
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Prime Logistics
                </span>
                Partner
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Premium freight forwarding and logistics solutions with modern Euro 6 and 7 compliant fleet. Delivering excellence across international borders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center group">
                  Request Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
                </button>
                <button onClick={() => scrollToSection('services')} className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition">
                  Explore Services
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <img 
                  src={dafTruck}
                  alt="DAF Euro 7 Prime Logistics Truck" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-bold">DAF Euro 7 Fleet</p>
                  <p className="text-gray-200 text-sm mt-1">Environmentally Compliant • GPS Tracked • Temperature Controlled</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">Comprehensive Logistics Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From international freight forwarding to last-mile delivery, we provide end-to-end logistics services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <CheckCircle size={20} className="mr-2" />
                  <span>Available Now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={dafTruck} 
                  alt="DAF Euro 7 Prime Logistics Truck" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <p className="text-white text-3xl font-bold mb-2">DAF XF Euro 7</p>
                  <p className="text-gray-200 mb-4">Latest Generation Trucks</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <p className="text-cyan-400 font-bold text-lg">510 HP</p>
                      <p className="text-gray-300">Engine Power</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <p className="text-cyan-400 font-bold text-lg">24 Tons</p>
                      <p className="text-gray-300">Capacity</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <p className="text-cyan-400 font-bold text-lg">GPS</p>
                      <p className="text-gray-300">Real-Time</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <p className="text-cyan-400 font-bold text-lg">Euro 7</p>
                      <p className="text-gray-300">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Modern Fleet</span>
              <h2 className="text-4xl lg:text-5xl font-bold">Premium DAF Euro 7 Trucks</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our fleet consists of the latest DAF XF Euro 7 trucks, combining power, efficiency, and environmental responsibility. Each vehicle is equipped with advanced technology for your cargo's safety.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Euro 7 Emission Standards</h4>
                    <p className="text-gray-400">Environmentally friendly and compliant with EU regulations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Real-Time GPS Tracking</h4>
                    <p className="text-gray-400">Monitor your shipment 24/7 with live location updates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Temperature Control</h4>
                    <p className="text-gray-400">Climate-controlled transport for sensitive cargo</p>
                  </div>
                </div>
              </div>

              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 inline-flex items-center mt-6">
                Request Fleet Information <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">Get Your Custom Quote</h2>
                <p className="text-xl text-gray-600">
                  Ready to streamline your logistics? Contact our team for a customized solution tailored to your international shipping needs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Email</p>
                    <p className="text-gray-600">info@primelogistics.com</p>
                    <p className="text-gray-600">sales@primelogistics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">24/7 Support Hotline</p>
                    <p className="text-gray-600">0111-FREIGHT</p>
                    <p className="text-gray-600">+998 ** *** ** ** (UZ)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Headquarters</p>
                    <p className="text-gray-600">Tashkent</p>
                    <p className="text-gray-600">Uzbekistan, Central Asia</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="mr-3 flex-shrink-0" size={20} /> ISO 9001:2017 Certified</li>
                  <li className="flex items-center"><CheckCircle className="mr-3 flex-shrink-0" size={20} /> 99.8% On-Time Delivery Rate</li>
                  <li className="flex items-center"><CheckCircle className="mr-3 flex-shrink-0" size={20} /> Full Cargo Insurance Coverage</li>
                  <li className="flex items-center"><CheckCircle className="mr-3 flex-shrink-0" size={20} /> Real-Time Shipment Tracking</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="freight">International Freight</option>
                    <option value="express">Express Delivery</option>
                    <option value="warehousing">Warehousing Solutions</option>
                    <option value="fleet">Fleet Management</option>
                    <option value="insurance">Cargo Insurance</option>
                    <option value="optimization">Supply Chain Optimization</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your shipping requirements..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle className="mr-2" size={24} />
                      Quote Request Sent!
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </button>
                
                {formSubmitted && (
                  <div className="text-center text-green-600 font-semibold bg-green-50 p-4 rounded-xl">
                    Thank you! Our team will contact you within 24 hours.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <Truck className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Prime Logistics</span>
              </div>
              <p className="text-gray-400">Your trusted partner in international logistics since 2017.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer transition">International Freight</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Express Delivery</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Warehousing</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Fleet Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer transition">About Us</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Careers</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Partners</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">News</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer transition">LinkedIn</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Twitter</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Facebook</li>
                <li className="hover:text-cyan-400 cursor-pointer transition">Instagram</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 Prime Logistics Solutions. All rights reserved. | ISO 9001:2017 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
}