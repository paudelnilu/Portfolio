import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Mail, Briefcase } from 'lucide-react';
import * as motion from 'framer-motion/client';

const chips = ['Open to opportunities', 'Kathmandu, Nepal', 'BCA Student'];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="pb-20 pt-32 lg:pt-40">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
          {/* Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="font-mono text-sm tracking-widest text-primary uppercase">
              Hello, I&apos;m
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Nilu <span className="text-primary">Paudel</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground flex flex-wrap items-center gap-2">
              <strong className="font-semibold text-foreground">IT Professional</strong>
              <span>&middot;</span>
              <span>Coding Instructor</span>
              <span>&middot;</span>
              <span>Content Creator</span>
            </motion.p>
            <motion.p variants={itemVariants} className="max-w-lg text-base text-muted-foreground leading-relaxed">
              Helping students and learners build practical digital skills and
              real-world projects since 2019.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className={buttonVariants({ size: 'lg', className: 'rounded-full shadow-lg hover:shadow-primary/25 transition-shadow' })}>
                <Briefcase className="mr-2 h-4 w-4" />
                View Projects
              </a>
              <a href="#contact" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'rounded-full' })}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-6">
              {chips.map((c) => (
                <Badge key={c} variant="secondary" className="px-3 py-1 text-xs font-medium rounded-full">
                  {c}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-first lg:order-none flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-2xl bg-primary/10 -z-10" />
              <Image
                src="/nilu.jpg"
                alt="Nilu Paudel — IT Professional and Coding Instructor"
                width={320}
                height={320}
                priority
                className="rounded-2xl border bg-background object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
