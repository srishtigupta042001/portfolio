import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "./section-heading"

interface Certification {
  title: string
  provider: string
  date: string
  link: string
}

const certifications: Certification[] = [
  {
    title: "API Testing Automation: From Basics to Mastery",
    provider: "Udemy",
    date: "Apr 2023",
    link: "https://www.udemy.com/certificate/UC-4c084e55-3a87-4b25-b09f-c6d8c635043e/",
  },
  {
    title: "Linux Shell Scripting: A Project-Based Approach to Learning",
    provider: "Udemy",
    date: "Apr 2023",
    link: "https://www.udemy.com/certificate/UC-958e3895-9bfa-4f36-8919-4d84e242de27/",
  },
  {
    title: "Selenium Webdriver & Java - Using Real Examples - 2023",
    provider: "Udemy",
    date: "Apr 2023",
    link: "https://www.udemy.com/certificate/UC-b9e13239-bf82-4c9a-95b8-5d82253d1ce6",
  },
  {
    title: "Apache Maven: Beginner to Guru",
    provider: "Udemy",
    date: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-2767d7af-99c6-44a6-8fd2-2c979b93b173/",
  },
  {
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    provider: "Udemy",
    date: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-f4a235c7-1b33-44fb-96cf-5c30507ef7d4/",
  },
  {
    title: "Rest API Testing (Automation) from Scratch-Rest Assured Java",
    provider: "Udemy",
    date: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-d0719afd-7e35-4986-9ead-58fa233feeab/",
  },
  {
    title: "Spring Framework Master Class - Java Spring the Modern Way",
    provider: "Udemy",
    date: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-2c985f86-c924-4c9d-821c-08be4fc61bc3/",
  },
  {
    title: "Java Programming for Complete Beginners",
    provider: "Udemy",
    date: "Feb 2023",
    link: "https://www.udemy.com/certificate/UC-946b6817-c66b-44ae-9f43-9505da5d3dd8",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    date: "May 2022",
    link: "https://www.credly.com/badges/8f13a603-50c3-41ea-845b-5efa4bcd034b/public_url",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    provider: "Coursera",
    date: "Sep 2021",
    link: "https://www.coursera.org/account/accomplishments/verify/TCSTHZANESYS",
  },
  {
    title: "Introduction to Web Development",
    provider: "Coursera",
    date: "Sep 2020",
    link: "https://www.coursera.org/account/accomplishments/verify/KBXSEFYYZBXQ",
  },
]

export default function Education() {
  return (
    <section className="py-20 relative" id="education">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-background dark:opacity-50 opacity-10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Education & Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="md:col-span-1 bg-card dark:bg-navy/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden card-hover">
            <div className="h-2 bg-gradient-to-r from-purple to-teal"></div>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-md bg-gradient-to-r from-purple to-teal text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <CardTitle className="text-foreground dark:text-white">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/10 dark:bg-white/5 rounded-lg hover:bg-muted/20 dark:hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-medium text-foreground dark:text-white">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-teal-light">Computer Science</p>
                  <p className="text-muted-foreground">Poornima Institute of Engineering and Technology, Jaipur</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">2019-2023</span>
                    <Badge className="bg-purple text-white">8.03 CGPA</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 bg-card dark:bg-navy/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-teal to-pink"></div>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-md bg-gradient-to-r from-teal to-pink text-white">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle className="text-foreground dark:text-white">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/10 dark:bg-white/5 rounded-lg hover:bg-muted/20 dark:hover:bg-white/10 transition-colors border-l-2 border-teal"
                  >
                    <h3 className="font-medium text-foreground dark:text-white">{cert.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2">
                      <div>
                        <span className="text-sm text-teal-light">{cert.provider}</span>
                        <Badge variant="outline" className="ml-2 border-pink-light text-pink-light">
                          {cert.date}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple hover:border-purple-light hover:bg-purple/10 text-foreground dark:text-white w-full sm:w-auto"
                        asChild
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

