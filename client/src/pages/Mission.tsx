import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Handshake, 
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

export default function Mission() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-slate mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Driving the future of digital transformation through the perfect 
              fusion of technology and marketing excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-bg-light via-white to-tech-blue/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Mission */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-accent-purple rounded-2xl flex items-center justify-center mb-8">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-dark-slate mb-6">Our Mission</h2>
                <p className="text-lg text-light-slate leading-relaxed mb-8">
                  To empower businesses by seamlessly integrating cutting-edge technology 
                  with strategic marketing expertise, creating digital solutions that drive 
                  measurable growth and sustainable success in an ever-evolving digital landscape.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-success-green mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Deliver exceptional digital experiences that exceed expectations
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-success-green mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Bridge the gap between technology capabilities and marketing strategies
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-success-green mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Drive measurable business growth through integrated solutions
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-success-green mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Foster long-term partnerships built on trust and results
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Vision */}
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-marketing-red to-accent-orange rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-dark-slate mb-6">Our Vision</h2>
                <p className="text-lg text-light-slate leading-relaxed mb-8">
                  To become the leading force in digital transformation, where every business 
                  can harness the full potential of technology and marketing working in perfect 
                  harmony to achieve extraordinary results and sustainable competitive advantage.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="text-accent-orange mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Global leader in MarTech solutions and innovation
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="text-accent-orange mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Pioneer in integrated digital strategies and methodologies
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="text-accent-orange mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Catalyst for business transformation across all industries
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="text-accent-orange mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-light-slate">
                      Trusted partner for businesses seeking digital excellence
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and 
              every solution we create for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-shadow group">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Innovation</h3>
                <p className="text-light-slate leading-relaxed">
                  We constantly push boundaries with creative solutions, embracing 
                  emerging technologies and methodologies to solve complex challenges 
                  and create meaningful impact for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow group">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-marketing-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Partnership</h3>
                <p className="text-light-slate leading-relaxed">
                  We build lasting relationships based on trust, transparency, 
                  and mutual success. Your goals become our goals, and we work 
                  together as an extension of your team.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow group">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-slate mb-4">Excellence</h3>
                <p className="text-light-slate leading-relaxed">
                  We deliver quality that exceeds expectations, paying attention 
                  to every detail and continuously improving our processes to 
                  ensure outstanding results in every project.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-purple rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-slate">Agility</h3>
                </div>
                <p className="text-light-slate">
                  We adapt quickly to changing market conditions and client needs, 
                  ensuring our solutions remain relevant and effective in dynamic environments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">I</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-slate">Integrity</h3>
                </div>
                <p className="text-light-slate">
                  We operate with complete honesty and ethical standards, maintaining 
                  transparency in all our communications and business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              How we bring our mission and vision to life through a proven 
              methodology that delivers consistent results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-dark-slate mb-8">
                The TechConsults Method
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark-slate mb-2">Discovery & Analysis</h4>
                    <p className="text-light-slate">
                      We dive deep into understanding your business, challenges, 
                      and opportunities to create a comprehensive strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-marketing-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark-slate mb-2">Strategic Planning</h4>
                    <p className="text-light-slate">
                      We develop integrated technology and marketing strategies 
                      that align with your business goals and market position.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark-slate mb-2">Implementation</h4>
                    <p className="text-light-slate">
                      Our expert team executes the plan with precision, 
                      ensuring quality delivery on time and within budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark-slate mb-2">Optimization & Growth</h4>
                    <p className="text-light-slate">
                      We continuously monitor, analyze, and optimize performance 
                      to ensure sustained growth and maximum ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration and strategic planning" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-blue mb-1">98%</div>
                  <div className="text-sm text-light-slate">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-accent-purple text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Making a Difference
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Our mission drives us to create solutions that not only transform businesses 
              but also contribute to a more connected, efficient, and innovative digital world. 
              Every project we undertake is an opportunity to make a positive impact.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Businesses Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-lg opacity-90">Users Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$10M+</div>
                <div className="text-lg opacity-90">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Client Retention</div>
              </div>
            </div>
            
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-tech-blue hover:bg-gray-100 transform hover:-translate-y-1 transition-all text-lg px-8 py-4"
              >
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-slate text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Be Part of Our Vision?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Let's work together to create digital solutions that align with our 
            shared values and drive meaningful results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-tech-blue to-marketing-red text-white hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-dark-slate"
              >
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
