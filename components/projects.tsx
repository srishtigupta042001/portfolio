import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "./section-heading"

interface Project {
  title: string
  description: string[]
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "Weather App",
    description: [
      "Developed a React.js and Node.js-based weather application that fetches real-time weather data using the OpenWeather API.",
      "Designed a responsive UI using React.js and integrated backend services with Node.js.",
      "Implemented API error handling and optimized API calls, improving data retrieval speed.",
    ],
    technologies: ["React.js", "Node.js", "OpenWeather API", "CSS"],
  },
  {
    title: "Zoho CRM Integration for Automated Workflows",
    description: [
      "Developed custom Zoho Creator workflows using Deluge scripting to automate finance and HR processes.",
      "Integrated Zoho Books APIs for real-time invoice and payment processing.",
    ],
    technologies: ["Zoho Creator", "Deluge Scripting", "Zoho Books API", "Workflow Automation"],
  },
  {
    title: "Automated Testing for FreeCharge PayLater",
    description: [
      "Built API test automation scripts for PayLater product using Postman & RestAssured.",
      "Automated database verification using MySQL queries for transaction logs.",
      "Integrated tests with Jenkins CI/CD to ensure continuous validation of financial records.",
    ],
    technologies: ["Postman", "RestAssured", "MySQL", "Jenkins", "JIRA"],
  },
]

export default function Projects() {
  return (
    <section className="py-20 relative" id="projects">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy/50 dark:opacity-50 opacity-10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Projects" subtitle="Some of my recent work and contributions" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-card dark:bg-navy/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden card-hover"
            >
              <CardHeader className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple to-teal"></div>
                <CardTitle className="text-xl text-foreground dark:text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-teal-light text-teal-light dark:border-teal-light dark:text-teal-light"
                    >
                      {tech}
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

