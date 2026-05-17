'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Info } from 'lucide-react';
import * as motion from 'framer-motion/client';

const skillsData = [
  {
    name: 'HTML / CSS / JavaScript',
    level: 'Proficient',
    w: 80,
    info: 'Build responsive websites and interactive user interfaces using HTML, CSS, and JavaScript.',
  },
  {
    name: 'Python',
    level: 'Intermediate',
    w: 65,
    info: 'Use Python for scripting, backend logic, automation, and data-related tasks.',
  },
  {
    name: 'Scratch / App Inventor',
    level: 'Expert',
    w: 90,
    info: 'Experienced in teaching Scratch and App Inventor to young learners and beginners.',
  },
  {
    name: 'Adobe Illustrator',
    level: 'Intermediate',
    w: 60,
    info: 'Create visual assets, graphics, and digital designs using Adobe Illustrator.',
  },
  {
    name: 'Content Creation',
    level: 'Proficient',
    w: 75,
    info: 'Create educational and digital content through effective editing and presentation tools.',
  },
  {
    name: 'Teaching & Instruction',
    level: 'Expert',
    w: 92,
    info: 'Skilled in simplifying technical topics and delivering effective lessons for learners of different levels.',
  },
];

export default function Skills() {
  const [activeInfo, setActiveInfo] = useState('Click any skill card to read more about it.');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Expertise
          </p>
          <h2 className="mb-12 text-3xl md:text-4xl font-bold tracking-tight">Skills</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {skillsData.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card 
                className="cursor-pointer border-border/50 bg-card hover:border-primary/40 transition-all hover:shadow-md h-full"
                onClick={() => setActiveInfo(s.info)}
              >
                <CardContent className="p-5">
                  <h3 className="font-semibold text-sm mb-1">{s.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-4">
                    {s.level} &middot; {s.w}%
                  </p>
                  <Progress value={mounted ? s.w : 0} className="h-1.5 transition-all duration-1000 ease-out" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex gap-3 items-start"
        >
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">{activeInfo}</p>
        </motion.div>
      </div>
    </section>
  );
}
