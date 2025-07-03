import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Megaphone, 
  Rocket, 
  Play, 
  ChevronDown,
  Check
} from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-slate/90 via-dark-slate/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Where{" "}
              <span className="text-tech-blue">Technology</span>{" "}
              Meets{" "}
              <span className="text-marketing-red">Marketing</span>{" "}
              Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We blend cutting-edge technology with strategic marketing to deliver 
              comprehensive digital solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-tech-blue to-accent-purple text-white hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg px-8 py-6"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-dark-slate transition-all text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-slate mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              We deliver end-to-end solutions combining technical expertise with marketing prowess
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-accent-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-3">Web Development</h3>
                <p className="text-light-slate">
                  Custom websites and web applications built with modern technologies and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-marketing-red to-accent-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-3">Mobile Apps</h3>
                <p className="text-light-slate">
                  Native and cross-platform mobile applications for iOS and Android devices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-tech-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-3">AI Integration</h3>
                <p className="text-light-slate">
                  Smart automation and AI-powered solutions to streamline your business processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-success-green to-accent-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-3">Digital Marketing</h3>
                <p className="text-light-slate">
                  Strategic marketing campaigns to boost your online presence and drive growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">
                About TechConsults
              </h2>
              <p className="text-lg text-light-slate mb-6 leading-relaxed">
                We are a dynamic team of technologists and marketers who believe in the power 
                of integrated solutions. Our unique approach combines technical excellence with 
                marketing insight to deliver results that matter.
              </p>
              <p className="text-lg text-light-slate mb-8 leading-relaxed">
                Founded on the principle that technology and marketing should work in harmony, 
                we help businesses bridge the gap between their technical capabilities and market success.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-blue mb-2">50+</div>
                  <div className="text-light-slate">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-marketing-red mb-2">30+</div>
                  <div className="text-light-slate">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-purple mb-2">5+</div>
                  <div className="text-light-slate">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-green mb-2">24/7</div>
                  <div className="text-light-slate">Support Available</div>
                </div>
              </div>
              
              <Link href="/about">
                <Button className="bg-gradient-to-r from-tech-blue to-marketing-red text-white hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Marketing team collaboration in modern office" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-green rounded-full"></div>
                  <span className="text-sm font-medium text-dark-slate">Tech Excellence</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-marketing-red rounded-full"></div>
                  <span className="text-sm font-medium text-dark-slate">Marketing Mastery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-accent-purple text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your goals with our integrated 
            technology and marketing solutions.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-white text-tech-blue hover:bg-gray-100 transform hover:-translate-y-1 transition-all text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
