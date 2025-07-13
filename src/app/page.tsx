"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  GradientBorderCard,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Star,
  Phone,
  Mail,
  MapPinIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Award,
  Target,
  Zap,
  Cpu,
  Wrench,
  Lightbulb,
  Sparkles,
  Rocket,
  Code,
  Brain,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ClientOnly from "@/components/ClientOnly";

const Robot3D = dynamic(() => import("@/components/Robot3D"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center"><div className="text-muted-foreground">Loading 3D Model...</div></div>
});
import CircularGallery from "@/components/CircularGallery";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSponsor, setCurrentSponsor] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      alt: "Robot competition arena",
      title: "Competition Arena",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      alt: "Team working on robot",
      title: "Team Collaboration",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      alt: "Advanced robotics lab",
      title: "Robotics Lab",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=250&fit=crop",
      alt: "Students programming robots",
      title: "Programming Session",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      alt: "Robot demonstration",
      title: "Live Demo",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop",
      alt: "Award ceremony",
      title: "Award Ceremony",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      alt: "Workshop session",
      title: "Workshop",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      alt: "Innovation showcase",
      title: "Innovation Showcase",
    },
  ];

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Team Captain",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote:
        "Participating in robotics has completely transformed my engineering perspective. The hands-on experience is invaluable.",
    },
    {
      name: "Priya Patel",
      role: "AI Team Lead",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      quote:
        "The collaborative environment and cutting-edge projects have prepared me for real-world challenges.",
    },
    {
      name: "Rohit Kumar",
      role: "Hardware Specialist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      quote:
        "From concept to competition, every project pushes us to innovate and excel beyond our limits.",
    },
  ];

  const sponsors = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/120x60/6B7280/FFFFFF?text=TechCorp",
    },
    {
      name: "Innovation Labs",
      logo: "https://via.placeholder.com/120x60/6B7280/FFFFFF?text=Innovation+Labs",
    },
    {
      name: "Future Systems",
      logo: "https://via.placeholder.com/120x60/6B7280/FFFFFF?text=Future+Systems",
    },
    {
      name: "RoboTech Solutions",
      logo: "https://via.placeholder.com/120x60/6B7280/FFFFFF?text=RoboTech",
    },
    {
      name: "AI Dynamics",
      logo: "https://via.placeholder.com/120x60/6B7280/FFFFFF?text=AI+Dynamics",
    },
  ];

  const projects = [
    {
      title: "Autonomous Drone",
      description:
        "AI-powered navigation system for autonomous flight control and obstacle avoidance.",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop",
      tech: ["Python", "OpenCV", "ROS"],
    },
    {
      title: "Robotic Arm",
      description:
        "6-DOF robotic arm with precision control for industrial automation applications.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      tech: ["Arduino", "Servo Control", "Kinematics"],
    },
    {
      title: "Line Following Bot",
      description:
        "High-speed line following robot with advanced sensor fusion and PID control.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      tech: ["C++", "Sensors", "PID"],
    },
    {
      title: "Humanoid Robot",
      description:
        "Bipedal humanoid robot with dynamic balance and human-like movement patterns.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      tech: ["Python", "Dynamics", "Control"],
    },
    {
      title: "Mars Rover",
      description:
        "Planetary exploration rover designed for harsh terrain navigation and sample collection.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=200&fit=crop",
      tech: ["Embedded C", "Sensors", "Navigation"],
    },
    {
      title: "Smart Home Bot",
      description:
        "Intelligent home assistant robot with voice recognition and task automation.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
      tech: ["IoT", "AI", "Voice Recognition"],
    },
  ];

  const events = [
    {
      title: "National Robotics Championship",
      date: "March 15, 2024",
      description:
        "Competed against 50+ teams nationwide, secured 2nd position in autonomous navigation category.",
      achievement: "2nd Place",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
    },
    {
      title: "TechFest Mumbai",
      date: "January 20, 2024",
      description:
        "Showcased our humanoid robot at one of India's largest technical festivals.",
      achievement: "Best Innovation",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      title: "RoboWars Regional",
      date: "December 10, 2023",
      description:
        "Dominated the combat robotics arena with our custom-built heavyweight champion.",
      achievement: "Champions",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
    },
  ];

  // Auto-cycling testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycling sponsors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSponsor((prev) => (prev + 1) % sponsors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-7xl z-50 bg-background/80 backdrop-blur-xl rounded-full px-6 py-2 flex items-center justify-between shadow-lg border border-border/40">
        <div className="flex items-center space-x-3">
          <img
            src="/robotics_logo.png"
            alt="Robotics Club Logo"
            className="h-12 w-12 rounded-xl object-cover shadow-lg hover-glow"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold font-orbitron bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Robotics Club
            </span>
            <span className="text-xs text-muted-foreground font-montserrat">
              MANIT Bhopal
            </span>
          </div>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: "#gallery", label: "Gallery" },
            { href: "#events", label: "Events" },
            { href: "#projects", label: "Projects" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-montserrat font-medium hover:scale-105 px-2 py-1 rounded-full"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-gradient-erc hover:shadow-lg hover:scale-105 transition-all duration-300 font-montserrat font-semibold ml-4 rounded-full px-5 py-2">
            <Rocket className="mr-2 h-4 w-4" />
            Join Club
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-full bg-gradient-erc text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMobileNavOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile Dropdown */}
      {mobileNavOpen && (
        <div className="fixed top-[calc(3.5rem+1.5rem)] left-1/2 transform -translate-x-1/2 w-[95vw] max-w-7xl z-40 bg-background/95 backdrop-blur-xl rounded-3xl shadow-lg border border-border/40 flex flex-col items-center py-6 space-y-4 md:hidden">
          {[
            { href: "#gallery", label: "Gallery" },
            { href: "#events", label: "Events" },
            { href: "#projects", label: "Projects" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-montserrat font-medium text-lg px-4 py-2 rounded-full"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full bg-gradient-erc hover:shadow-lg hover:scale-105 transition-all duration-300 font-montserrat font-semibold rounded-full px-5 py-3 text-lg">
            <Rocket className="mr-2 h-5 w-5" />
            Join Club
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Social Media Icons - right side */}
        <motion.div
          className="hidden lg:flex flex-col items-center space-y-6 absolute top-1/2 right-8 transform -translate-y-1/2 z-30"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {[
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Youtube, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors bg-background/80 rounded-full p-3 shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-dark"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="mx-auto max-w-5xl text-center space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-orbitron mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Welcome to Robotics Club
                </span>
                <br />
                <span className="text-foreground">MANIT Bhopal</span>
              </h1>
            </motion.div>

            <motion.div 
              className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto font-montserrat leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering innovation in robotics and automation. Join us in
              building the future through cutting-edge technology, collaborative
              learning, and groundbreaking research.
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-erc hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-10 py-6 font-montserrat font-semibold"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 font-montserrat font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Code className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Floating stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Users, label: "Active Members", value: 150, suffix: "+" },
                { icon: Trophy, label: "Awards Won", value: 50, suffix: "+" },
                { icon: Code, label: "Projects", value: 25, suffix: "+" },
                { icon: Brain, label: "Years", value: 5, suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-erc flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="block mb-2"
                    delay={1 + index * 0.2}
                  />
                  <p className="text-sm text-muted-foreground font-montserrat">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Auto-Sliding Gallery Highlights */}
      <section id="gallery" className="py-4 relative overflow-hidden">
        <div className="container">
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gallery Highlights
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto mb-0">
              Capturing moments of innovation, collaboration, and achievement
            </p>
          </motion.div>

          {/* Main Circular Gallery */}
          <motion.div 
            className="mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CircularGallery
              items={galleryImages.map(img => ({
                image: img.src,
                text: img.title
              }))}
              height={300}
              imageWidth={400}
              scrollSpeed={1.2}
            />
          </motion.div>
        </div>
      </section>

      {/* Upcoming Event: RoboMAX */}
      <section className="py-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-montserrat border-0">
                <Calendar className="h-3 w-3 mr-1" />
                Upcoming Event
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-orbitron mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  RoboMAX 2024
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-montserrat">
                The biggest robotics competition of the year
              </p>
            </div>

            {/* Gradient Border Card Wrapper */}
            <GradientBorderCard className="mb-8">
              <div className="rounded-2xl bg-background/80 backdrop-blur-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-orbitron mb-2">
                        National Robotics Championship
                      </h3>
                      <div className="flex items-center text-muted-foreground font-montserrat mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        April 25-27, 2024
                      </div>
                      <div className="flex items-center text-muted-foreground font-montserrat mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        MANIT Campus, Bhopal
                      </div>
                    </div>

                    <p className="text-muted-foreground font-montserrat">
                      Join us for three days of intense competition, innovation
                      showcases, and networking with the brightest minds in
                      robotics. Teams from across India will compete in multiple
                      categories including autonomous navigation, combat robotics,
                      and AI challenges.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground font-montserrat">
                        Event Highlights:
                      </h4>
                      <ul className="text-muted-foreground space-y-1 font-montserrat">
                        <li>• 100+ participating teams</li>
                        <li>• ₹5,00,000+ in prize money</li>
                        <li>• Industry expert judges</li>
                        <li>• Live demonstrations</li>
                      </ul>
                    </div>

                    <Button className="bg-gradient-erc hover:shadow-lg hover:scale-105 transition-all duration-300 font-montserrat">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
                      alt="RoboMAX 2024"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </GradientBorderCard>
          </div>
        </div>
      </section>

      {/* Past Events & Competitions with Statistics */}
      <section id="events" className="py-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Events Content */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold font-orbitron mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Past Events & Competitions
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground font-montserrat">
                  Our journey of excellence and achievement in robotics
                  competitions
                </p>
              </div>

              <div className="space-y-8">
                {events.map((event, index) => (
                  <GradientBorderCard key={index}>
                    <div className="rounded-2xl bg-background/80 backdrop-blur-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="md:col-span-2 space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-foreground font-orbitron">
                              {event.title}
                            </h3>
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-montserrat border-0">
                              <Trophy className="h-3 w-3 mr-1" />
                              {event.achievement}
                            </Badge>
                          </div>

                          <div className="flex items-center text-muted-foreground font-montserrat">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>

                          <p className="text-muted-foreground font-montserrat">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GradientBorderCard>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-foreground font-orbitron mb-8 text-center">
                  What Our Members Say
                </h3>

                <GradientBorderCard>
                  <div className="rounded-2xl bg-background/80 backdrop-blur-lg p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <blockquote className="text-lg text-foreground font-montserrat mb-4 italic">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>

                      <div>
                        <h4 className="font-bold text-foreground font-montserrat">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-muted-foreground font-montserrat">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </GradientBorderCard>
              </div>
            </div>

            {/* Club Statistics Sidebar */}
            <div className="lg:col-span-1">
              <GradientBorderCard>
                <div className="rounded-2xl bg-background/80 backdrop-blur-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-foreground font-orbitron mb-6">
                    Club Statistics
                  </h3>

                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground font-orbitron">
                        150+
                      </div>
                      <div className="text-muted-foreground font-montserrat">
                        Active Members
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground font-orbitron">
                        25+
                      </div>
                      <div className="text-muted-foreground font-montserrat">
                        Projects Completed
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground font-orbitron">
                        50+
                      </div>
                      <div className="text-muted-foreground font-montserrat">
                        Competitions Won
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground font-orbitron">
                        5
                      </div>
                      <div className="text-muted-foreground font-montserrat">
                        Years of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </GradientBorderCard>
            </div>
          </div>
        </div>
      </section>

      {/* Participation & Achievements */}
      <section className="py-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Participation & Achievements
              </span>
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Recognizing excellence and fostering innovation in robotics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: "National Champions",
                desc: "RoboWars 2023",
              },
              {
                icon: Award,
                title: "Best Innovation",
                desc: "TechFest Mumbai",
              },
              { icon: Star, title: "Excellence Award", desc: "IIT Bombay" },
              {
                icon: Target,
                title: "Top Performer",
                desc: "Regional Championship",
              },
            ].map((achievement, index) => (
              <GradientBorderCard key={index}>
                <div className="rounded-2xl bg-background/80 backdrop-blur-lg p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-erc flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-orbitron mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground font-montserrat">
                    {achievement.desc}
                  </p>
                </div>
              </GradientBorderCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 relative overflow-hidden min-h-[600px] h-full">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-dark"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10 h-full min-h-[600px]">
          <motion.div 
            className="max-w-6xl mx-auto h-full min-h-[600px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold font-orbitron mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>
              <p className="text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto">
                Empowering the next generation of robotics engineers and
                innovators
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-[500px]">
              <motion.div 
                className="space-y-8 h-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-foreground font-montserrat leading-relaxed">
                  The Robotics Club at MANIT Bhopal is a vibrant community of
                  passionate engineers, innovators, and technology enthusiasts.
                  Since our establishment in 2019, we have been at the forefront
                  of robotics education and research.
                </p>

                <p className="text-muted-foreground font-montserrat leading-relaxed">
                  Our mission is to provide hands-on experience in robotics,
                  foster innovation, and prepare students for the challenges of
                  tomorrow's technology landscape. We believe in learning by
                  doing, collaborating across disciplines, and pushing the
                  boundaries of what's possible.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <motion.div 
                    className="text-center"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-erc flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Lightbulb className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground font-montserrat mb-2">
                      Innovation
                    </h3>
                    <p className="text-sm text-muted-foreground font-montserrat">
                      Pushing boundaries
                    </p>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-erc flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground font-montserrat mb-2">
                      Collaboration
                    </h3>
                    <p className="text-sm text-muted-foreground font-montserrat">
                      Working together
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="h-[500px] flex flex-col rounded-2xl overflow-hidden glass"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 flex flex-col h-full">
                  <ClientOnly 
                    fallback={
                      <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl flex items-center justify-center">
                        <div className="text-muted-foreground">Loading 3D Model...</div>
                      </div>
                    }
                  >
                    <Robot3D />
                  </ClientOnly>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What People Say */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-orbitron mb-4">
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Testimonials from our community and industry partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <GradientBorderCard key={i}>
                <div className="rounded-2xl bg-background/80 backdrop-blur-lg p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground font-montserrat mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-montserrat">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-montserrat">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </GradientBorderCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="py-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Sponsors
              </span>
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat">
              Partnering with industry leaders to advance robotics education
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {sponsors.map((sponsor, index) => (
                <GradientBorderCard key={index}>
                  <div
                    className="aspect-video p-6 rounded-lg shadow-sm flex items-center justify-center border border-border/40"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </GradientBorderCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-orbitron mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-montserrat">
                Get in touch with us to learn more about joining our club
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <GradientBorderCard className="p-8 border border-border/40">
                <h3 className="text-xl font-bold text-foreground font-orbitron mb-6">
                  Send us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground font-montserrat mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground font-montserrat mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground font-montserrat mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground font-montserrat mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Inquiry about joining the club"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground font-montserrat mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Tell us about your interest in robotics..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-erc hover:shadow-lg hover:scale-105 transition-all duration-300 font-montserrat">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </GradientBorderCard>

              {/* Campus Location Map & Contact Info */}
              <div className="space-y-8">
                <GradientBorderCard className="p-8 border border-border/40">
                  <h3 className="text-xl font-bold text-foreground font-orbitron mb-6">
                    Visit Our Campus
                  </h3>

                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg mb-6 flex items-center justify-center border border-border/40">
                    <div className="text-center">
                      <MapPinIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground font-montserrat">
                        Campus Location Map
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground font-montserrat">
                          Address
                        </h4>
                        <p className="text-muted-foreground font-montserrat">
                          Maulana Azad National Institute of Technology
                          <br />
                          Bhopal, Madhya Pradesh 462003
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <h4 className="font-medium text-foreground font-montserrat">
                          Phone
                        </h4>
                        <p className="text-muted-foreground font-montserrat">
                          +91 9876543210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                      <div>
                        <h4 className="font-medium text-foreground font-montserrat">
                          Email
                        </h4>
                        <p className="text-muted-foreground font-montserrat">
                          robotics@manit.ac.in
                        </p>
                      </div>
                    </div>
                  </div>
                </GradientBorderCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/robotics_logo.png"
                  alt="Robotics Club Logo"
                  className="h-12 w-12 rounded-xl object-cover shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-orbitron bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Robotics Club
                  </span>
                  <span className="text-sm text-muted-foreground font-montserrat">
                    MANIT Bhopal
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground font-montserrat leading-relaxed">
                Building the future through innovation, collaboration, and
                cutting-edge robotics technology.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 font-orbitron text-lg">Quick Links</h3>
              <ul className="space-y-3 text-muted-foreground font-montserrat">
                {[
                  { href: "#about", label: "About Us" },
                  { href: "#projects", label: "Projects" },
                  { href: "#events", label: "Events" },
                  { href: "#gallery", label: "Gallery" },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 font-orbitron text-lg">Resources</h3>
              <ul className="space-y-3 text-muted-foreground font-montserrat">
                {[
                  { href: "#", label: "Documentation" },
                  { href: "#", label: "Tutorials" },
                  { href: "#", label: "Research Papers" },
                  { href: "#", label: "Workshop Materials" },
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-6 font-orbitron text-lg">Contact Info</h3>
              <ul className="space-y-3 text-muted-foreground font-montserrat">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  robotics@manit.ac.in
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  +91 9876543210
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 mt-1 text-primary" />
                  MANIT Bhopal, MP 462003
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-border/50 mt-16 pt-8 text-center text-muted-foreground font-montserrat"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <p>
              &copy; 2024 Robotics Club - MANIT Bhopal. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
