import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Ola from '@/assets/ola.png';
import Seeka from '@/assets/seeka.png';
import NK from '@/assets/nk2.png';
import PE from '@/assets/pe1.webp';


const Brands = () => {
  const brands = [
    {
      name: 'OLA',
      slug: 'ola',
      description: 'Premium electric scooters with cutting-edge technology and sleek design',
      color: 'from-blue-500 to-cyan-400',
      bikeCount: 8,
      features: ['Smart Connectivity', 'Fast Charging', 'Long Range'],
      image: Ola,
    },
     {
      name: 'SEEKA',
      slug: 'seeka',
      description: 'Sustainable and efficient electric vehicles for everyday mobility',
      color: 'from-green-500 to-emerald-400',
      bikeCount: 10,
      features: ['Eco-Friendly', 'Affordable', 'Reliable'],
      image: Seeka,
    },
    {
      name: 'PE',
      slug: 'pe',
      description: 'Performance-focused eBikes for urban commuting and adventure',
      color: 'from-purple-500 to-pink-400',
      bikeCount: 6,
      features: ['High Performance', 'Lightweight', 'Durable Design'],
      image: PE,
    },
   
    {
      name: 'NK',
      slug: 'nk',
      description: 'Next-generation electric bikes with advanced features and style',
      color: 'from-orange-500 to-red-400',
      bikeCount: 7,
      features: ['Advanced Tech', 'Stylish Design', 'Premium Quality'],
      image: NK,
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground"> Explore Our Premium Brands</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover the perfect electric bike from our curated selection of top brands,
            each offering unique features and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.slug}
                className="group relative overflow-hidden rounded-3xl glass hover-lift transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8 flex flex-col h-full">
                  {/* Brand Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-br ${brand.color} shadow-lg`}
                      >
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {brand.name}
                        </h2>
                        <p className="text-muted-foreground">
                          {brand.bikeCount} Models Available
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-smooth" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-sm rounded-full glass border border-glass-border text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 🚲 Brand Image */}
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-64 object-cover mb-6 rounded-2xl transition-transform duration-300 group-hover:scale-105" />

                  {/* CTA Button */}
                  <Link to={`/brands/${brand.slug}`} className="mt-auto">
                    <Button
                      className={`w-full bg-gradient-to-r ${brand.color} hover:shadow-lg hover-scale transition-bounce text-white border-0`}
                    >
                      Explore {brand.name} Collection
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">What Makes Our Brands Special?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bike-card animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every bike is crafted with the finest materials and advanced engineering
              </p>
            </div>

            <div className="bike-card animate-slide-up animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-yellow rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                Leading technology integration for smart, connected riding experience
              </p>
            </div>

            <div className="bike-card animate-slide-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Future</h3>
              <p className="text-muted-foreground">
                Contributing to a cleaner environment with zero-emission transportation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
