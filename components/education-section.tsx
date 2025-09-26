"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Calendar, MapPin, Trophy, Edit, Save } from "lucide-react"

const initialEducationData = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Anurag University",
    location: "Hyderabad, Telangana",
    period: "2023-2027",
    grade: "Current CGPA: 8.67/10",
    icon: GraduationCap,
    color: "text-primary",
  },
  {
    degree: "Higher Secondary School",
    institution: "Trividyaa Junior College",
    location: "Hyderabad, Telangana",
    period: "2021-2023",
    grade: "Percentage: 90.04%",
    icon: GraduationCap,
    color: "text-secondary",
  },
  {
    degree: "Secondary School",
    institution: "Amrita Vidyalayam",
    location: "Hyderabad, Telangana",
    period: "2011-2021",
    grade: "Percentage: 89%",
    icon: GraduationCap,
    color: "text-accent",
  },
]

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [educationData, setEducationData] = useState(initialEducationData)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
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

  const updateEducation = (index: number, field: string, value: string) => {
    setEducationData((prev) => prev.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu)))
  }

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-5xl font-bold">
              <span className="gradient-text">EDUCATION</span>
            </h2>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="hover-lift">
              {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            </Button>
          </div>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="glass hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`p-4 rounded-full bg-primary/20 ${edu.color}`}>
                      <edu.icon className="h-8 w-8" />
                    </div>

                    <div className="flex-1">
                      {isEditing ? (
                        <div className="space-y-4">
                          <Input
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, "degree", e.target.value)}
                            placeholder="Degree"
                            className="text-2xl font-bold"
                          />
                          <Input
                            value={edu.institution}
                            onChange={(e) => updateEducation(index, "institution", e.target.value)}
                            placeholder="Institution"
                            className="text-xl font-semibold"
                          />
                          <div className="flex flex-wrap gap-4">
                            <Input
                              value={edu.location}
                              onChange={(e) => updateEducation(index, "location", e.target.value)}
                              placeholder="Location"
                              className="flex-1"
                            />
                            <Input
                              value={edu.period}
                              onChange={(e) => updateEducation(index, "period", e.target.value)}
                              placeholder="Period"
                              className="flex-1"
                            />
                          </div>
                          <Input
                            value={edu.grade}
                            onChange={(e) => updateEducation(index, "grade", e.target.value)}
                            placeholder="Grade/CGPA"
                          />
                        </div>
                      ) : (
                        <>
                          <h3 className="text-2xl font-bold mb-2 text-foreground">{edu.degree}</h3>
                          <h4 className="text-xl font-semibold mb-3 text-primary">{edu.institution}</h4>

                          <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Trophy className={`h-5 w-5 ${edu.color}`} />
                            <span className="font-semibold text-foreground">{edu.grade}</span>
                          </div>
                        </>
                      )}
                    </div>
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
