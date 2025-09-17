import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Settings, Cloud } from "lucide-react";

interface ServicesProps {
  services: Array<{
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
}

const Services = ({ services }: ServicesProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="h-8 w-8" />;
      case 'shield':
        return <Shield className="h-8 w-8" />;
      case 'settings':
        return <Settings className="h-8 w-8" />;
      case 'cloud':
        return <Cloud className="h-8 w-8" />;
      default:
        return <Code className="h-8 w-8" />;
    }
  };

  const getGlowClass = (index: number) => {
    const glows = ['hover:glow-primary', 'hover:glow-secondary', 'hover:glow-accent', 'hover:glow-primary'];
    return glows[index % glows.length];
  };

  return (
    <section id="services" className="py-20 relative section-bg">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Services</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive solutions for your digital transformation needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`glass ${getGlowClass(index)} transition-all duration-300 h-full group cursor-pointer`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl glass group-hover:glow-primary transition-all duration-300 text-primary">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge 
                          key={feature}
                          variant="outline" 
                          className="glass text-xs px-2 py-1 group-hover:glow-secondary transition-all duration-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
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

export default Services;