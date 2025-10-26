import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cloud, Code, Settings } from "lucide-react";

interface SkillsProps {
  skills: Array<{
    category: string;
    items: string[];
  }>;
}

const Skills = ({ skills }: SkillsProps) => {
  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cybersecurity':
        return <Shield className="h-6 w-6" />;
      case 'devops & cloud':
        return <Cloud className="h-6 w-6" />;
      case 'programming':
        return <Code className="h-6 w-6" />;
      case 'tools & technologies':
        return <Settings className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  const getColorForCategory = (index: number) => {
    const colors = ['text-primary', 'text-secondary', 'text-accent', 'text-primary'];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 relative section-bg">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover:glow-primary transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className={`flex items-center gap-3 mb-6 ${getColorForCategory(index)}`}>
                    <div className="p-2 rounded-lg glass group-hover:glow-primary transition-all duration-300">
                      {getIconForCategory(skillCategory.category)}
                    </div>
                    <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="glass text-sm px-3 py-2 hover:glow-secondary transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;