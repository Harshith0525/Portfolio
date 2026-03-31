import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe,
  Send,
  Download,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Toaster, toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Background animation
      tl.fromTo('.hero-bg', 
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      );
      
      // Wordmark and nav
      tl.fromTo(['.wordmark', '.nav-item'],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        '-=0.6'
      );
      
      // Headline words
      tl.fromTo('.headline-word',
        { y: 50, opacity: 0, rotateX: 25 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.06 },
        '-=0.3'
      );
      
      // Subheadline
      tl.fromTo('.subheadline',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.4'
      );
      
      // Accent underline
      tl.fromTo('.accent-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.3'
      );
      
      // Bottom content
      tl.fromTo(['.hero-desc', '.hero-cta'],
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
        '-=0.4'
      );
      
      // Bottom line
      tl.fromTo('.bottom-line',
        { scaleY: 0 },
        { scaleY: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  // Scroll-driven animations for pinned sections
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll animation (exit only)
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set(['.headline-word', '.subheadline', '.hero-desc', '.hero-cta', '.accent-line'], {
              opacity: 1, y: 0, x: 0
            });
          }
        }
      });
      
      // Hero exit (70%-100%)
      heroScrollTl.fromTo('.headline-container',
        { y: 0, opacity: 1 },
        { y: '-22vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
      heroScrollTl.fromTo('.hero-desc',
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      heroScrollTl.fromTo('.hero-cta',
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      heroScrollTl.fromTo('.bottom-line',
        { scaleY: 1 },
        { scaleY: 0, transformOrigin: 'bottom' },
        0.7
      );
      heroScrollTl.fromTo('.hero-bg',
        { scale: 1, y: 0 },
        { scale: 1.06, y: '-6vh' },
        0.7
      );

      // Projects section
      const projectsScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });
      
      // Projects entrance (0%-30%)
      projectsScrollTl.fromTo('.projects-bg',
        { scale: 1.08, y: '8vh' },
        { scale: 1, y: 0 },
        0
      );
      projectsScrollTl.fromTo('.projects-label',
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );
      projectsScrollTl.fromTo('.project-card-left',
        { x: '-50vw', opacity: 0, rotateZ: -2 },
        { x: 0, opacity: 1, rotateZ: 0, ease: 'none' },
        0.06
      );
      projectsScrollTl.fromTo('.project-card-right',
        { x: '50vw', opacity: 0, rotateZ: 2 },
        { x: 0, opacity: 1, rotateZ: 0, ease: 'none' },
        0.1
      );
      projectsScrollTl.fromTo('.project-underline',
        { scaleX: 0 },
        { scaleX: 1, stagger: 0.05 },
        0.18
      );
      projectsScrollTl.fromTo('.projects-cta',
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1 },
        0.2
      );
      
      // Projects exit (70%-100%)
      projectsScrollTl.fromTo('.project-card-left',
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      projectsScrollTl.fromTo('.project-card-right',
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      projectsScrollTl.fromTo('.projects-label',
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.75
      );
      projectsScrollTl.fromTo('.projects-cta',
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, ease: 'power2.in' },
        0.75
      );
      projectsScrollTl.fromTo('.projects-bg',
        { scale: 1, y: 0 },
        { scale: 1.05, y: '-6vh' },
        0.7
      );

      // Skills section
      const skillsScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        }
      });
      
      // Skills entrance (0%-30%)
      skillsScrollTl.fromTo('.skills-bg',
        { scale: 1.07, y: '6vh' },
        { scale: 1, y: 0 },
        0
      );
      skillsScrollTl.fromTo('.skills-label',
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1 },
        0
      );
      skillsScrollTl.fromTo('.skills-headline-word',
        { y: 45, opacity: 0, rotateX: 20 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.03 },
        0.08
      );
      skillsScrollTl.fromTo('.skills-underline',
        { scaleX: 0 },
        { scaleX: 1 },
        0.18
      );
      skillsScrollTl.fromTo('.skills-list-left',
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1 },
        0.12
      );
      skillsScrollTl.fromTo('.skills-list-right',
        { x: '18vw', opacity: 0 },
        { x: 0, opacity: 1 },
        0.14
      );
      
      // Skills exit (70%-100%)
      skillsScrollTl.fromTo('.skills-headline-container',
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
      skillsScrollTl.fromTo(['.skills-list-left', '.skills-list-right'],
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
      skillsScrollTl.fromTo('.skills-underline',
        { scaleX: 1 },
        { scaleX: 0 },
        0.75
      );
      skillsScrollTl.fromTo('.skills-bg',
        { scale: 1, y: 0 },
        { scale: 1.05, y: '-5vh' },
        0.7
      );

      // Flowing sections animations
      // Experience section
      gsap.fromTo('.experience-heading',
        { x: '-8vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 0.5
          }
        }
      );
      
      gsap.fromTo('.timeline-line-animate',
        { scaleY: 0 },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.5
          }
        }
      );
      
      gsap.fromTo('.experience-entry',
        { x: '10vw', opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 0.5
          }
        }
      );

      // Education section
      gsap.fromTo('.education-heading',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.5
          }
        }
      );
      
      gsap.fromTo('.education-card',
        { x: '-12vw', opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.1,
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 65%',
            end: 'top 25%',
            scrub: 0.5
          }
        }
      );

      // About section
      gsap.fromTo('.about-left',
        { x: '-6vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 0.5
          }
        }
      );
      
      gsap.fromTo('.about-right',
        { x: '6vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 0.5
          }
        }
      );

      // Footer
      gsap.fromTo('.footer-content',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5
          }
        }
      );

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (maxScroll && pinned.length > 0) {
        const pinnedRanges = pinned.map(st => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));
        
        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
              if (!inPinned) return value;
              
              const target = pinnedRanges.reduce((closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
                pinnedRanges[0]?.center ?? 0
              );
              return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out'
          }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Replace this with your actual Formspree ID (e.g., 'https://formspree.io/f/xbjojpqr')
    const FORMSPREE_URL = "https://formspree.io/f/mqajajob"; 
    
    const promise = fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    toast.promise(promise, {
      loading: 'Sending message...',
      success: () => {
        form.reset();
        return 'Message sent successfully!';
      },
      error: 'Failed to send message. Please try again.'
    });
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: ref.current, offsetY: 0 },
        ease: 'power3.inOut'
      });
    }
  };

  return (
    <div ref={mainRef} className="relative bg-background">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-[4vw] py-6 flex justify-between items-center">
        <div className="wordmark font-heading text-xl font-bold tracking-[0.15em] text-foreground">
          MANKALA
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection(projectsRef)} className="nav-item nav-link">Work</button>
          <button onClick={() => scrollToSection(skillsRef)} className="nav-item nav-link">Skills</button>
          <button onClick={() => scrollToSection(experienceRef)} className="nav-item nav-link">Roles</button>
          <button onClick={() => scrollToSection(aboutRef)} className="nav-item nav-link">Contact</button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground z-50 p-2"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                gsap.fromTo(menu, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
              } else {
                gsap.to(menu, { 
                  opacity: 0, 
                  y: -20, 
                  duration: 0.3, 
                  ease: 'power2.in',
                  onComplete: () => menu.classList.add('hidden')
                });
              }
            }
          }}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile menu overlay */}
        <div id="mobile-menu" className="hidden fixed inset-0 z-40 bg-background flex flex-col justify-center items-center gap-8 p-6">
          <button 
            className="absolute top-6 right-[4vw] p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                gsap.to(menu, { 
                  opacity: 0, 
                  y: -20, 
                  duration: 0.3, 
                  ease: 'power2.in',
                  onComplete: () => menu.classList.add('hidden')
                });
              }
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <button onClick={() => { scrollToSection(projectsRef); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="text-2xl font-heading font-medium">Work</button>
          <button onClick={() => { scrollToSection(skillsRef); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="text-2xl font-heading font-medium">Skills</button>
          <button onClick={() => { scrollToSection(experienceRef); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="text-2xl font-heading font-medium">Roles</button>
          <button onClick={() => { scrollToSection(aboutRef); document.getElementById('mobile-menu')?.classList.add('hidden'); }} className="text-2xl font-heading font-medium">Contact</button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" ref={heroRef} className="section-pinned z-10">
        <div className="hero-bg absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.35)] to-[rgba(5,6,11,0.65)]" />
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-[6vw]">
          {/* Headline */}
            <div className="headline-container text-center perspective-1000">
              <h1 className="font-heading font-bold text-[clamp(44px,8vw,92px)] text-foreground leading-[0.9] tracking-[-0.03em] mb-6">
                <span className="headline-word inline-block">MANKALA</span><br />
                <span className="headline-word inline-block text-accent">HARSHITH</span> <span className="headline-word inline-block">kumar</span>
              </h1>
              <p className="subheadline font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-center gap-3">
                <span className="accent-line w-8 h-[1px] bg-accent" />
                COMPUTER SCIENCE UNDERGRADUATE
                <span className="accent-line w-8 h-[1px] bg-accent" />
              </p>
            <p className="subheadline mt-6 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground">
              PROJECTS • SYSTEMS • WEB
            </p>
            <div className="accent-line mt-6 mx-auto w-[34vw] h-[2px] bg-accent origin-center" />
          </div>
          
          {/* Bottom content */}
          <div className="absolute bottom-[12vh] left-0 right-0 px-[6vw] flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="hero-desc max-w-[28vw] text-base text-[#A7B0C8] leading-relaxed hidden md:block">
              I build full-stack apps and hardware-integrated systems. Clean code, clear UX, and performance-first thinking.
            </p>
            <div className="hero-cta flex flex-col items-start md:items-end gap-4">
              <button 
                onClick={() => scrollToSection(projectsRef)}
                className="btn-primary flex items-center gap-2"
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </button>
              <a 
                href="https://github.com/Harshith0525" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7B0C8] hover:text-accent transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Bottom animated line */}
          <div className="bottom-line absolute bottom-[6vh] left-1/2 -translate-x-1/2 w-[2px] h-[6vh] bg-accent origin-top animate-pulse-line" />
        </div>
      </section>

      {/* Section 2: Projects */}
      <section id="work" ref={projectsRef} className="section-pinned z-20">
        <div className="projects-bg absolute inset-0">
          <img 
            src="/projects-bg.jpg" 
            alt="Projects background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.5)] to-[rgba(5,6,11,0.75)]" />
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col px-[6vw] py-[10vh]">
          {/* Section label */}
          <p className="projects-label font-mono text-sm uppercase tracking-[0.12em] text-accent text-center mb-12">
            PROJECTS
          </p>
          
          {/* Project cards */}
          <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Project A */}
            <a 
              href="https://github.com/Harshith0525/Online-Blood-Donation-Management-System"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-left w-full md:w-[38vw] card-border p-8 bg-[rgba(5,6,11,0.6)] backdrop-blur-sm block hover:bg-[rgba(11,14,26,0.8)] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7B0C8]">Web Application</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 flex items-center gap-3">
                Online Blood Donation System
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </h3>
              <div className="project-underline w-[60%] h-[2px] bg-accent mb-4 origin-left" />
              <p className="text-[#A7B0C8] text-sm leading-relaxed mb-6">
                A full-stack platform for donor registration, matching, and scheduling with secure PHP/SQL backend.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'].map((tag) => (
                  <span key={tag} className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-[rgba(242,245,255,0.12)] text-[#A7B0C8]">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
            
            {/* Project B */}
            <a 
              href="https://github.com/Harshith0525"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-right w-full md:w-[38vw] card-border p-8 bg-[rgba(5,6,11,0.6)] backdrop-blur-sm block hover:bg-[rgba(11,14,26,0.8)] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7B0C8]">Hardware</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 flex items-center gap-3">
                Customer-Following Trolley
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </h3>
              <div className="project-underline w-[60%] h-[2px] bg-accent mb-4 origin-left" />
              <p className="text-[#A7B0C8] text-sm leading-relaxed mb-6">
                Autonomous shopping cart using Arduino, ultrasonic sensors, and motor drivers for follow-mode navigation.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Arduino', 'C++', 'Sensors', 'Hardware'].map((tag) => (
                  <span key={tag} className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-[rgba(242,245,255,0.12)] text-[#A7B0C8]">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
          
          {/* CTA */}
          <div className="projects-cta text-center mt-8">
            <a 
              href="https://github.com/Harshith0525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Explore on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section id="skills" ref={skillsRef} className="section-pinned z-30">
        <div className="skills-bg absolute inset-0">
          <img 
            src="/skills-bg.jpg" 
            alt="Skills background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.55)] to-[rgba(5,6,11,0.8)]" />
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-[6vw]">
          {/* Section label */}
          <p className="skills-label absolute top-[10vh] left-1/2 -translate-x-1/2 font-mono text-sm uppercase tracking-[0.12em] text-accent">
            SKILLS
          </p>
          
          {/* Headline */}
          <div className="skills-headline-container text-center perspective-1000 mb-16">
            <h2 className="font-heading font-bold text-[clamp(32px,5vw,64px)] text-foreground leading-[0.95] tracking-[-0.02em]">
              <span className="skills-headline-word inline-block">TECHNICAL</span>
              <br />
              <span className="skills-headline-word inline-block">CAPABILITIES</span>
            </h2>
            <div className="skills-underline mt-6 mx-auto w-[30vw] h-[2px] bg-accent origin-center" />
          </div>
          
          {/* Skills lists */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left list */}
            <div className="skills-list-left">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-4">LANGUAGES</p>
              <ul className="space-y-2">
                {['JAVA • PYTHON • C++', 'JAVASCRIPT • SQL'].map((item, i) => (
                  <li key={i} className="font-mono text-sm uppercase tracking-wider text-[#A7B0C8]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right list */}
            <div className="skills-list-right">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-4">SYSTEMS</p>
              <ul className="space-y-2">
                {['DATA STRUCTURES', 'ALGORITHMS • OOP'].map((item, i) => (
                  <li key={i} className="font-mono text-sm uppercase tracking-wider text-[#A7B0C8]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Experience */}
      <section id="experience" ref={experienceRef} className="section-flowing z-40 bg-background py-[10vh] px-[6vw]">
        <div className="max-w-6xl mx-auto">
          <div className="experience-heading mb-16">
            <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-bold text-foreground mb-4">
              ROLES & CONTRIBUTIONS
            </h2>
            <p className="text-[#A7B0C8] max-w-[46vw] text-base leading-relaxed">
              Academic leadership, technical contributions, and hands-on project management.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line-animate timeline-line left-0 md:left-[4px] top-0 bottom-0 origin-top" />
            
            {/* Experience entries */}
            <div className="space-y-12 pl-8 md:pl-12">
              {[
                {
                  role: 'Full-Stack Project Lead',
                  context: 'Blood Donation Platform',
                  description: 'Designed DB schema, built auth flows, and implemented donor-recipient matching.',
                  icon: <Database className="w-4 h-4" />
                },
                {
                  role: 'Hardware-Software Integration',
                  context: 'Autonomous Trolley',
                  description: 'Sensor fusion, motor control, and safety-tested navigation logic.',
                  icon: <Cpu className="w-4 h-4" />
                },
                {
                  role: 'Peer Tutor / Coding Mentor',
                  context: 'University CS Circle',
                  description: 'Conducted problem-solving sessions in DSA and OOP.',
                  icon: <Code2 className="w-4 h-4" />
                }
              ].map((exp, i) => (
                <div key={i} className="experience-entry relative">
                  <div className="timeline-dot -left-8 md:-left-[calc(0.75rem+4px)] top-1" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent">{exp.icon}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7B0C8]">{exp.context}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{exp.role}</h3>
                  <p className="text-[#A7B0C8] text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Education */}
      <section ref={educationRef} className="section-flowing z-40 bg-background py-[10vh] px-[6vw]">
        <div className="max-w-6xl mx-auto">
          <h2 className="education-heading font-heading text-[clamp(32px,4vw,56px)] font-bold text-foreground mb-12">
            EDUCATION
          </h2>
          
          <div className="space-y-8">
            {[
              {
                institution: 'Marri Laxman Reddy Institute of Technology and Management',
                program: 'B.E. Computer Science',
                year: '2021 – 2025',
                details: 'Coursework: DSA, OOP, DBMS, OS, Web Technologies',
                gpa: 'GPA: 7.48'
              },
              {
                institution: 'Sri Chaitanya Boys Junior College',
                program: 'Intermediate (MPC)',
                year: '2019 – 2021',
                details: '',
                gpa: 'GPA: 7.84'
              },
              {
                institution: 'Z.P. High School',
                program: 'Secondary Education',
                year: '2018 – 2019',
                details: '',
                gpa: 'GPA: 7.3'
              }
            ].map((edu, i) => (
              <div key={i} className="education-card card-border p-6 bg-[rgba(11,14,26,0.5)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{edu.institution}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{edu.year}</span>
                </div>
                <div className="w-full h-[1px] bg-[rgba(242,245,255,0.12)] mb-3" />
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <p className="text-[#A7B0C8] text-sm">{edu.program}</p>
                  {edu.gpa && <span className="font-mono text-xs text-accent">{edu.gpa}</span>}
                </div>
                {edu.details && (
                  <p className="text-[#A7B0C8] text-xs mt-2">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: About + Contact */}
      <section id="contact" ref={aboutRef} className="section-flowing z-40 bg-background-secondary py-[10vh] px-[6vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: About */}
            <div className="about-left">
              <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-bold text-foreground mb-6">
                ABOUT
              </h2>
              <p className="text-[#A7B0C8] text-base leading-relaxed mb-8">
                I'm a CS undergrad who enjoys turning ideas into working systems—whether it's a web app used by real people or a hardware prototype that moves. I care about clarity, performance, and maintainable code.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm uppercase tracking-wider text-[#A7B0C8]">Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm text-[#A7B0C8]">harshithkumarmankala883@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm text-[#A7B0C8]">+91-6300556597</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/Harshith0525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[rgba(242,245,255,0.12)] text-[#A7B0C8] hover:text-accent hover:border-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/harshith-kumar-mankala-36a9232a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[rgba(242,245,255,0.12)] text-[#A7B0C8] hover:text-accent hover:border-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.hackerrank.com/profile/harshithkumarma1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[rgba(242,245,255,0.12)] text-[#A7B0C8] hover:text-accent hover:border-accent transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div className="about-right">
              <div className="card-border p-8 bg-[rgba(5,6,11,0.6)]">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
                <form 
                  onSubmit={handleContactSubmit}
                  className="space-y-4"
                >
                  <div>
                    <input 
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-transparent border border-[rgba(242,245,255,0.12)] text-foreground placeholder:text-[#A7B0C8] focus:border-accent focus:outline-none transition-colors font-mono text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-transparent border border-[rgba(242,245,255,0.12)] text-foreground placeholder:text-[#A7B0C8] focus:border-accent focus:outline-none transition-colors font-mono text-sm"
                      required
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-[rgba(242,245,255,0.12)] text-foreground placeholder:text-[#A7B0C8] focus:border-accent focus:outline-none transition-colors font-mono text-sm resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toaster position="bottom-right" richColors />

      {/* Section 7: Footer */}
      <footer ref={footerRef} className="section-flowing z-40 bg-background py-[8vh] px-[6vw]">
        <div className="footer-content max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold tracking-[0.15em] text-foreground mb-4">
            MANKALA
          </h2>
          <p className="font-mono text-sm text-[#A7B0C8] mb-8">
            Built with care. Open to opportunities.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/Harshith0525"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7B0C8] hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/harshith-kumar-mankala-36a9232a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7B0C8] hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:harshithkumarmankala883@gmail.com"
              className="text-[#A7B0C8] hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="font-mono text-xs text-[#A7B0C8]">
            © 2026 Mankala Harshith kumar
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
