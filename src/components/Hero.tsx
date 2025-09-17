import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  personal: {
    name: string;
    title: string;
    subtitle: string;
  };
  contact: {
    social: {
      github: string;
      linkedin: string;
    };
    email: string;
  };
}

const Hero = ({ personal, contact }: HeroProps) => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orb */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float opacity-60"></div>
        
        {/* Secondary floating orb */}
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full blur-3xl animate-float opacity-70" 
          style={{ animationDelay: '2s' }}
        ></div>
        
        {/* Accent floating orb */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl animate-float opacity-50" 
          style={{ animationDelay: '4s' }}
        ></div>
        
        {/* Additional subtle orbs */}
        <div 
          className="absolute top-16 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float opacity-80" 
          style={{ animationDelay: '1s' }}
        ></div>
        
        <div 
          className="absolute bottom-16 left-1/3 w-48 h-48 bg-secondary/8 rounded-full blur-2xl animate-float opacity-60" 
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personal.name}
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personal.title}
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personal.subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="glass glow-primary hover:glow-secondary transition-all duration-300 font-semibold px-8"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;