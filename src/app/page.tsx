"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSponsor, setCurrentSponsor] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

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

  // Auto-sliding gallery effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [galleryImages.length]);

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

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-orbitron text-foreground">
                  Robotics Club
                </span>
                <span className="text-xs text-muted-foreground font-montserrat">
                  MANIT Bhopal
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#gallery"
              className="text-muted-foreground hover:text-foreground transition-colors font-montserrat"
            >
              Gallery
            </a>
            <a
              href="#events"
              className="text-muted-foreground hover:text-foreground transition-colors font-montserrat"
            >
              Events
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors font-montserrat"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors font-montserrat"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-montserrat"
            >
              Contact
            </a>
            <Button className="bg-gray-800 hover:bg-gray-700 font-montserrat">
              Join Club
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-orbitron">
              Welcome to Robotics Club – MANIT Bhopal
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-montserrat">
              Pioneering innovation in robotics and automation. Join us in
              building the future through cutting-edge technology, collaborative
              learning, and groundbreaking research.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-700 text-base px-8 font-montserrat"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 font-montserrat"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Sliding Gallery Highlights */}
      <section id="gallery" className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
              Gallery Highlights
            </h2>
            <p className="text-lg text-gray-600 font-montserrat">
              Capturing moments of innovation, collaboration, and achievement
            </p>
          </div>

          {/* Main Featured Image with Auto-Slide */}
          <div className="relative mb-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={galleryImages[currentGalleryIndex].src}
                alt={galleryImages[currentGalleryIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold font-orbitron">
                    {galleryImages[currentGalleryIndex].title}
                  </h3>
                </div>
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentGalleryIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <Card
                key={image.id}
                className={`overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
                  index === currentGalleryIndex % 4
                    ? "ring-2 ring-gray-800"
                    : ""
                }`}
                onClick={() => setCurrentGalleryIndex(index)}
              >
                <div className="aspect-video">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Auto-slide indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 font-montserrat">
              Images automatically change every 3 seconds
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Event: RoboMAX */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 font-montserrat">
                <Calendar className="h-3 w-3 mr-1" />
                Upcoming Event
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
                RoboMAX 2024
              </h2>
              <p className="text-lg text-gray-600 font-montserrat">
                The biggest robotics competition of the year
              </p>
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-orbitron mb-2">
                      National Robotics Championship
                    </h3>
                    <div className="flex items-center text-gray-600 font-montserrat mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      April 25-27, 2024
                    </div>
                    <div className="flex items-center text-gray-600 font-montserrat mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      MANIT Campus, Bhopal
                    </div>
                  </div>

                  <p className="text-gray-600 font-montserrat">
                    Join us for three days of intense competition, innovation
                    showcases, and networking with the brightest minds in
                    robotics. Teams from across India will compete in multiple
                    categories including autonomous navigation, combat robotics,
                    and AI challenges.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 font-montserrat">
                      Event Highlights:
                    </h4>
                    <ul className="text-gray-600 space-y-1 font-montserrat">
                      <li>• 100+ participating teams</li>
                      <li>• ₹5,00,000+ in prize money</li>
                      <li>• Industry expert judges</li>
                      <li>• Live demonstrations</li>
                    </ul>
                  </div>

                  <Button className="bg-gray-800 hover:bg-gray-700 font-montserrat">
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
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events & Competitions with Statistics */}
      <section id="events" className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Events Content */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
                  Past Events & Competitions
                </h2>
                <p className="text-lg text-gray-600 font-montserrat">
                  Our journey of excellence and achievement in robotics
                  competitions
                </p>
              </div>

              <div className="space-y-8">
                {events.map((event, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
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
                          <h3 className="text-xl font-bold text-gray-900 font-orbitron">
                            {event.title}
                          </h3>
                          <Badge className="bg-green-100 text-green-800 font-montserrat">
                            <Trophy className="h-3 w-3 mr-1" />
                            {event.achievement}
                          </Badge>
                        </div>

                        <div className="flex items-center text-gray-600 font-montserrat">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>

                        <p className="text-gray-600 font-montserrat">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 font-orbitron mb-8 text-center">
                  What Our Members Say
                </h3>

                <Card className="p-8 bg-gray-50">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <blockquote className="text-lg text-gray-700 font-montserrat mb-4 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>

                    <div>
                      <h4 className="font-bold text-gray-900 font-montserrat">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 font-montserrat">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Club Statistics Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 font-orbitron mb-6">
                  Club Statistics
                </h3>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 font-orbitron">
                      150+
                    </div>
                    <div className="text-gray-600 font-montserrat">
                      Active Members
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 font-orbitron">
                      25+
                    </div>
                    <div className="text-gray-600 font-montserrat">
                      Projects Completed
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 font-orbitron">
                      50+
                    </div>
                    <div className="text-gray-600 font-montserrat">
                      Competitions Won
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 font-orbitron">
                      5
                    </div>
                    <div className="text-gray-600 font-montserrat">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Participation & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
              Participation & Achievements
            </h2>
            <p className="text-lg text-gray-600 font-montserrat">
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
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-orbitron mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 font-montserrat">
                  {achievement.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects by Our Team */}
      <section id="projects" className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
              Projects by Our Team
            </h2>
            <p className="text-lg text-gray-600 font-montserrat">
              Innovative solutions and cutting-edge robotics projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="font-orbitron">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-montserrat">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="font-montserrat"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
                About Us
              </h2>
              <p className="text-lg text-gray-600 font-montserrat">
                Empowering the next generation of robotics engineers and
                innovators
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
                  The Robotics Club at MANIT Bhopal is a vibrant community of
                  passionate engineers, innovators, and technology enthusiasts.
                  Since our establishment in 2019, we have been at the forefront
                  of robotics education and research.
                </p>

                <p className="text-gray-600 font-montserrat leading-relaxed">
                  Our mission is to provide hands-on experience in robotics,
                  foster innovation, and prepare students for the challenges of
                  tomorrow's technology landscape. We believe in learning by
                  doing, collaborating across disciplines, and pushing the
                  boundaries of what's possible.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 font-montserrat">
                      Innovation
                    </h3>
                    <p className="text-sm text-gray-600 font-montserrat">
                      Pushing boundaries
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 font-montserrat">
                      Collaboration
                    </h3>
                    <p className="text-sm text-gray-600 font-montserrat">
                      Working together
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 font-montserrat">
              Testimonials from our community and industry partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 font-montserrat mb-4 italic">
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
                    <h4 className="font-bold text-gray-900 font-montserrat">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-montserrat">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
              Our Sponsors
            </h2>
            <p className="text-lg text-gray-600 font-montserrat">
              Partnering with industry leaders to advance robotics education
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="aspect-video bg-white p-6 rounded-lg shadow-sm flex items-center justify-center"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-orbitron mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 font-montserrat">
                Get in touch with us to learn more about joining our club
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 font-orbitron mb-6">
                  Send us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="Inquiry about joining the club"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="Tell us about your interest in robotics..."
                    />
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-700 font-montserrat">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>

              {/* Campus Location Map & Contact Info */}
              <div className="space-y-8">
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 font-orbitron mb-6">
                    Visit Our Campus
                  </h3>

                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 font-montserrat">
                        Campus Location Map
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 font-montserrat">
                          Address
                        </h4>
                        <p className="text-gray-600 font-montserrat">
                          Maulana Azad National Institute of Technology
                          <br />
                          Bhopal, Madhya Pradesh 462003
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900 font-montserrat">
                          Phone
                        </h4>
                        <p className="text-gray-600 font-montserrat">
                          +91 9876543210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900 font-montserrat">
                          Email
                        </h4>
                        <p className="text-gray-600 font-montserrat">
                          robotics@manit.ac.in
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-gray-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold font-orbitron">
                    Robotics Club
                  </span>
                  <span className="text-sm text-gray-400 font-montserrat">
                    MANIT Bhopal
                  </span>
                </div>
              </div>
              <p className="text-gray-400 font-montserrat">
                Building the future through innovation, collaboration, and
                cutting-edge robotics technology.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-orbitron">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 font-montserrat">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="hover:text-white transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-orbitron">Resources</h3>
              <ul className="space-y-2 text-gray-400 font-montserrat">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Workshop Materials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-orbitron">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 font-montserrat">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  robotics@manit.ac.in
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9876543210
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  MANIT Bhopal, MP 462003
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-montserrat">
            <p>
              &copy; 2024 Robotics Club - MANIT Bhopal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
