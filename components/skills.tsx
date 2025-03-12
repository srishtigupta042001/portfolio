import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import { Code, Database, Globe, Cloud, TestTube, Zap } from "lucide-react"

interface SkillCategory {
  category: string
  icon: React.ReactNode
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "JavaScript", "Node.js", "React.js", "C++"],
    color: "from-purple-light to-purple-dark",
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL"],
    color: "from-teal-light to-teal-dark",
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["HTML5", "CSS3", "Bootstrap", "RESTful APIs"],
    color: "from-pink-light to-pink-dark",
  },
  {
    category: "Cloud & Tools",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS (Basic)", "Docker (Basic)", "Git", "Bitbucket", "Jenkins"],
    color: "from-purple-light to-teal-light",
  },
  {
    category: "Testing & Automation",
    icon: <TestTube className="h-6 w-6" />,
    skills: ["Postman", "Selenium", "JIRA"],
    color: "from-teal-light to-pink-light",
  },
  {
    category: "Zoho Development",
    icon: <Zap className="h-6 w-6" />,
    skills: ["Zoho Creator", "Zoho Books", "Deluge Scripting", "API Integrations"],
    color: "from-pink-light to-purple-light",
  },
]

export default function Skills() {
  return (
    <section className="py-20 relative" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-background opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden bg-navy/50 backdrop-blur-sm border-0 shadow-xl card-hover">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-md bg-gradient-to-r ${category.color} text-white`}>{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{skill}</span>
                        <span className="text-white">{Math.floor(Math.random() * 30) + 70}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className={`skill-bar bg-gradient-to-r ${category.color}`}
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

