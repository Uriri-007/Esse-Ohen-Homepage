import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Twitter, Mail, ExternalLink, Copy, Check, Briefcase, GraduationCap, Users, MessageSquare, ShieldCheck, Search, Clock, FileText, Edit, Heart } from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-earth">
          ESSE<span className="text-sage">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-earth/80 hover:text-sage transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-earth"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass md:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-earth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-sage/10 text-sage-dark rounded-full">
            Lagos, Nigeria
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-earth mb-6">
            Esse Ohen
          </h1>
          <p className="text-xl md:text-2xl text-earth/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Community Manager & Business Developer fostering diversity and driving initiatives in the Web3 space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-all shadow-lg hover:shadow-sage/20"
            >
              Let's Collaborate
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 glass text-earth rounded-full font-medium hover:bg-white/40 transition-all"
            >
              View Experience
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-earth/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-sage rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const [copied, setCopied] = useState(false);
  const summary = "A dynamic community professional with a proven track record at Rezerve Money, excelling in content moderation and community engagement. Leveraged strong writing skills to enhance user interaction and foster diversity, resulting in increased community involvement. Known for patience and a commitment to ethical practices, driving successful initiatives that resonate with diverse audiences.";

  const handleExplainToChatGPT = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    
    // Open ChatGPT with the prompt
    const prompt = encodeURIComponent(`Here is a professional summary of Esse Ohen: "${summary}". Please provide more insights and help me draft a personalized outreach message for her.`);
    window.open(`https://chatgpt.com/?q=${prompt}`, '_blank');
  };

  return (
    <section id="about" className="py-24 bg-white/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden glass p-4">
                <img 
                  src="esse.jpg" 
                  alt="Esse Ohen" 
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
                <p className="text-sm font-bold text-sage-dark">5+ Years</p>
                <p className="text-xs text-earth/60">Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-earth mb-6">Professional Summary</h2>
              <p className="text-lg text-earth/70 leading-relaxed mb-8">
                {summary}
              </p>
              
              <button
                onClick={handleExplainToChatGPT}
                className="group relative flex items-center gap-3 px-6 py-3 bg-earth text-white rounded-xl font-medium hover:bg-earth/90 transition-all overflow-hidden"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Explain Esse to ChatGPT</span>
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 bg-sage flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      <span className="text-sm">Summary Copied!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <p className="mt-3 text-xs text-earth/40 italic">
                Copies summary & opens ChatGPT for more info.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Community Moderator",
      company: "Rezerve Money",
      period: "June 2025 – Present",
      // Professional community/collaboration placeholder
      image: "rzr.jpg",
      points: [
        "Guided new members through onboarding and facilitated open communication",
        "Fostered diversity by engaging underrepresented voices",
        "Executed content and events to boost community involvement",
        "Improved engagement through timely moderation"
      ]
    },
    {
      role: "Community Manager",
      company: "Own Protocol",
      period: "June 2025 – Present",
      // Digital/Social media interaction placeholder
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      points: [
        "Managed social media channels for brand visibility and audience interaction",
        "Optimized marketing efforts for community expansion",
        "Resolved member concerns effectively",
        "Created documentation to inform leadership of community initiatives"
      ]
    },
    {
      role: "Business Development Intern",
      company: "DIA DAO",
      period: "2022 – Present",
      // Research and data analysis placeholder
      image: "dia.jpg",
      points: [
        "Built business relationships and supported marketing in lead qualification",
        "Conducted market research to identify potential users",
        "Increased user base through targeted outreach",
        "Developed deep product knowledge to provide user-specific suggestions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-sage/30 md:left-1/2 md:-translate-x-1/2" />
              
              <div className={cn(
                "flex flex-col md:flex-row items-center gap-8",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="glass p-8 rounded-2xl hover:shadow-xl transition-all border-l-4 border-sage">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-earth">{exp.role}</h3>
                        <p className="text-sage-dark font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-sand rounded-full text-earth/60">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-earth/70">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-sage border-4 border-sand-light md:left-1/2 md:-translate-x-1/2 md:top-8" />
                
                {/* Updated Image Side */}
                <div className="hidden md:flex w-1/2 justify-center">
                  <div className="relative group overflow-hidden rounded-2xl border-2 border-sage/20">
                    <img 
                      src={exp.image} 
                      alt={exp.company}
                      className="w-full h-48 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-sage/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const SkillsAndEducation = () => {
  const skillGroups = [
    {
      title: "Community & Content",
      icon: <Users className="w-6 h-6 text-sage" />,
      skills: ["Content Moderation", "Community Engagement", "Social Media Proficiency"]
    },
    {
      title: "Communication",
      icon: <Edit className="w-6 h-6 text-sage" />,
      skills: ["Writing", "Editing", "Patience & Tolerance"]
    },
    {
      title: "Technical & Strategy",
      icon: <ShieldCheck className="w-6 h-6 text-sage" />,
      skills: ["Online Research", "Time Management", "Strong Ethics", "Lead Qualification"]
    }
  ];

  const education = [
    {
      degree: "B.Sc. in Architecture",
      school: "University of Benin, Benin City, Nigeria",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Intermediate Certificate in Web3 & DeFi",
      school: "Nirvana Academy (Sept 2023 – Dec 2023)",
      icon: <Search className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-sand/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div id="skills">
            <h2 className="text-3xl font-bold text-earth mb-10 flex items-center gap-3">
              <Briefcase className="text-sage" /> Core Skills
            </h2>
            <div className="grid gap-6">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/50 rounded-xl">
                      {group.icon}
                    </div>
                    <h3 className="font-bold text-earth">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="text-3xl font-bold text-earth mb-10 flex items-center gap-3">
              <GraduationCap className="text-sage" /> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl flex gap-4"
                >
                  <div className="p-3 bg-sage/10 rounded-xl h-fit">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-earth mb-1">{edu.degree}</h3>
                    <p className="text-sm text-earth/60">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Card for Vibe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-8 bg-sage rounded-2xl text-white relative overflow-hidden"
            >
              <Heart className="absolute -top-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
              <h3 className="text-xl font-bold mb-2">Values & Ethics</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                "I believe in building communities that are not just large, but inclusive, diverse, and ethically driven."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const CTA = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-6">
            Ready to grow your community?
          </h2>
          <p className="text-xl text-earth/60 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:esseogboumah@gmail.com" 
              className="flex items-center gap-3 px-8 py-4 bg-earth text-white rounded-full font-bold hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <div className="flex gap-4">
              <a href="https://ng.linkedin.com/in/esse-ogboumah-376004253" className="p-4 glass rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/Esseohen" className="p-4 glass rounded-full hover:bg-primary hover:text-white transition-all">
                <XIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-earth/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-xl font-bold tracking-tighter text-earth">
              ESSE<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-earth/40 mt-2">
              © {new Date().getFullYear()} Esse Ohen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-sage/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <SkillsAndEducation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
