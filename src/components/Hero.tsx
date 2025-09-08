import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra tu Compañero Perfecto
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Cachorros adorables esperando un hogar lleno de amor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <span>Ver Cachorros</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Sobre Nosotros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;