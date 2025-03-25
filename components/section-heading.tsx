interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center relative z-10">
      <h2 className="text-4xl font-bold tracking-tight text-gradient">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-purple via-teal to-pink rounded-full"></div>
    </div>
  )
}

