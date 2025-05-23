"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      parallaxRef.current.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-36 lg:pt-48 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-chart-1/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">Digital Solutions</span> That Drive Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 lg:max-w-2xl">
                Transforming ideas into exceptional digital experiences. Our team of expert developers 
                and designers craft innovative software solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <div ref={parallaxRef} className="relative w-full max-w-lg mx-auto">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-chart-5/20 rounded-full mix-blend-multiply blur-xl animate-blob" />
                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-chart-2/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-chart-1/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000" />
                
                <div className="relative p-8 bg-background/30 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-24 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                      <span className="font-semibold text-primary">Web Apps</span>
                    </div>
                    <div className="h-24 bg-chart-2/10 rounded-lg border border-chart-2/20 flex items-center justify-center">
                      <span className="font-semibold text-chart-2">Mobile</span>
                    </div>
                    <div className="h-24 bg-chart-3/10 rounded-lg border border-chart-3/20 flex items-center justify-center">
                      <span className="font-semibold text-chart-3">Cloud</span>
                    </div>
                    <div className="h-24 bg-chart-4/10 rounded-lg border border-chart-4/20 flex items-center justify-center">
                      <span className="font-semibold text-chart-4">AI/ML</span>
                    </div>
                  </div>
                  <div className="h-16 bg-muted rounded-lg flex items-center justify-center">
                    <span className="font-medium">Innovative Solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}