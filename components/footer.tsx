import { Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/20 dark:bg-navy py-8 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {currentYear} Srishti Gupta. All rights reserved.</p>
          </div>

          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-pink-light" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:srishtigupta040401@gmail.com"
              className="text-muted-foreground hover:text-pink-light transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

