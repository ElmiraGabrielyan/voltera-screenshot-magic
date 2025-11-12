import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Home.
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Projects.
            </a>
            <a href="#about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              About.
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Blog.
            </a>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl font-bold tracking-tight">volterā.</h1>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              X.
            </a>
            <a href="https://instagram.com" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              IG.
            </a>
            <a href="https://behance.net" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              BE.
            </a>
            <a href="https://dribbble.com" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              DB.
            </a>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-medium rounded-full ml-4"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
