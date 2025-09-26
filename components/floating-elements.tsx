"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
      <div
        className="absolute top-1/3 right-20 w-6 h-6 bg-secondary/30 rotate-45 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-primary/30 rotate-45 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary/30 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Gradient orbs */}
      <div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2.5s" }}
      ></div>
    </div>
  )
}
