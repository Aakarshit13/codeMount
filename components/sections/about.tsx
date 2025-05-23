"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, 
  Lightbulb, 
  Users, 
  Star,
  Award,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import { TECH_STACK } from "@/lib/constants";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experts in Building Powerful Digital Solutions
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2018, Nexus Tech has grown from a small team of passionate 
              developers to a full-service software development company. We specialize in 
              creating custom software solutions that help businesses streamline operations, 
              improve customer experiences, and drive growth.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of experienced designers, developers, and project managers work 
              collaboratively to deliver exceptional results. We follow agile 
              methodologies to ensure transparent communication and on-time delivery.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-4">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Reliability</h3>
                  <p className="text-sm text-muted-foreground">
                    Trusted by businesses of all sizes
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-4">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized workflows and processes
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">On-time Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Meeting deadlines consistently
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-2 mr-4">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Quality Work</h3>
                  <p className="text-sm text-muted-foreground">
                    Excellence in every project
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-chart-1/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-chart-2/10 rounded-full blur-xl" />
              
              <div className="relative bg-muted/80 p-8 rounded-2xl border border-border">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-background p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-primary mb-2">7+</div>
                    <p className="text-muted-foreground text-sm">Years of Experience</p>
                  </div>
                  <div className="bg-background p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <p className="text-muted-foreground text-sm">Completed Projects</p>
                  </div>
                  <div className="bg-background p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-primary mb-2">30+</div>
                    <p className="text-muted-foreground text-sm">Team Members</p>
                  </div>
                  <div className="bg-background p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Our Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.map((tech) => (
                    <div 
                      key={tech.name}
                      className="bg-background px-3 py-2 rounded-lg flex items-center text-sm"
                    >
                      {tech.icon && (
                        <span className="mr-2">
                          {/* @ts-ignore */}
                          {tech.icon && <span>{tech.icon}</span>}
                        </span>
                      )}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The principles that guide our work and relationships
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground">
                We pride ourselves on writing clean, maintainable code and staying at the forefront of technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creative problem-solving and continuously explore new approaches to deliver better solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, fostering open communication and partnership throughout the process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, ensuring that every product we deliver meets the highest standards.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}