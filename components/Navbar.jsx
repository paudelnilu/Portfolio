'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';
import * as motion from 'framer-motion/client';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sections = document.querySelectorAll('section[id], div[id="hero"]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto max-w-5xl px-6 md:px-12 flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-muted-foreground">[</span>
          <span className="text-primary font-bold">N</span>
          ilu Paudel
          <span className="text-muted-foreground">]</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="ml-0.5 inline-block h-4 w-[2px] bg-primary align-middle"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={href}>
                <a 
                  href={href} 
                  onClick={(e) => handleNavClick(e, href)}
                  className={buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "sm", className: `text-xs uppercase tracking-widest ${isActive ? 'text-primary' : 'text-muted-foreground'}` })}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted-foreground hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}

          {/* Mobile Nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden" })}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="font-mono text-sm"><span className="text-primary font-bold">N</span>ilu Paudel</SheetTitle>
                <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
              </SheetHeader>
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => {
                  const id = href.slice(1);
                  const isActive = activeId === id;
                  return (
                    <li key={href}>
                      <a 
                        href={href} 
                        onClick={(e) => handleNavClick(e, href)}
                        className={buttonVariants({ variant: isActive ? "secondary" : "ghost", className: "w-full justify-start text-sm uppercase tracking-wider" })}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
