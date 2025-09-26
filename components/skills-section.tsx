"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Database, Wrench, Globe, Users, Edit, Plus, Trash2, Save } from "lucide-react"

const skillsData = {
  technical: {
    title: "Technical Skills",
    icon: Code,
    color: "text-primary",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
      { name: "SQL" },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "text-secondary",
    skills: [
      { name: "Git/GitHub" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Anaconda Navigator" },
      { name: "Microsoft Office" },
    ],
  },
  data: {
    title: "Data Analysis",
    icon: Database,
    color: "text-accent",
    skills: [
      { name: "Data Entry" },
      { name: "Data Cleaning" },
      { name: "Data Visualization" },
      { name: "Data Preprocessing" },
    ],
  },
  languages: {
    title: "Languages",
    icon: Globe,
    color: "text-primary",
    skills: [{ name: "English" }, { name: "Hindi" }, { name: "Telugu" }],
  },
  behavioral: {
    title: "Behavioral Skills",
    icon: Users,
    color: "text-secondary",
    skills: [
      { name: "Problem-Solving" },
      { name: "Communication" },
      { name: "Leadership" },
      { name: "Collaboration" },
      { name: "Time Management" },
      { name: "Adaptability" },
    ],
  },
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingCategory, setEditingCategory] = useState<string | null>(null)
  const [skills, setSkills] = useState(skillsData)
  const [newSkill, setNewSkill] = useState("")
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

  const addSkill = (categoryKey: string) => {
    if (newSkill.trim()) {
      setSkills((prev) => ({
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey as keyof typeof prev],
          skills: [...prev[categoryKey as keyof typeof prev].skills, { name: newSkill.trim() }],
        },
      }))
      setNewSkill("")
    }
  }

  const removeSkill = (categoryKey: string, skillIndex: number) => {
    setSkills((prev) => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey as keyof typeof prev],
        skills: prev[categoryKey as keyof typeof prev].skills.filter((_, index) => index !== skillIndex),
      },
    }))
  }

  const updateSkill = (categoryKey: string, skillIndex: number, newName: string) => {
    setSkills((prev) => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey as keyof typeof prev],
        skills: prev[categoryKey as keyof typeof prev].skills.map((skill, index) =>
          index === skillIndex ? { ...skill, name: newName } : skill,
        ),
      },
    }))
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-5xl font-bold">
              <span className="gradient-text">SKILLS</span>
            </h2>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="hover-lift">
              {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            </Button>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => (
            <div
              key={key}
              className={`${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="glass hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-full bg-primary/20 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        {isEditing && editingCategory === key ? (
                          <>
                            <Input
                              value={skill.name}
                              onChange={(e) => updateSkill(key, skillIndex, e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeSkill(key, skillIndex)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <div className="flex-1 p-3 rounded-lg bg-muted/50 border border-border/50">
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            </div>
                            {isEditing && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setEditingCategory(editingCategory === key ? null : key)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    ))}

                    {isEditing && (
                      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                        <Input
                          placeholder="Add new skill..."
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && addSkill(key)}
                          className="flex-1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => addSkill(key)}
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
