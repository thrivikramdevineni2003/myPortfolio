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
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">About Me</h2>
            <div className="w-24 h-px bg-foreground mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {about.bio}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-20">
              <Card className="p-8 border-border/20 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  {about.education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.field}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution} • {edu.year}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-border/20 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6" />
                  <h3 className="text-2xl font-semibold">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {about.certifications.map((cert, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-sm px-3 py-2"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;