import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

interface AboutProps {
  about: {
    bio: string;
    education: Array<{
      degree: string;
      field: string;
      institution: string;
      year: string;
    }>;
    certifications: string[];
  };
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="py-20 relative section-bg">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass hover:glow-primary transition-all duration-300 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {about.bio}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover:glow-secondary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                    <h3 className="text-2xl font-bold text-secondary">Education</h3>
                  </div>
                  <div className="space-y-4">
                    {about.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-secondary/30 pl-4">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-secondary">{edu.field}</p>
                        <p className="text-muted-foreground text-sm">{edu.institution} • {edu.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover:glow-accent transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-accent">Certifications</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {about.certifications.map((cert, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="glass text-sm px-3 py-1 hover:glow-accent transition-all duration-300"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;