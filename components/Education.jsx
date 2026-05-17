import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as motion from 'framer-motion/client';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor in Computer Applications (BCA)',
    school: 'Padmashree College, Kathmandu',
    year: 'Enrolled: 2020',
  },
  {
    degree: '+2 Science with Computer',
    school: 'Shree Mahendra Secondary School',
    year: 'Passed: 2077 B.S.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Academic
          </p>
          <h2 className="mb-10 text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map(({ degree, school, year }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-8 flex flex-col items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{degree}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{school}</p>
                    <Badge variant="secondary" className="font-mono text-xs text-muted-foreground">
                      {year}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
