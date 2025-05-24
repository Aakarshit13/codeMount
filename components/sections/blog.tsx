"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { BLOG_POSTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="blog" className="py-20 md:py-28 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Latest Insights
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our latest articles on technology, development, and industry trends
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground">
                  {format(new Date(post.date), "MMMM d, yyyy")} • by {post.author}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link 
                  href="#" 
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read Article <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}