import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Battery, Gauge, Zap, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OlaS1Pro from '@/assets/ola_s1_pro.png';
import OlaS1Air from '@/assets/olaS1Air.jpg';
import Segun from '@/assets/segun.webp';
import NK from '@/assets/nk1.png'
import PE from '@/assets/pe1.webp'

const BrandDetails = () => {
  const { brandName } = useParams();
  const [selectedBike, setSelectedBike] = useState<any>(null);

  const brandData: Record<string, any> = {
    ola: {
      name: 'OLA',
      color: 'from-blue-500 to-cyan-400',
      description: 'Premium electric scooters with cutting-edge technology',
      bikes: [
        {
          id: 1,
          name: 'OLA S1 Pro',
          price: '₹1,29,999',
          image: OlaS1Pro, //  
          // <img src={OlaS1Pro} alt="Ola S1 Pro" />

          specs: { speed: '115 km/h', range: '181 km', battery: '3.97 kWh', charging: '6.5 hours' },
          features: ['Keyless', 'Reverse Mode', 'Hill Hold', 'Cruise Control'],
          rating: 4.8
        },
        {
          id: 2,
          name: 'OLA S1 Air',
          price: '₹84,999',
          image: OlaS1Air,
          specs: { speed: '85 km/h', range: '101 km', battery: '2.5 kWh', charging: '4.5 hours' },
          features: ['Lightweight', 'Smart Connect', 'LED Display', 'Anti-theft'],
          rating: 4.6
        }
      ]
    },
    pe: {
      name: 'PE',
      color: 'from-purple-500 to-pink-400',
      description: 'Performance-focused eBikes for urban adventures',
      bikes: [
        {
          id: 3,
          name: 'PE Urban+',
          price: '₹95,000',
          image: PE,
          specs: { speed: '75 km/h', range: '120 km', battery: '3.2 kWh', charging: '5 hours' },
          features: ['Urban Design', 'Fast Charging', 'Smart Display', 'GPS Tracking'],
          rating: 4.7
        }
      ]
    },
    seeka: {
      name: 'SEEKA',
      color: 'from-green-500 to-emerald-400',
      description: 'Sustainable electric mobility solutions',
      bikes: [
        {
          id: 4,
          name: 'SEEKA Eco',
          price: '₹68,000',
          image: Segun,
          specs: { speed: '65 km/h', range: '90 km', battery: '2.8 kWh', charging: '4 hours' },
          features: ['Eco-Friendly', 'Affordable', 'Reliable', 'Low Maintenance'],
          rating: 4.5
        }
      ]
    },
    nk: {
      name: 'NK',
      color: 'from-orange-500 to-red-400',
      description: 'Next-generation electric bikes with premium features',
      bikes: [
        {
          id: 5,
          name: 'NK Storm',
          price: '₹1,15,000',
          image: NK,
          specs: { speed: '105 km/h', range: '150 km', battery: '3.5 kWh', charging: '6 hours' },
          features: ['Premium Build', 'Advanced Tech', 'Sports Mode', 'Mobile App'],
          rating: 4.9
        }
      ]
    }
  };

  const brand = brandData[brandName?.toLowerCase() || ''];

  if (!brand) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Brand Not Found</h1>
          <Link to="/brands">
            <Button>Back to Brands</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-64 h-64 bg-gradient-to-r ${brand.color} opacity-20 rounded-full blur-3xl animate-pulse-glow`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/brands" className="inline-flex items-center text-primary hover:text-primary-glow transition-smooth mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Brands
          </Link>

          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                {brand.name}
              </span>
              <span className="text-foreground"> Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {brand.description}
            </p>
          </div>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.bikes.map((bike: any, index: number) => (
              <div
                key={bike.id}
                className="cursor-pointer rounded-3xl border border-border/60 bg-card p-5 text-card-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBike(bike)}
              >
                {/* Bike Image Placeholder in Grid(main) */}
                <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>


                {/* Bike Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">{bike.name}</h3>
                    <button className="text-muted-foreground hover:text-red-500 transition-smooth">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(bike.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({bike.rating})</span>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{bike.specs.speed}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Battery className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{bike.specs.range}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-foreground">{bike.price}</span>
                    <Button className={`bg-gradient-to-r ${brand.color} hover:shadow-lg hover-scale text-white border-0`}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bike Detail Modal */}
      <Dialog open={!!selectedBike} onOpenChange={() => setSelectedBike(null)}>
        <DialogContent className="max-w-4xl border-border bg-background text-foreground sm:rounded-2xl">
          {selectedBike && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedBike.name}</DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Bike Image */}
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                  <Zap className={`w-24 h-24 bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`} />
                </div>

                {/* Bike Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-foreground">{selectedBike.price}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(selectedBike.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
                              }`}
                          />
                        ))}
                        <span className="ml-2 text-muted-foreground">({selectedBike.rating})</span>
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-muted">
                      <TabsTrigger value="specs">Specifications</TabsTrigger>
                      <TabsTrigger value="features">Features</TabsTrigger>
                    </TabsList>

                    <TabsContent value="specs" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            <span className="font-medium">Top Speed</span>
                          </div>
                          <span className="text-2xl font-bold text-foreground">{selectedBike.specs.speed}</span>
                        </div>
                        <div className="glass rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Battery className="w-5 h-5 text-primary" />
                            <span className="font-medium">Range</span>
                          </div>
                          <span className="text-2xl font-bold text-foreground">{selectedBike.specs.range}</span>
                        </div>
                        <div className="glass rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="font-medium">Battery</span>
                          </div>
                          <span className="text-2xl font-bold text-foreground">{selectedBike.specs.battery}</span>
                        </div>
                        <div className="glass rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="font-medium">Charging</span>
                          </div>
                          <span className="text-2xl font-bold text-foreground">{selectedBike.specs.charging}</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="features" className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {selectedBike.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2 p-3 glass rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex space-x-4">
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BrandDetails;