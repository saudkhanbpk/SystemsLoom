import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Megaphone, 
  Check,
  ArrowRight
} from "lucide-react";

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-slate mb-6">
              Our Services
            </h1>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs, combining 
              cutting-edge technology with strategic marketing expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-gradient-to-b from-white to-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            
            {/* Web Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Web development workspace with multiple monitors" 
                  className="rounded-2xl shadow-xl w-full" 
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-tech-blue/10 text-tech-blue hover:bg-tech-blue/20 mb-4">
                  <Code className="mr-2 h-4 w-4" />
                  Web Development
                </Badge>
                <h2 className="text-4xl font-bold text-dark-slate mb-6">
                  Custom Web Solutions
                </h2>
                <p className="text-lg text-light-slate mb-6 leading-relaxed">
                  We create stunning, responsive websites and powerful web applications 
                  using cutting-edge technologies like React, Vue.js, and modern backend frameworks. 
                  Our solutions are built for performance, scalability, and user experience.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Responsive & Mobile-First Design</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>E-commerce Solutions</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Performance Optimization</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>SEO-Ready Architecture</span>
                  </div>
                </div>
                
                <Link href="/portfolio">
                  <Button className="bg-tech-blue text-white hover:bg-tech-blue/90">
                    View Web Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-marketing-red/10 text-marketing-red hover:bg-marketing-red/20 mb-4">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile Development
                </Badge>
                <h2 className="text-4xl font-bold text-dark-slate mb-6">
                  Mobile App Excellence
                </h2>
                <p className="text-lg text-light-slate mb-6 leading-relaxed">
                  Native iOS and Android apps, as well as cross-platform solutions using 
                  React Native and Flutter. We deliver apps that users love and businesses 
                  depend on, with seamless performance across all devices.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Native iOS & Android Apps</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Cross-Platform Development</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>App Store Optimization</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Push Notifications & Analytics</span>
                  </div>
                </div>
                
                <Link href="/portfolio">
                  <Button className="bg-marketing-red text-white hover:bg-marketing-red/90">
                    View Mobile Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Mobile app interface design on smartphone" 
                  className="rounded-2xl shadow-xl w-full" 
                />
              </div>
            </div>

            {/* AI Integration */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="AI automation and machine learning graphics display" 
                  className="rounded-2xl shadow-xl w-full" 
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-accent-purple/10 text-accent-purple hover:bg-accent-purple/20 mb-4">
                  <Brain className="mr-2 h-4 w-4" />
                  AI Integration
                </Badge>
                <h2 className="text-4xl font-bold text-dark-slate mb-6">
                  Smart Automation Solutions
                </h2>
                <p className="text-lg text-light-slate mb-6 leading-relaxed">
                  Harness the power of artificial intelligence to automate processes, 
                  gain insights, and create intelligent user experiences that adapt to 
                  your business needs and user behavior patterns.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Chatbot Development</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Process Automation</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Data Analytics & Insights</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Machine Learning Integration</span>
                  </div>
                </div>
                
                <Link href="/portfolio">
                  <Button className="bg-accent-purple text-white hover:bg-accent-purple/90">
                    Explore AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-success-green/10 text-success-green hover:bg-success-green/20 mb-4">
                  <Megaphone className="mr-2 h-4 w-4" />
                  Digital Marketing
                </Badge>
                <h2 className="text-4xl font-bold text-dark-slate mb-6">
                  Strategic Marketing Solutions
                </h2>
                <p className="text-lg text-light-slate mb-6 leading-relaxed">
                  Data-driven marketing strategies that amplify your brand presence, 
                  engage your target audience, and drive measurable growth across all 
                  digital channels with proven methodologies.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>SEO & Content Marketing</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Social Media Management</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Pay-Per-Click Advertising</span>
                  </div>
                  <div className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-5 w-5" />
                    <span>Email Marketing Automation</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button className="bg-success-green text-white hover:bg-success-green/90">
                    Discuss Marketing Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Digital marketing analytics dashboard" 
                  className="rounded-2xl shadow-xl w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Choose the package that best fits your business needs, or let us 
              create a custom solution tailored specifically for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-tech-blue">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Startup</h3>
                <p className="text-light-slate mb-6">
                  Perfect for new businesses looking to establish their digital presence.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Website Development</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Basic SEO Setup</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Social Media Setup</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>3 Months Support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-tech-blue text-white hover:bg-tech-blue/90">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-marketing-red">
              <CardContent className="p-8 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-marketing-red text-white">
                  Most Popular
                </Badge>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Growth</h3>
                <p className="text-light-slate mb-6">
                  Ideal for growing businesses ready to scale their operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Full Web Application</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Digital Marketing Campaign</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>6 Months Support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-marketing-red text-white hover:bg-marketing-red/90">
                    Scale Your Business
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-accent-purple">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Enterprise</h3>
                <p className="text-light-slate mb-6">
                  Comprehensive solutions for established businesses and enterprises.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Custom Platform Development</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>AI Integration & Automation</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>Advanced Marketing Suite</span>
                  </li>
                  <li className="flex items-center text-light-slate">
                    <Check className="text-success-green mr-3 h-4 w-4" />
                    <span>24/7 Priority Support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-accent-purple text-white hover:bg-accent-purple/90">
                    Custom Solution
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-slate to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Let's discuss your project requirements and create a custom solution 
            that perfectly fits your business needs and goals.
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
            <Link href="/portfolio">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-dark-slate"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
