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
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Welcome to</p>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground">
              {personal.name}
            </h1>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-4xl font-light text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personal.title}
          </motion.h2>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 font-medium px-8 py-6 text-lg"
              onClick={scrollToAbout}
            >
              View Work
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-foreground hover:text-background transition-colors duration-300 font-medium px-8 py-6 text-lg"
              onClick={scrollToAbout}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href={contact.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={contact.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;