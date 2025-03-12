import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, User } from "lucide-react"
import SectionHeading from "./section-heading"

export default function About() {
  return (
    <section className="py-20 relative" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-background opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <div className="bg-navy/50 backdrop-blur-sm p-6 rounded-lg border border-purple/20 shadow-xl">
              <p className="text-lg leading-relaxed mb-6">
                I am a motivated Software Developer with expertise in Python, React.js, Node.js, and API development.
                I'm skilled in building scalable applications, database management, and optimizing workflows. My
                experience includes Zoho integrations, REST APIs, and front-end development.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about delivering efficient and high-performance software solutions and continuously
                improving my skills in Full Stack Development (MERN) and Python. I have strong problem-solving skills
                and thrive in fast-paced environments.
              </p>
            </div>

            {/* Animated quote */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple/20 to-teal/20 rounded-lg border border-purple/30 relative overflow-hidden animated-border">
              <div className="relative z-10">
                <p className="text-lg italic text-white">
                  "I believe in writing clean, efficient code that solves real-world problems and creates exceptional
                  user experiences."
                </p>
              </div>
            </div>
          </div>

          <Card className="h-fit bg-navy/50 backdrop-blur-sm border-purple/20 shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple to-teal"></div>
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple to-teal p-1">
                  <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                    <User size={40} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-light" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Phone className="h-5 w-5 text-teal-light" />
                  <span>9521055675</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Mail className="h-5 w-5 text-pink-light" />
                  <span className="break-all">srishtigupta040401@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

