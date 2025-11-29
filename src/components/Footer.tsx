import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-2">Updates?</h3>
            <p className="text-sm text-muted-foreground mb-6">Sign in to our newsletter.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="jane@framer.com"
                className="rounded-full"
              />
              <Button 
                size="icon"
                className="rounded-full bg-foreground hover:bg-foreground/90 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Site map */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-4">Site map.</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-lg font-medium hover:text-muted-foreground transition-colors">Home.</a></li>
              <li><a href="#services" className="text-lg font-medium hover:text-muted-foreground transition-colors">Services.</a></li>
              <li><a href="#team" className="text-lg font-medium hover:text-muted-foreground transition-colors">Team.</a></li>
              <li><a href="#contact" className="text-lg font-medium hover:text-muted-foreground transition-colors">Contact.</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-4">Social.</h4>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" className="text-lg font-medium hover:text-muted-foreground transition-colors">IG.</a></li>
              <li><a href="https://behance.net" className="text-lg font-medium hover:text-muted-foreground transition-colors">IN.</a></li>
              <li><a href="https://dribbble.com" className="text-lg font-medium hover:text-muted-foreground transition-colors">FB.</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p>Made by Volterā.</p>
              <p>Last updated 11/12/25.</p>
              <p>Copyright 2025 volterā. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Terms of service.</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy policy.</a>
            </div>
          </div>
        </div>

        {/* Large background text */}
        <div className="relative mt-16 overflow-hidden">
          <div className="text-[20vw] font-bold text-muted/10 leading-none pointer-events-none select-none">
            volterā
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
