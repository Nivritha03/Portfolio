"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Mic, Award, Target, Edit, Save, Plus, Trash2 } from "lucide-react"

const initialLeadershipData = [
  {
    role: "Head of Public Relations",
    organization: "MALAI (Machine Learning and Artificial Intelligence) Club",
    icon: Users,
    color: "text-primary",
    description: "Leading public relations initiatives and community engagement for the AI/ML club",
  },
  {
    role: "Technical and Event Hospitality Team Member",
    organization: "ACM (Association of Computing Machinery) Student Chapter",
    icon: Award,
    color: "text-secondary",
    description: "Contributing to technical events and hospitality management for ACM chapter",
  },
]

const initialEventsData = [
  {
    title: "Panel Discussion with Tech Influencers",
    description: "Hosted and organized a panel discussion with five leading tech influencers",
    icon: Mic,
    color: "text-accent",
  },
  {
    title: "Tech Talk on Machine Learning",
    description: "Hosted and organized an educational tech talk event on machine learning",
    icon: Target,
    color: "text-primary",
  },
  {
    title: "OpenCV Workshop",
    description: "Organized a hands-on workshop on OpenCV for computer vision applications",
    icon: Users,
    color: "text-secondary",
  },
  {
    title: "NLP Hackathon",
    description: "Organized a hackathon focused on Natural Language Processing challenges",
    icon: Award,
    color: "text-accent",
  },
  {
    title: "Prompt Engineering Event",
    description: "Organized and hosted an event on prompt engineering techniques and best practices",
    icon: Mic,
    color: "text-primary",
  },
]

export function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [leadershipData, setLeadershipData] = useState(initialLeadershipData)
  const [eventsData, setEventsData] = useState(initialEventsData)
  const [newEvent, setNewEvent] = useState({ title: "", description: "" })
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

  const updateLeadership = (index: number, field: string, value: string) => {
    setLeadershipData((prev) => prev.map((role, i) => (i === index ? { ...role, [field]: value } : role)))
  }

  const updateEvent = (index: number, field: string, value: string) => {
    setEventsData((prev) => prev.map((event, i) => (i === index ? { ...event, [field]: value } : event)))
  }

  const addEvent = () => {
    if (newEvent.title.trim() && newEvent.description.trim()) {
      setEventsData((prev) => [
        ...prev,
        {
          ...newEvent,
          icon: Mic,
          color: "text-primary",
        },
      ])
      setNewEvent({ title: "", description: "" })
    }
  }

  const removeEvent = (index: number) => {
    setEventsData((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <section id="leadership" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-5xl font-bold">
              <span className="gradient-text">LEADERSHIP</span>
            </h2>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="hover-lift">
              {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            </Button>
          </div>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <h3
            className={`text-3xl font-bold text-center mb-8 text-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Leadership Roles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipData.map((role, index) => (
              <div
                key={index}
                className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                <Card className="glass hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-primary/20 ${role.color} flex-shrink-0`}>
                        <role.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        {isEditing ? (
                          <div className="space-y-3">
                            <Input
                              value={role.role}
                              onChange={(e) => updateLeadership(index, "role", e.target.value)}
                              placeholder="Role"
                            />
                            <Input
                              value={role.organization}
                              onChange={(e) => updateLeadership(index, "organization", e.target.value)}
                              placeholder="Organization"
                            />
                            <Textarea
                              value={role.description}
                              onChange={(e) => updateLeadership(index, "description", e.target.value)}
                              placeholder="Description"
                              rows={2}
                            />
                          </div>
                        ) : (
                          <>
                            <h4 className="text-xl font-bold mb-2 text-foreground">{role.role}</h4>
                            <h5 className={`text-lg font-semibold mb-3 ${role.color}`}>{role.organization}</h5>
                            <p className="text-muted-foreground leading-relaxed">{role.description}</p>
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

        {/* Events Organized */}
        <div>
          <h3
            className={`text-3xl font-bold text-center mb-8 text-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            Events Organized
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className={`${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <Card className="glass hover-lift h-full">
                  <CardContent className="p-6">
                    {isEditing ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Input
                            value={event.title}
                            onChange={(e) => updateEvent(index, "title", e.target.value)}
                            placeholder="Event title"
                            className="flex-1"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEvent(index)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <Textarea
                          value={event.description}
                          onChange={(e) => updateEvent(index, "description", e.target.value)}
                          placeholder="Event description"
                          rows={2}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`p-2 rounded-full bg-primary/20 ${event.color} flex-shrink-0`}>
                            <event.icon className="h-5 w-5" />
                          </div>
                          <h4 className="text-lg font-bold text-foreground leading-tight">{event.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}

            {isEditing && (
              <Card className="glass border-dashed border-2 border-primary/50">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Input
                      value={newEvent.title}
                      onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="New event title"
                    />
                    <Textarea
                      value={newEvent.description}
                      onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Event description"
                      rows={2}
                    />
                    <Button onClick={addEvent} className="w-full bg-transparent" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
