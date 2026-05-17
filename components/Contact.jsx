'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | ok | err
  const [msg, setMsg] = useState('');

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setStatus('err');
      setMsg('Please fill out all fields.');
      return;
    }

    try {
      const createdAt = new Date().toISOString();
      const sn = escapeHtml(name), se = escapeHtml(email), ss = escapeHtml(subject), sm = escapeHtml(message).replace(/\n/g, '<br>');

      // Send email via Nodemailer API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }

      setStatus('ok');
      setMsg('Message sent successfully. Please check your inbox for a confirmation.');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('err');
      setMsg('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mb-12 text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <motion.a 
              href="mailto:paudelnilu2@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="block"
            >
              <Card className="hover:border-primary/50 transition-colors border-border/50 bg-card">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold text-sm">paudelnilu2@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold text-sm">Kathmandu, Nepal</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</Label>
                      <Input type="text" id="name" name="name" required placeholder="John Doe" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</Label>
                      <Input type="email" id="email" name="email" required placeholder="john@example.com" className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</Label>
                    <Input type="text" id="subject" name="subject" required placeholder="Project Inquiry" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</Label>
                    <Textarea id="message" name="message" required placeholder="Hello Nilu, I would like to discuss..." className="min-h-[150px] bg-background resize-y" />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button type="submit" disabled={status === 'loading'} className="min-w-[140px]">
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    {msg && (
                      <p className={`text-sm font-medium px-4 py-2 rounded-md ${
                        status === 'ok' 
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                          : 'bg-destructive/10 text-destructive'
                      }`}>
                        {msg}
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
