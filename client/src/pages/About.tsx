import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Target, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-slate mb-6">
              About TechConsults
            </h1>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Bridging the gap between technology and marketing to deliver 
              exceptional digital experiences that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-dark-slate mb-6">
                Our Story
              </h2>
              <p className="text-lg text-light-slate mb-6 leading-relaxed">
                TechConsults was born from a simple observation: the most successful 
                businesses today are those that seamlessly integrate cutting-edge 
                technology with strategic marketing expertise. Too often, these two 
                critical areas operate in silos, limiting potential and creating 
                missed opportunities.
              </p>
              <p className="text-lg text-light-slate mb-6 leading-relaxed">
                Founded by a team of passionate technologists and marketing experts, 
                we set out to break down these barriers. Our mission is to help 
                businesses harness the full power of both domains, creating synergies 
                that drive exceptional results.
              </p>
              <p className="text-lg text-light-slate mb-8 leading-relaxed">
                Today, we're proud to serve clients across various industries, 
                helping them transform their digital presence and achieve sustainable growth.
              </p>
              <Link href="/contact">
                <Button className="bg-tech-blue text-white hover:bg-tech-blue/90">
                  Work With Us
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Our diverse team collaborating" 
                className="rounded-2xl shadow-2xl w-full" 
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-tech-blue mb-2">50+</div>
                <div className="text-light-slate">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-marketing-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-marketing-red mb-2">30+</div>
                <div className="text-light-slate">Happy Clients</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-accent-purple mb-2">5+</div>
                <div className="text-light-slate">Years Experience</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-success-green mb-2">24/7</div>
                <div className="text-light-slate">Support Available</div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience 
              in technology, marketing, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center group hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-blue to-accent-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JD</span>
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-2">John Doe</h3>
                <p className="text-accent-purple font-medium mb-3">CTO & Co-Founder</p>
                <p className="text-light-slate text-sm">
                  Full-stack developer with 10+ years of experience in scalable 
                  web applications and AI integration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-marketing-red to-accent-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JS</span>
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-2">Jane Smith</h3>
                <p className="text-marketing-red font-medium mb-3">CMO & Co-Founder</p>
                <p className="text-light-slate text-sm">
                  Digital marketing strategist with expertise in growth hacking, 
                  SEO, and performance marketing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-success-green to-accent-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-2">Mike Johnson</h3>
                <p className="text-success-green font-medium mb-3">Lead Designer</p>
                <p className="text-light-slate text-sm">
                  UX/UI designer passionate about creating intuitive and 
                  beautiful digital experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Innovation</h3>
                <p className="text-light-slate">
                  We constantly push boundaries with creative solutions that 
                  solve real problems and create meaningful impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-marketing-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Partnership</h3>
                <p className="text-light-slate">
                  We build lasting relationships based on trust, transparency, 
                  and mutual success with our clients and team members.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Excellence</h3>
                <p className="text-light-slate">
                  We deliver quality that exceeds expectations, paying attention 
                  to every detail to ensure outstanding results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-slate text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Let's discuss how our team can help you achieve your goals with 
            integrated technology and marketing solutions.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-tech-blue to-marketing-red text-white hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
