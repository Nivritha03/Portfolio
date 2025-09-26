"use client"

import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Save, Plus, Trash2 } from "lucide-react"

interface EditableSectionProps {
  title: string
  children: ReactNode
  onEdit?: () => void
  className?: string
}

export function EditableSection({ title, children, onEdit, className = "" }: EditableSectionProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className={`relative group ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-5xl font-bold">
          <span className="gradient-text">{title}</span>
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setIsEditing(!isEditing)
            onEdit?.()
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity hover-lift"
        >
          {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
        </Button>
      </div>
      {children}
    </div>
  )
}

interface EditableTextProps {
  value: string
  onChange: (value: string) => void
  isEditing: boolean
  multiline?: boolean
  className?: string
  placeholder?: string
}

export function EditableText({
  value,
  onChange,
  isEditing,
  multiline = false,
  className = "",
  placeholder = "Enter text...",
}: EditableTextProps) {
  if (isEditing) {
    return multiline ? (
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        placeholder={placeholder}
        rows={3}
      />
    ) : (
      <Input value={value} onChange={(e) => onChange(e.target.value)} className={className} placeholder={placeholder} />
    )
  }

  return <span className={className}>{value}</span>
}

interface EditableListProps {
  items: string[]
  onChange: (items: string[]) => void
  isEditing: boolean
  className?: string
  itemClassName?: string
}

export function EditableList({ items, onChange, isEditing, className = "", itemClassName = "" }: EditableListProps) {
  const [newItem, setNewItem] = useState("")

  const addItem = () => {
    if (newItem.trim()) {
      onChange([...items, newItem.trim()])
      setNewItem("")
    }
  }

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, value: string) => {
    onChange(items.map((item, i) => (i === index ? value : item)))
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          {isEditing ? (
            <>
              <Input value={item} onChange={(e) => updateItem(index, e.target.value)} className="flex-1" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(index)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <div className={`flex-1 ${itemClassName}`}>{item}</div>
          )}
        </div>
      ))}

      {isEditing && (
        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          <Input
            placeholder="Add new item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addItem()}
            className="flex-1"
          />
          <Button variant="ghost" size="sm" onClick={addItem} className="text-primary hover:text-primary">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
