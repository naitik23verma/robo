import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Fusion</span>
          </Link>

          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-24">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Simple, transparent pricing that grows with your business.
          </p>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Pricing plans coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
