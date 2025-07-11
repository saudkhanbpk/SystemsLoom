import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Target, Award } from "lucide-react";
import { motion } from "framer-motion";
import ceoImage from "@/assets/ceo.jpeg";
import amirbhaireal from "@/assets/amirbhaireal.png";
import abbas1 from "@/assets/abbas1.jpg";
import techcreator from "../assets/techcreator.jpg";
import hamdan2 from "../assets/hamdan2.jpg";
import amir1 from "../assets/amir1.jpg";
import irtizaz from "../assets/irtizaz.jpg";
import luqman from "../assets/luqman.jpg";
import naem from "../assets/naem.jpg";
import myself from "../assets/myself.jpg";
import afaq from "../assets/afaq.jpg";
import imam from "../assets/imamhussain.jpg";
import waheed2 from "../assets/waheed2.jpg";
import zaid from "../assets/zaid.jpg";
import adil from "../assets/adil.jpg";
import zeeshan from "../assets/zeeshan.jpg";
import team from "../assets/team.jpg";
import OurProjects from "@/components/aboutus/OurProjects";

// Animation variants for team cards
const teamContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const teamCardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    y: 60,
    scale: 0.8,
    rotateY: index % 2 === 0 ? -10 : 10
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      duration: 0.6
    }
  },
  hover: {
    y: -15,
    scale: 1.03,
    rotateY: 3,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const teamImageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const teamTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.4
    }
  }
}

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="md:py-20 py-5 bg-gradient-to-b from-bg-light to-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
        <div className="lg:flex items-center gap-10 "> 
          
            <div className="text-center md:mb-16">
            <h1 className="text-3xl md:text-6xl font-bold text-dark-slate md:mb-6">
              About TechConsults
            </h1>
           
            <p className="text-xl text-light-slate max-w-3xl mx-auto md:text-justify text-start md:mt-0 mt-4">
              TechConsult is a software company, passionate about crafting innovative solutions that help businesses thrive in an ever-evolving technological landscape. Our team of expertise is dedicated to deliver high-quality, scalable and user-friendly solutions that meet unique needs of your business.<br></br>
              You are launching startup or scaling an enterprise, TechConsult is here to boost your business online by serving you in web development, app development , Devops and graphic design. We provide end-to-end services that bring your ideas to life. We have a team focusing on innovative solutions, customized approach and commitment to quality.<br></br>
              Bless us with the opportunity to serve and build the future together.
            </p>
          
          </div>
           <div>
            <img src={team} alt="" className="lg:w-[400px] lg:h-[400px] md:w-[700px] md:h-[400px] object-cover  rounded-2xl lg:mt-0 mt-5"/>
          </div>
        </div>
        
           
        </div>
       
      </section>
      <section>
        
      </section>

      {/* Main Content */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center md:mb-20">
            <div>
              <h2 className="text-4xl font-bold text-dark-slate md:mb-6 md:text-start text-center">
                Our Story
              </h2>
              <p className="text-lg text-light-slate mb-6 leading-relaxed mt-3 md:mt-0 ">
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
              <img
                className="rounded-2xl shadow-2xl md:object-cover object-contain md:w-[600px] md:h-[400px] "
                src={techcreator}
                alt=""
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 md:mb-20">
            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 overflow-hidden relative">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Projects Completed"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  50+
                </div>
                <div className="font-medium text-white/90">
                  Projects Completed
                </div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-white to-white/50 rounded-full mx-auto"></div>
              </div>
            </Card>

            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 overflow-hidden relative">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Happy Clients"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  30+
                </div>
                <div className="font-medium text-white/90">
                  Happy Clients
                </div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-white to-white/50 rounded-full mx-auto"></div>
              </div>
            </Card>

            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 overflow-hidden relative">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/2196870531/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=rzFeaIUuiSoIUr2ihFB2qv26Fl3V3VkIMgygTSBbBo0="
                  alt="Years Experience"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  5+
                </div>
                <div className="font-medium text-white/90">
                  Years Experience
                </div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-white to-white/50 rounded-full mx-auto"></div>
              </div>
            </Card>

            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 overflow-hidden relative">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="24/7 Support Available"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  24/7
                </div>
                <div className="font-medium text-white/90">
                  Support Available
                </div>
                <div className="mt-3 h-1 w-16 bg-gradient-to-r from-white to-white/50 rounded-full mx-auto"></div>
              </div>
            </Card>
          </div>

          {/* Team Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in
              technology, marketing, and business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20 max-w-7xl mx-auto">
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={ceoImage}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Saud Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    CTO Co Founder
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={amirbhaireal}
                    className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Aamir Ali
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    CMO Co Founder
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={abbas1}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Abbas Khan
                  </h3>
                  <p className="text-accent-purple font-semibold mb-3">
                   Product Manager
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={hamdan2}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Hamdan Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    Project Manager
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={amir1}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Aamir Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    SEO & Project Manager
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={irtizaz}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Ihtizaz
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    Angular Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={luqman}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Luqman Khan
                  </h3>
                  <p className="text-accent-purple font-semibold mb-3">
                    Angular Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={naem}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Naeem Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    MERN Stack Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={myself}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Ishtiaq Ali
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    MERN Stack Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={afaq}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Afaq Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    MERN Stack Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={imam}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Imam Hussain
                  </h3>
                  <p className="text-accent-purple font-semibold mb-3">
                    MERN Stack Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={zaid}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    M Zaid
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    MERN Stack Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={adil}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Adil Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    MERN Stack Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={waheed2}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Waheed Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    App Developer
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group  hover:-translate-y-2 transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={zeeshan}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-dark-slate">
                    Zeeshan Khan
                  </h3>
                  <p className="text-tech-blue font-semibold mb-3">
                    App Developer
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <OurProjects/>
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
            <Card className="group  hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border-0 bg-white">
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

            <Card className="group  hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border-0 bg-white">
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
                  <span className="text-tech-blue font-semibold text-sm">
                    Core Value
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group  hover:-translate-y-3 transition-all duration-500 overflow-hidden relative border-0 bg-white">
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
                  <span className="text-tech-blue font-semibold text-sm">
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
