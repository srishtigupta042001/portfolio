"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Mail, Code, Terminal } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Developer"
  const typingSpeed = 100

  useEffect(() => {
    setVisible(true)

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80 z-0 dark:opacity-80 light:opacity-30"></div>
      <div className="absolute inset-0 grid-bg z-0"></div>

      {/* Animated shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-dark/20 rounded-full blur-3xl animate-float z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-dark/20 rounded-full blur-3xl animate-float animation-delay-2000 z-0"></div>

      {/* Floating icons */}
      <div className="absolute top-1/3 right-10 text-purple-light/30 animate-float">
        <Code size={48} />
      </div>
      <div className="absolute bottom-1/3 left-10 text-teal-light/30 animate-float animation-delay-1000">
        <Terminal size={48} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={cn(
            "space-y-6 transition-all duration-1000 transform",
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gradient">Srishti Gupta</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground dark:text-white">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Motivated Software Developer with expertise in Python, React.js, Node.js, and API development. Passionate about building scalable, high-performance applications that enhance user experiences and drive innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple hover:border-purple-light hover:bg-purple/10 text-foreground dark:text-white"
              asChild
            >
              <a href="#about">
                Learn more <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 text-foreground dark:text-white"
              asChild
            >
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 text-foreground dark:text-white"
              asChild
            >
              <a href="mailto:srishtigupta040401@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground/70 dark:text-white/70" />
      </div>
    </section>
  )
}

