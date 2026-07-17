import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as motion from 'framer-motion/client';
import { ArrowUpRight, FolderGit2, CheckCircle2, Play } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    desc: 'A fully responsive personal portfolio showcasing my work, experience, and skills. Features dark mode, scroll animations, and a clean design. Hosted on a custom domain.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'shadcn/ui'],
    link: 'https://nilupaudel.com.np/',
    linkText: 'Live Site',
    status: 'Live',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    title: 'To-Do Task Manager',
    desc: 'A clean and functional task management web app built with Django. Users can create, update, and delete tasks with a simple interface. Deployed and hosted live on Render.',
    tags: ['Django', 'Python', 'SQLite', 'Render'],
    link: 'https://todo-task-1-yhll.onrender.com/',
    linkText: 'Live App',
    status: 'Live',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
  },
  {
    title: 'Smart Parking Assistant',
    desc: 'An IoT-based smart parking system built with ESP32 and an Ultrasonic Sensor to detect parking space occupancy in real time. Displays live slot availability and automates gate control.',
    tags: ['IoT', 'ESP32', 'C++', 'Ultrasonic Sensor', 'Firebase'],
    link: 'https://github.com/paudelnilu/Smart-Parking-Assistant',
    linkText: 'View on GitHub',
    videoLink: 'https://www.linkedin.com/posts/nilu-paudel_iot-esp32-smartparking-ugcPost-7483826943595917315-qA9F/',
    meta: 'IoT · ESP32',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
  },
  {
    title: 'Job Portal with Salary Prediction',
    desc: 'A full-stack job platform where users can browse and apply for IT jobs, and employers can post vacancies. Includes an ML model for salary prediction based on job-related factors.',
    tags: ['Python', 'Django', 'MySQL', 'Machine Learning'],
    link: 'https://github.com/paudelnilu/Job-Portal-with-Salary-Prediction',
    linkText: 'View on GitHub',
    meta: 'Django · ML',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
  },
  {
    title: 'Food Recipe Web App',
    desc: 'A recipe management system with user authentication, recipe creation and editing, favourites, and admin-side management built using PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CRUD'],
    link: 'https://github.com/paudelnilu/Recipes',
    linkText: 'View on GitHub',
    meta: 'PHP · MySQL',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Work
          </p>
          <h2 className="mb-12 text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-border/50 bg-card hover:border-primary/50 transition-colors group overflow-hidden">
                <CardHeader className={`p-8 pb-6 flex items-center justify-center ${proj.iconBg}`}>
                  <FolderGit2 className={`w-12 h-12 ${proj.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-mono px-2 py-0.5 text-muted-foreground bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {proj.desc}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-border/10 mt-auto gap-3">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    {proj.linkText}
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                  {proj.videoLink ? (
                    <a
                      href={proj.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-500 hover:bg-violet-500/20 transition-colors"
                    >
                      <Play className="h-3 w-3 fill-violet-500" />
                      Watch Demo
                    </a>
                  ) : proj.status === 'Live' ? (
                    <Badge variant="outline" className="gap-1.5 border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </Badge>
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground">
                      {proj.meta}
                    </span>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
