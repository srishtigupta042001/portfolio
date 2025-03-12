"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react"
import SectionHeading from "./section-heading"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 relative" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy dark:opacity-50 opacity-10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to contact me."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card className="bg-card dark:bg-navy/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden animated-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-gradient-to-r from-purple to-teal text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/10 dark:bg-white/10 border-purple/20 focus:border-purple-light placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/10 dark:bg-white/10 border-purple/20 focus:border-purple-light placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-muted/10 dark:bg-white/10 border-purple/20 focus:border-purple-light placeholder:text-muted-foreground"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-card dark:bg-navy/50 backdrop-blur-sm rounded-lg border-l-4 border-purple shadow-xl">
              <div className="bg-gradient-to-r from-purple to-teal p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-foreground dark:text-white">Email</h3>
                <a
                  href="mailto:srishtigupta040401@gmail.com"
                  className="text-muted-foreground hover:text-purple-light transition-colors"
                >
                  srishtigupta040401@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card dark:bg-navy/50 backdrop-blur-sm rounded-lg border-l-4 border-teal shadow-xl">
              <div className="bg-gradient-to-r from-teal to-pink p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-foreground dark:text-white">Phone</h3>
                <a href="tel:9521055675" className="text-muted-foreground hover:text-teal-light transition-colors">
                  9521055675
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card dark:bg-navy/50 backdrop-blur-sm rounded-lg border-l-4 border-pink shadow-xl">
              <div className="bg-gradient-to-r from-pink to-purple p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-foreground dark:text-white">Location</h3>
                <p className="text-muted-foreground">Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-medium mb-4 text-foreground dark:text-white">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple to-teal p-3 rounded-full hover:opacity-90 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a
                  href="mailto:srishtigupta040401@gmail.com"
                  className="bg-gradient-to-r from-pink to-purple p-3 rounded-full hover:opacity-90 transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

