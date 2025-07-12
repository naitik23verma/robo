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
  Check,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Fusion</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <Button
              variant="outline"
              className="border-primary/20 hover:bg-primary/5"
            >
              Sign In
            </Button>
            <Button className="gradient-bg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="container py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-3 w-3 mr-1" />
            New: AI-powered workflows
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Build the future with
            <span className="gradient-text block mt-2">
              intelligent automation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Transform your workflow with cutting-edge AI technology. Streamline
            operations, boost productivity, and unlock new possibilities for
            your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-bg shadow-glow text-base px-8"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Watch Demo
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by 50,000+ teams worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-muted rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Powerful features designed to transform how you work and
              collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimize your workflow with AI-powered automation that works at the speed of thought.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description:
                  "Bank-grade security with end-to-end encryption to keep your data safe and compliant.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Seamless collaboration tools that bring your team together, no matter where they are.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Deep insights and real-time analytics to help you make data-driven decisions.",
              },
              {
                icon: Sparkles,
                title: "AI-Powered",
                description:
                  "Harness the power of artificial intelligence to automate repetitive tasks and boost productivity.",
              },
              {
                icon: Check,
                title: "Quality Assured",
                description:
                  "Built-in quality controls and automated testing ensure your projects meet the highest standards.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="fade-in-on-scroll border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-glow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "50K+",
                label: "Active Users",
                description: "Growing every day",
              },
              {
                number: "99.9%",
                label: "Uptime",
                description: "Reliable & fast",
              },
              {
                number: "2M+",
                label: "Tasks Automated",
                description: "Time saved",
              },
            ].map((stat, index) => (
              <div key={index} className="fade-in-on-scroll space-y-2">
                <div className="text-4xl lg:text-5xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of teams already using Fusion to automate their
              processes and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-bg shadow-glow text-base px-8"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Fusion</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Empowering teams to build the future with intelligent automation
                and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-16 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Fusion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
