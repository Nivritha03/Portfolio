"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Award, Trophy, Star, Code, Edit, Save, Plus, Trash2 } from "lucide-react"

const initialAchievementsData = [
  {
    category: "Certifications",
    icon: Award,
    color: "text-primary",
    items: [
      "C Programming Course - Infosys",
      "C Programming 101 - Infosys",
      "Learning Python - Infosys",
      "Python by Example - Infosys",
      "NLP-Natural Language Processing with Python - Udemy",
      "Frontend Web Developer Modern HTML CSS JavaScript - Udemy",
      "MongoDB Basics for Students",
    ],
  },
  {
    category: "Hackathons",
    icon: Code,
    color: "text-secondary",
    items: [
      "AIML Hackathon - Microsoft & Reskill (Nov 28-30, 2024)",
      "AI Department AIML Hackathon (Dec 3-7, 2024)",
      "Woxsen University AIML Hackathon (Feb 19-21, 2025)",
    ],
  },
  {
    category: "Special Programs",
    icon: Star,
    color: "text-accent",
    items: [
      "Graphs Camp by Codeforces Master - Selected from 80,000+ students",
      "Learned 17+ advanced problem solving techniques in graphs",
      "Deloitte Australia Data Analytics Job Simulation on Forage (June 2025)",
    ],
  },
]

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [achievementsData, setAchievementsData] = useState(initialAchievementsData)
  const [newItems, setNewItems] = useState<{ [key: number]: string }>({})
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

  const addItem = (categoryIndex: number) => {
    const newItem = newItems[categoryIndex]
    if (newItem?.trim()) {
      setAchievementsData((prev) =>
        prev.map((category, index) =>
          index === categoryIndex ? { ...category, items: [...category.items, newItem.trim()] } : category,
        ),
      )
      setNewItems((prev) => ({ ...prev, [categoryIndex]: "" }))
    }
  }

  const removeItem = (categoryIndex: number, itemIndex: number) => {
    setAchievementsData((prev) =>
      prev.map((category, index) =>
        index === categoryIndex ? { ...category, items: category.items.filter((_, i) => i !== itemIndex) } : category,
      ),
    )
  }

  const updateItem = (categoryIndex: number, itemIndex: number, newValue: string) => {
    setAchievementsData((prev) =>
      prev.map((category, index) =>
        index === categoryIndex
          ? {
              ...category,
              items: category.items.map((item, i) => (i === itemIndex ? newValue : item)),
            }
          : category,
      ),
    )
  }

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-5xl font-bold">
              <span className="gradient-text">ACHIEVEMENTS</span>
            </h2>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="hover-lift">
              {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            </Button>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {achievementsData.map((category, index) => (
            <div
              key={index}
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="glass hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-full bg-primary/20 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {isEditing ? (
                          <div className="flex items-center gap-2">
                            <Input
                              value={item}
                              onChange={(e) => updateItem(index, itemIndex, e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(index, itemIndex)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <div
                            className={`flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 ${
                              isVisible ? "animate-slide-in-left" : "opacity-0"
                            }`}
                            style={{ animationDelay: `${index * 0.2 + itemIndex * 0.1}s` }}
                          >
                            <Trophy className={`h-4 w-4 mt-1 flex-shrink-0 ${category.color}`} />
                            <span className="text-sm text-foreground leading-relaxed">{item}</span>
                          </div>
                        )}
                      </div>
                    ))}

                    {isEditing && (
                      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                        <Input
                          placeholder="Add new achievement..."
                          value={newItems[index] || ""}
                          onChange={(e) => setNewItems((prev) => ({ ...prev, [index]: e.target.value }))}
                          onKeyPress={(e) => e.key === "Enter" && addItem(index)}
                          className="flex-1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => addItem(index)}
                          className="text-primary hover:text-primary"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
