"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ShieldCheck, Leaf, Phone, Mail, MapPin } from "lucide-react";

// Product Data directly inside the file
const PRODUCTS = {
  acne: {
    id: "acne",
    name: "Anti-Pimple | Anti-Acne Skin Glow Formula",
    desc: "Specifically formulated to fight active breakouts and prevent new ones. 100% Herbal & Natural.",
    image: "/jar-image.jpg", 
    tag: "Best Seller"
  },
  glow: {
    id: "glow",
    name: "Golden Glow Herbal Pack",
    desc: "Restores radiance and deeply nourishes dull skin for a natural, healthy glow.",
    image: "/golden-glow.jpg",
    tag: "Radiance"
  },
  scar: {
    id: "scar",
    name: "Burn Scar Specialist",
    desc: "Advanced herbal care targeting burn marks and tough scarring.",
    image: "/burn-scar.jpg",
    tag: "Specialized"
  }
};

export default function Home() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | typeof PRODUCTS.acne>(null);

  // Simulated AI Scan Logic
  const handleScan = () => {
    setIsScanning(true);
    setScanResult(null);
    
    setTimeout(() => {
      setIsScanning(false);
      const results = [PRODUCTS.acne, PRODUCTS.glow, PRODUCTS.scar];
      const randomResult = results[Math.floor(Math.random() * results.length)];
      setScanResult(randomResult);
    }, 3000); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-paraherb-cream text-paraherb-text">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-paraherb-green tracking-wider font-[family-name:var(--font-playfair)]">
          Paraherb
        </div>
        <div className="hidden md:flex gap-6 text-paraherb-green font-medium">
          <a href="#how-it-works" className="hover:text-paraherb-gold transition-colors">How it Works</a>
          <a href="#products" className="hover:text-paraherb-gold transition-colors">Products</a>
          <a href="#contact" className="hover:text-paraherb-gold transition-colors">Contact</a>
        </div>
        <a href="tel:+919343414472" className="bg-paraherb-green text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md">
          Call Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto flex-grow">
        <span className="bg-paraherb-gold/20 text-paraherb-green px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide inline-block mb-6">
          100% Herbal & Natural
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-paraherb-green mb-6 font-[family-name:var(--font-playfair)] leading-tight">
          Herbal Care for Radiant Skin
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Scan your face with our smart AI to discover the perfect Paraherb formula for your unique skin concerns.
        </p>
        
        {/* The Scanner Button */}
        <button 
          onClick={handleScan}
          disabled={isScanning}
          className="bg-paraherb-green text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto disabled:opacity-70 disabled:hover:scale-100"
        >
          {isScanning ? (
            <span className="animate-pulse flex items-center gap-2">
              <Camera className="animate-spin" size={24} />
              Analyzing Skin...
            </span>
          ) : (
            <>
              <Camera size={24} />
              Start Free Face Scan
            </>
          )}
        </button>
      </section>

      {/* Results Section */}
      {scanResult && (
        <section id="products" className="py-12 px-4 max-w-4xl mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-paraherb-green/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 bg-paraherb-cream rounded-2xl p-6 flex justify-center items-center">
              <div className="relative w-48 h-48">
                <Image 
                  src={scanResult.image} 
                  alt={scanResult.name} 
                  fill 
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-paraherb-gold font-bold text-sm tracking-wider uppercase">{scanResult.tag}</span>
              <h2 className="text-3xl font-bold text-paraherb-green mt-2 mb-4 font-[family-name:var(--font-playfair)]">
                {scanResult.name}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{scanResult.desc}</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-paraherb-green text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md">
                  Buy Now (100g / 50ml)
                </button>
                <a href="https://wa.me/919343414472" target="_blank" rel="noopener noreferrer" className="border-2 border-paraherb-green text-paraherb-green px-8 py-3 rounded-full font-semibold hover:bg-paraherb-green hover:text-white transition-all flex items-center gap-2">
                  <Phone size={18} /> Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <section className="py-16 bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Leaf className="mx-auto text-paraherb-green mb-4" size={40} />
            <h3 className="text-xl font-bold text-paraherb-green mb-2">100% Herbal</h3>
            <p className="text-gray-500 text-sm">Free from Parabens & Harmful Chemicals</p>
          </div>
          <div className="p-6">
            <ShieldCheck className="mx-auto text-paraherb-green mb-4" size={40} />
            <h3 className="text-xl font-bold text-paraherb-green mb-2">Trusted Quality</h3>
            <p className="text-gray-500 text-sm">MSME: UDYAM-21-0012094</p>
          </div>
          <div className="p-6">
            <Phone className="mx-auto text-paraherb-green mb-4" size={40} />
            <h3 className="text-xl font-bold text-paraherb-green mb-2">Expert Support</h3>
            <p className="text-gray-500 text-sm">Call: +91 9343414472</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-paraherb-green text-white py-16 mt-auto">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)] text-paraherb-gold">Paraherb</h3>
            <p className="text-gray-300 leading-relaxed">Herbal Face Care for Radiant Skin. Anti-Pimple | Anti-Acne | Golden Glow.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <p className="flex items-center gap-3 text-gray-300 mb-3 hover:text-white transition-colors">
              <Phone size={18} /> +91 9343414472
            </p>
            <p className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Mail size={18} /> Rachnasherbalfacecare@gmail.com
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Visit Us</h4>
            <p className="flex items-start gap-3 text-gray-300 leading-relaxed">
              <MapPin size={18} className="mt-1 shrink-0" /> 
              M.No.21, Vrajdham Colony, Sain Mandir Ke Pas, Harsha
            </p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-16 border-t border-white/10 pt-8 px-4">
          <p className="mb-2">For external use only. Avoid direct contact with eyes. Store in a cool, dry place.</p>
          <p>&copy; {new Date().getFullYear()} Paraherb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
