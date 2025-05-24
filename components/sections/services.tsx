"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Function to get Lucide icon by name
  const getIcon = (iconName: string): React.ComponentType<any> => {
    const Icon = ((LucideIcons as unknown) as Record<string, React.ComponentType<any>>)[iconName];
    return Icon || LucideIcons.Code;
  };

  return (
    <section id="services" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We provide a comprehensive range of software development services 
            to meet your business needs
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/50 group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <LucideIcons.Check className="h-4 w-4 mr-2 text-primary" />
                        <span>Expert development team</span>
                      </li>
                      <li className="flex items-center">
                        <LucideIcons.Check className="h-4 w-4 mr-2 text-primary" />
                        <span>Agile methodology</span>
                      </li>
                      <li className="flex items-center">
                        <LucideIcons.Check className="h-4 w-4 mr-2 text-primary" />
                        <span>Continuous delivery</span>
                      </li>
                      <li className="flex items-center">
                        <LucideIcons.Check className="h-4 w-4 mr-2 text-primary" />
                        <span>Quality assurance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}