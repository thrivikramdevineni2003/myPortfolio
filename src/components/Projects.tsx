import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

interface ProjectsProps {
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image: string;
    featured: boolean;
  }>;
}

const Projects = ({ projects }: ProjectsProps) => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="works" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Featured Case Studies</h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my creative journey from concept to execution
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
                      {project.featured ? 'Featured Project' : 'Case Study'}
                    </Badge>
                    <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {project.description || 'Innovative solution showcasing modern development practices and cutting-edge technologies. Built with attention to detail and user experience in mind.'}
                    </p>
                  </div>
                </div>
                
                {project.technologies && (
                  <div className="flex gap-3 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm px-3 py-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="flex gap-6 pt-4">
                  <Button 
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 px-8"
                    asChild
                  >
                    <a href={project.github || project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View Project
                    </a>
                  </Button>
                  
                  {project.github && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 hover:bg-foreground hover:text-background px-8"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <Card className="overflow-hidden border-border/20 hover:border-border/40 transition-colors duration-300 bg-muted/5">
                  <div className="aspect-[16/10] bg-muted/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto">
                        <ExternalLink className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-foreground">{project.title}</p>
                        <p className="text-muted-foreground">Project Preview</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
