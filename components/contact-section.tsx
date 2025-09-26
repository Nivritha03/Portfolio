"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">CONTACT</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI/ML and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:nivritha.pola@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      nivritha.pola@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+919550564952"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +91 9550564952
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/20 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Hyderabad, India 500047</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/nivritha-pola-b8b4b52a0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <Card className="glass hover-lift h-full">
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-glow flex items-center justify-center">
                    <Send className="h-16 w-16 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Connect!</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on innovative projects, or share
                    insights about AI/ML and software development. Feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    <Button size="lg" className="w-full animate-glow hover-lift">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    <Button variant="outline" size="lg" className="w-full hover-lift bg-transparent">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Available for internships, collaborations, and exciting projects in AI/ML
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
          <p className="text-muted-foreground">
            © 2025 Nivritha Polaboina. Built with passion for technology and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
