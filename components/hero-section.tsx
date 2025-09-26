"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up pt-16">
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">NIVRITHA</span>
            <br />
            <span className="text-foreground">POLABOINA</span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-mono">Computer Science Student</p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            AI/ML Enthusiast • Problem Solver • Tech Leader
          </p>
        </div>

        <div
          className="animate-fade-in-up flex flex-wrap justify-center gap-4 mb-12"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" className="animate-glow hover-lift">
            <Mail className="mr-2 h-5 w-5" />
            nivritha.pola@gmail.com
          </Button>
          <Button variant="outline" size="lg" className="hover-lift bg-transparent">
            <Phone className="mr-2 h-5 w-5" />
            +91 9550564952
          </Button>
        </div>

        <div className="animate-fade-in-up flex justify-center space-x-6 mb-12" style={{ animationDelay: "0.6s" }}>
          <a href="https://www.linkedin.com/in/nivritha-pola-b8b4b52a0/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="hover-lift">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://github.com/Nivritha03" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="hover-lift">
              <Github className="h-6 w-6" />
            </Button>
          </a>
        </div>

        <div className="animate-bounce">
          <a href="#about">
            <Button variant="ghost" size="lg" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
