import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Target, Award, Clock } from "lucide-react";
import ceoImage from "@/assets/ceo.jpeg";
import cmo1 from "@/assets/cmo1.webp";
import techcreator from "../assets/techcreator.jpg";
export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="md:py-20 py-10 bg-gradient-to-b from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center md:mb-16">
            <h1 className="text-3xl md:text-6xl font-bold text-dark-slate md:mb-6">
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
      <section className="md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center md:mb-20">
            <div>
              <h2 className="text-4xl font-bold text-dark-slate md:mb-6">
                Our Story
              </h2>
              <p className="text-lg text-light-slate mb-6 leading-relaxed">
                TechConsults was born from a simple observation: the most
                successful businesses today are those that seamlessly integrate
                cutting-edge technology with strategic marketing expertise. Too
                often, these two critical areas operate in silos, limiting
                potential and creating missed opportunities.
              </p>
              <p className="text-lg text-light-slate mb-6 leading-relaxed">
                Founded by a team of passionate technologists and marketing
                experts, we set out to break down these barriers. Our mission is
                to help businesses harness the full power of both domains,
                creating synergies that drive exceptional results.
              </p>
              <p className="text-lg text-light-slate mb-8 leading-relaxed">
                Today, we're proud to serve clients across various industries,
                helping them transform their digital presence and achieve
                sustainable growth.
              </p>
              <Link href="/contact">
                <Button className="bg-tech-blue text-white hover:bg-tech-blue/90">
                  Work With Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Our diverse team collaborating"
                className="rounded-2xl shadow-2xl w-full"
              /> */}
              <img  className="rounded-2xl shadow-2xl md:object-cover object-contain md:w-[500px] md:h-[400px] " src={techcreator} alt="" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 md:mb-20">
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-tech-blue/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-tech-blue mb-3 group-hover:scale-105 transition-transform duration-300">
                  50+
                </div>
                <div className="text-light-slate font-medium">
                  Projects Completed
                </div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-tech-blue to-tech-blue/50 rounded-full mx-auto"></div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-red-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-marketing-red/5 to-marketing-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-marketing-red to-marketing-red/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-marketing-red mb-3 group-hover:scale-105 transition-transform duration-300">
                  30+
                </div>
                <div className="text-light-slate font-medium">
                  Happy Clients
                </div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-marketing-red to-marketing-red/50 rounded-full mx-auto"></div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-purple to-accent-purple/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-accent-purple mb-3 group-hover:scale-105 transition-transform duration-300">
                  5+
                </div>
                <div className="text-light-slate font-medium">
                  Years Experience
                </div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-purple/50 rounded-full mx-auto"></div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-success-green/5 to-success-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-success-green to-success-green/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-success-green mb-3 group-hover:scale-105 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-light-slate font-medium">
                  Support Available
                </div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-success-green to-success-green/50 rounded-full mx-auto"></div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in
              technology, marketing, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={ceoImage}
                    alt="Saud Khan - CEO & Co-Founder"
                    className=" object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {/* <div className="w-3 h-3 bg-success-green rounded-full animate-pulse shadow-lg"></div> */}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Saud Khan</h3>
                    <p className="text-yellow-300 font-semibold mb-3">
                      CTO Co Founder
                    </p>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      Access Top AI Engineers & Full Stack Developers MERN, MEAN
                      & AI Tools OpenAI, LangChain, Replicate.
                    </p>
                  </div>
                </div>
                {/* <div className="p-6 bg-gradient-to-r from-tech-blue/5 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xs text-light-slate">Experience</div>
                      <div className="text-lg font-bold text-tech-blue">
                        10+ Years
                      </div>
                    </div>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={cmo1}
                    alt="Saud Khan - CEO & Co-Founder"
                    className=" object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {/* <div className="w-3 h-3 bg-success-green rounded-full animate-pulse shadow-lg"></div> */}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Aamir Ali</h3>
                    <p className="text-yellow-300 font-semibold mb-3">
                      CMO Co Founder
                    </p>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      Visionary, Strategic, Creative, Analytical, Collaborative,
                      Leader
                    </p>
                  </div>
                </div>
                {/* <div className="p-6 bg-gradient-to-r from-tech-blue/5 to-transparent">
                  <div className="flex  ">
                    <div className="text-left ">
                      <div className="text-xs text-light-slate">Experience</div>
                      <div className="text-lg font-bold text-tech-blue">
                        5+ Years
                      </div>
                    </div>
                  </div>
                </div> */}
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
            <Card className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border-0 bg-white">
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/90 via-tech-blue/50 to-tech-blue/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">
                  Innovation
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-tech-blue to-tech-blue/50 rounded-full mx-auto mb-4"></div>
                <p className="text-light-slate leading-relaxed">
                  We constantly push boundaries with creative solutions that
                  solve real problems and create meaningful impact.
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-tech-blue/5 rounded-full">
                  <span className="text-tech-blue font-semibold text-sm">
                    Core Value
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border-0 bg-white">
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-marketing-red/90 via-marketing-red/50 to-marketing-red/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">
                  Partnership
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-marketing-red to-marketing-red/50 rounded-full mx-auto mb-4"></div>
                <p className="text-light-slate leading-relaxed">
                  We build lasting relationships based on trust, transparency,
                  and mutual success with our clients and team members.
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-marketing-red/5 rounded-full">
                  <span className="text-marketing-red font-semibold text-sm">
                    Core Value
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border-0 bg-white">
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-success-green/90 via-success-green/50 to-success-green/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-dark-slate mb-4">
                  Excellence
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-success-green to-success-green/50 rounded-full mx-auto mb-4"></div>
                <p className="text-light-slate leading-relaxed">
                  We deliver quality that exceeds expectations, paying attention
                  to every detail to ensure outstanding results.
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-success-green/5 rounded-full">
                  <span className="text-success-green font-semibold text-sm">
                    Core Value
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-slate text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
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
