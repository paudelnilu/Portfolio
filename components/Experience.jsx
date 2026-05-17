import { Card, CardContent } from '@/components/ui/card';
import * as motion from 'framer-motion/client';

const experiences = [
  {
    role: 'Coding Instructor',
    org: 'Mero Coding Class',
    date: '2025 \u2013 Present',
    desc: 'Teaching programming fundamentals and project-based learning using Scratch, App Inventor, Python, and web technologies.',
  },
  {
    role: 'Data Operator & Content Creator',
    org: 'Learnsic Education',
    date: '2024 \u2013 2025',
    desc: 'Worked on data handling, educational content preparation, and digital material creation for learning-focused platforms.',
  },
  {
    role: 'Lab Assistant',
    org: 'Shree Mahendra Secondary School',
    date: '2020',
    desc: 'Assisted in managing computer lab activities and maintaining a productive technical learning environment for students.',
  },
  {
    role: 'Computer Instructor',
    org: 'Malika IT College',
    date: '2019',
    desc: 'Taught foundational computer skills and introduced learners to practical digital tools and software applications.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Career
          </p>
          <h2 className="mb-12 text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
        </motion.div>

        <div className="relative pl-6 md:pl-8 border-l border-border/60 space-y-8">
          {experiences.map(({ role, org, date, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] md:-left-[39px] top-4 h-4 w-4 rounded-full border-2 border-background bg-primary ring-4 ring-primary/10" />
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{role}</h3>
                      <p className="text-primary font-medium text-sm">{org}</p>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono font-medium md:whitespace-nowrap w-fit">
                      {date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
