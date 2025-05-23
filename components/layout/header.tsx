"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { COMPANY_NAME, NAVIGATION_ITEMS } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
          >
            {COMPANY_NAME}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button>Get in Touch</Button>
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              className="ml-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              {COMPANY_NAME}
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4">Get in Touch</Button>
          </nav>
        </div>
      )}
    </header>
  );
}