import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import SectionHeading from "./section-heading"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "ZCrew Technology",
    location: "Jaipur, Rajasthan",
    period: "Sep 2024 - Present",
    description: [
      "Developed and maintained a Python-based HRMS application with geofencing and image verification features.",
      "Built REST APIs using Django REST Framework to facilitate smooth data flow between modules.",
      "Optimized database queries and improved API response time by 30%.",
      "Integrated Zoho Books and Zoho Creator for automated financial and workflow management.",
      "Used React.js to build interactive UI components, improving user experience.",
    ],
    skills: ["Python", "Django", "REST API", "React.js", "Zoho Integration"],
  },
  {
    title: "QA Automation Intern",
    company: "FreeCharge Payment Technologies",
    location: "Gurugram, Haryana",
    period: "Feb 2023 - Jul 2023",
    description: [
      "Developed automated test scripts for REST API testing using Postman and Java.",
      "Executed performance testing and ensured efficient backend integration for PayLater services.",
      "Improved test case efficiency, reducing API response failures by 25%.",
      "Collaborated with developers to debug issues using JIRA and Git.",
    ],
    skills: ["API Testing", "Postman", "Java", "JIRA", "Git"],
  },
  {
    title: "Web Development Intern",
    company: "NeelBlue Technologies",
    location: "Hyderabad, Telangana",
    period: "May 2022 - Aug 2022",
    description: [
      "Built dynamic web applications using JavaScript, MySQL, and PHP.",
      "Designed and optimized front-end components using HTML, CSS, and Bootstrap.",
      "Assisted in database management and query optimization for large datasets.",
    ],
    skills: ["JavaScript", "MySQL", "PHP", "HTML", "CSS", "Bootstrap"],
  },
]

export default function Experience() {
  return (
    <section className="py-20 relative" id="experience">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy/50 opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Work Experience" subtitle="My professional journey and the companies I've worked with" />

        <div className="space-y-8 mt-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 bg-navy/50 backdrop-blur-sm shadow-xl overflow-hidden card-hover">
              <div className="h-1 bg-gradient-to-r from-purple to-teal"></div>
              <CardHeader className="relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple to-teal p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 pl-6">
                  <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                  <Badge variant="outline" className="w-fit border-purple-light text-purple-light">
                    {exp.period}
                  </Badge>
                </div>
                <div className="text-teal-light pl-6">
                  {exp.company}, {exp.location}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} className="bg-purple/20 text-purple-light hover:bg-purple/30">
                      {skill}
                    </Badge>
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

