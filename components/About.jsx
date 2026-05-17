import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as motion from 'framer-motion/client';

const cards = [
  {
    tag: 'Background',
    title: 'My Story',
    body: 'I am an IT professional based in Kathmandu, Nepal, with a strong interest in software development, digital solutions, and coding education. Since 2019, I have been helping students turn ideas into practical projects — from beginner-friendly Scratch animations to Python programs and responsive websites. Alongside my academic journey in BCA, I continue to work as an instructor and content creator.',
  },
  {
    tag: 'Focus',
    title: 'What I Do',
    body: 'I teach coding to beginners and intermediate learners, create educational content, and build digital solutions that make learning more practical and accessible.',
  },
  {
    tag: 'Approach',
    title: 'How I Work',
    body: 'I believe technology should be practical and easy to understand. I continuously improve by exploring modern tools and effective teaching methods.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            About
          </p>
          <h2 className="mb-10 text-3xl md:text-4xl font-bold tracking-tight">Who I Am</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr_1fr]">
          {cards.map(({ tag, title, body }, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card hover:bg-accent/5 transition-colors duration-300">
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="w-fit mb-2 text-xs font-mono uppercase tracking-widest text-primary border-primary/20 bg-primary/5">
                    {tag}
                  </Badge>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
