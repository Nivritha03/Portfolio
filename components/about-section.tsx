"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">ABOUT</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <Card className="glass hover-lift">
              <CardContent className="p-8">
                <img
                 src="/images/photo.jpg" // <- replace with actual image path
                 alt="Nivritha Polaboina"
                 className="w-48 h-48 mx-auto mb-8 rounded-full object-cover border-4 border-primary animate-glow"/>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Nivritha Polaboina</h3>
                  <p className="text-muted-foreground font-mono">Aspiring 3rd Year CSE student | AI & Machine Learning Enthusiast | Python, C, Java | Frontend & Backend Explorer | MERN Stack </p>
                  <p className="text-sm text-muted-foreground mt-2">Hyderabad, India</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Mission Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Motivated 3rd-year Computer Science student with a strong foundation in programming and
                  problem-solving. Passionate about developing software solutions and eager to gain experience in web
                  development and machine learning.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-secondary">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing Bachelor of Technology in Computer Science Engineering at Anurag University with an
                  outstanding CGPA of 8.67/10. Actively participating in hackathons and leading tech initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Cloud Computing",
                    "Data Analysis",
                    "Problem Solving",
                  ].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

