import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Zap, 
  Battery, 
  Gauge, 
  Shield, 
  Play, 
  PlayIcon, 
  PauseIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import Ola from "@/assets/ola.jpg";
import heroVideo from "@/assets/hero-bg.mp4";
import pic1 from "@/assets/models/pic1.jpg";
import pic2 from "@/assets/models/pic2.jpg";
import pic3 from "@/assets/models/pic3.jpg";
import pic4 from "@/assets/models/pic4.jpg";
import pic6 from "@/assets/models/pic6.jpg";

const slides = [
  { id: 1, image: pic1, title: "Mountain Serenity", description: "Breathtaking alpine landscapes" },
  { id: 2, image: pic2, title: "Neon Dreams", description: "Futuristic cityscapes" },
  { id: 3, image: pic3, title: "Cosmic Wonder", description: "Ethereal galaxy views" },
  { id: 4, image: pic4, title: "Lavender Fields", description: "Romantic Provence sunset" },
  { id: 4, image: pic6, title: "Lavender Fields", description: "Romantic Provence sunset" },
];

// --- Slideshow Component ---
export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) return;
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50); 
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative w-full bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Image Container */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-2xl bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
          
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 max-w-2xl">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-2 italic tracking-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </div>

          <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
            <Button 
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-sm border-0 text-white transition-all"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-sm border-0 text-white transition-all"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Thumbnail & Progress Bar Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-14 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                  index === currentSlide ? "border-primary scale-110 shadow-lg" : "border-transparent opacity-40 hover:opacity-100"
                }`}
              >
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex-1 flex items-center gap-4 w-full max-w-2xl">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full hover:bg-primary/10"
            >
              {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
            </Button>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-100 ease-linear" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest min-w-[100px] text-right">
              {slides[currentSlide].title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Home Component ---
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isShowingVideo, setIsShowingVideo] = useState(false);

  const handleVideoPlay = () => {
    setIsShowingVideo(true);
    if (videoRef.current) videoRef.current.play();
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Eco-Friendly", description: "Zero emissions, 100% electric power" },
    { icon: <Battery className="w-8 h-8" />, title: "Long Range", description: "Up to 120km range with fast charging" },
    { icon: <Gauge className="w-8 h-8" />, title: "High Performance", description: "Powerful motors up to 80 km/h" },
    { icon: <Shield className="w-8 h-8" />, title: "Advanced Safety", description: "Smart braking and LED lighting" },
  ];

  const stats = [
    { icon: <Battery className="w-6 h-6" />, value: "120km", label: "Range" },
    { icon: <Gauge className="w-6 h-6" />, value: "80 km/h", label: "Top Speed" },
    { icon: <Shield className="w-6 h-6" />, value: "5 Years", label: "Warranty" },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                The Future is Electric
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
                <span className="text-electric block">Pardeshi</span>
                <span className="text-foreground">eBikes</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Experience the revolution of sustainable mobility with cutting-edge electric technology and unmatched style.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/brands">
                  <Button className="bg-gradient-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-primary/20">Explore Brands</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="glass-hover text-lg px-10 py-6 rounded-2xl border-primary/20">Contact Us</Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 p-6 bg-card/50 backdrop-blur-md rounded-3xl border border-white/5">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />
              <img src={Ola} alt="Pardeshi Electric Bike" className="relative w-full h-auto rounded-[2rem] shadow-glow z-10 object-cover" />
              <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 z-20 shadow-2xl">
                <div className="text-xs uppercase font-bold text-muted-foreground mb-1">Starting from</div>
                <div className="text-3xl font-black text-primary">₹89,999</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Slideshow />

      {/* JOY Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience <span className="text-electric">JOY e-Bikes</span></h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">Adventure-ready, powerful, and designed for absolute freedom on the road.</p>
          <div className="relative h-[400px] md:h-[600px] w-full flex justify-center items-center gap-4 md:gap-8">
            <motion.img src="/images/joy1.jpg" alt="JOY Bike Left" className="w-1/3 aspect-[4/5] rounded-3xl shadow-xl object-cover" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
            <motion.img src="/images/joy2.jpg" alt="JOY Bike Center" className="w-2/5 aspect-[4/5] rounded-[2.5rem] shadow-2xl object-cover z-20 border-4 border-background" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />
            <motion.img src="/images/joy3.jpg" alt="JOY Bike Right" className="w-1/3 aspect-[4/5] rounded-3xl shadow-xl object-cover" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
          </div>
        </div>
      </section>

      {/* OLA Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-2">Explore <span className="text-primary">OLA Electric</span></h2>
          <p className="text-muted-foreground mb-16">Smart. Stylish. Built for the future of urban mobility.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["ola1.jpg", "ola2.jpg", "ola3.jpg"].map((img, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                <img src={`/images/${img}`} alt={`OLA ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <Button className="w-full bg-white text-black hover:bg-white/90">View Details</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">See Pardeshi <span className="text-electric">In Action</span></h2>
          <p className="text-muted-foreground mb-12">Experience the power, elegance, and innovation of our electric bikes</p>
          <div className="group relative aspect-video bg-muted rounded-[2.5rem] overflow-hidden shadow-2xl">
            <AnimatePresence>
              {!isShowingVideo && (
                <motion.div exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                  <Button onClick={handleVideoPlay} className="relative z-30 h-24 w-24 rounded-full bg-primary text-white shadow-glow animate-pulse">
                    <Play className="fill-current w-8 h-8 ml-1" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <video ref={videoRef} className="w-full h-full object-cover" poster={Ola} controls={isShowingVideo}>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose Pardeshi eBikes?</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">Leading the electric revolution with innovative technology and sustainable design.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-6 flex items-center justify-center mx-auto border border-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Ready to Go Electric?</h2>
          <p className="text-xl text-muted-foreground mb-12">Join the sustainable transportation revolution today and ride into a cleaner tomorrow.</p>
          <Link to="/brands">
            <Button className="bg-gradient-primary text-xl px-16 py-8 rounded-[2rem] shadow-glow transform hover:scale-105 transition-all">Shop Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;