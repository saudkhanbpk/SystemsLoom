import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online store with AI-powered recommendations and seamless checkout experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Node.js", "AI", "E-commerce"],
    category: "Web Development",
    link: "#"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app with social features, workout tracking, and progress analytics",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["React Native", "Firebase", "Health"],
    category: "Mobile Development",
    link: "#"
  },
  {
    id: 3,
    title: "AI Business Dashboard",
    description: "Intelligent business intelligence platform with automated insights and predictive analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Vue.js", "Python", "ML", "Analytics"],
    category: "AI Integration",
    link: "#"
  },
  {
    id: 4,
    title: "SaaS Marketing Platform",
    description: "Comprehensive marketing automation platform with email campaigns and lead management",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Django", "Marketing", "SaaS"],
    category: "Marketing Tools",
    link: "#"
  },
  {
    id: 5,
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with ordering, inventory, and analytics",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Angular", "Express", "MongoDB"],
    category: "Web Development",
    link: "#"
  },
  {
    id: 6,
    title: "Healthcare Mobile App",
    description: "Patient management and telemedicine app with appointment scheduling and video calls",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Flutter", "WebRTC", "Healthcare"],
    category: "Mobile Development",
    link: "#"
  }
];

const categories = ["All", "Web Development", "Mobile Development", "AI Integration", "Marketing Tools"];

export default function Portfolio() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-slate mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Showcasing our latest projects and success stories across various 
              industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-tech-blue text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-tech-blue/10 text-tech-blue">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-dark-slate mb-3">
                    {project.title}
                  </h3>
                  <p className="text-light-slate mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Deep dives into some of our most successful projects and the 
              impact they've had on our clients' businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-marketing-red/10 text-marketing-red">
                  Success Story
                </Badge>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">
                  200% Revenue Growth for E-commerce Client
                </h3>
                <p className="text-light-slate mb-6">
                  How we transformed a traditional retail business into a 
                  thriving online marketplace using AI-powered recommendations 
                  and strategic digital marketing.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-marketing-red">200%</div>
                    <div className="text-sm text-light-slate">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tech-blue">150%</div>
                    <div className="text-sm text-light-slate">Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-green">85%</div>
                    <div className="text-sm text-light-slate">Conversion Rate</div>
                  </div>
                </div>
                <Button className="bg-marketing-red text-white hover:bg-marketing-red/90">
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-accent-purple/10 text-accent-purple">
                  Innovation
                </Badge>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">
                  AI-Powered Customer Service Automation
                </h3>
                <p className="text-light-slate mb-6">
                  Implementing intelligent chatbots and automation systems that 
                  reduced response times by 80% while maintaining high customer 
                  satisfaction scores.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-purple">80%</div>
                    <div className="text-sm text-light-slate">Faster Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-green">95%</div>
                    <div className="text-sm text-light-slate">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tech-blue">60%</div>
                    <div className="text-sm text-light-slate">Cost Reduction</div>
                  </div>
                </div>
                <Button className="bg-accent-purple text-white hover:bg-accent-purple/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses 
              we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-accent-orange mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-light-slate italic">
                    "TechConsults transformed our online presence completely. 
                    The combination of their technical expertise and marketing 
                    strategy delivered results beyond our expectations."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-dark-slate">Sarah Miller</div>
                    <div className="text-light-slate text-sm">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-accent-orange mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-light-slate italic">
                    "The AI integration they implemented automated 70% of our 
                    customer service inquiries while improving customer satisfaction. 
                    Incredible results!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-marketing-red rounded-full flex items-center justify-center text-white font-bold mr-4">
                    DJ
                  </div>
                  <div>
                    <div className="font-semibold text-dark-slate">David Johnson</div>
                    <div className="text-light-slate text-sm">CTO, InnovateCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-accent-orange mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-light-slate italic">
                    "Working with TechConsults was a game-changer. Their mobile app 
                    helped us reach a completely new market segment and doubled 
                    our customer base."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center text-white font-bold mr-4">
                    EB
                  </div>
                  <div>
                    <div className="font-semibold text-dark-slate">Emily Brown</div>
                    <div className="text-light-slate text-sm">Founder, RetailPlus</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-slate to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Join the growing list of businesses that have transformed their 
            operations with our integrated technology and marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-tech-blue to-marketing-red text-white hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-dark-slate"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
