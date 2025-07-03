import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  CalendarCheck
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-slate mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Ready to transform your business? Let's start the conversation 
              and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-to-b from-white to-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dark-slate mb-6">
                  Send us a message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="john@example.com" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Services Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                              <SelectItem value="ai-integration">AI Integration</SelectItem>
                              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                              <SelectItem value="all-services">All Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project and how we can help..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-tech-blue to-marketing-red text-white hover:shadow-lg transform hover:-translate-y-1 transition-all"
                      disabled={isSubmitting || contactMutation.isPending}
                    >
                      {isSubmitting || contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark-slate mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-slate">Email</div>
                      <div className="text-light-slate">TechConsults@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-marketing-red rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-slate">Phone</div>
                      <div className="text-light-slate">+13213646803</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-purple rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-slate">Office</div>
                      <div className="text-light-slate">
                        123 Tech Street<br />
                        Innovation City, IC 12345
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-dark-slate mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-tech-blue rounded-full flex items-center justify-center transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-light-slate group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-marketing-red rounded-full flex items-center justify-center transition-colors group"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-light-slate group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-accent-purple rounded-full flex items-center justify-center transition-colors group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-light-slate group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-success-green rounded-full flex items-center justify-center transition-colors group"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-light-slate group-hover:text-white" />
                  </a>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-success-green/10 to-success-green/5 border-success-green/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dark-slate mb-3">
                    Ready to Start?
                  </h3>
                  <p className="text-light-slate mb-4">
                    Book a free 30-minute consultation call with our experts 
                    to discuss your project and get personalized recommendations.
                  </p>
                  <Button className="bg-success-green text-white hover:bg-success-green/90">
                    <CalendarCheck className="mr-2 h-4 w-4" />
                    Schedule Free Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Have questions? We've got answers. Here are some of the most 
              common questions we receive from potential clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-dark-slate mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-light-slate">
                  Project timelines vary based on scope and complexity. Simple websites 
                  typically take 4-6 weeks, while complex applications can take 3-6 months. 
                  We provide detailed timelines during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-dark-slate mb-3">
                  Do you offer ongoing support and maintenance?
                </h3>
                <p className="text-light-slate">
                  Yes! We provide comprehensive support packages including regular updates, 
                  security monitoring, performance optimization, and 24/7 technical support 
                  to ensure your solution continues to perform optimally.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-dark-slate mb-3">
                  What industries do you work with?
                </h3>
                <p className="text-light-slate">
                  We work with businesses across all industries including healthcare, 
                  finance, e-commerce, education, technology, and more. Our solutions 
                  are tailored to meet the specific needs of each industry.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-dark-slate mb-3">
                  How do you ensure project success?
                </h3>
                <p className="text-light-slate">
                  We follow a proven methodology with clear milestones, regular 
                  communication, thorough testing, and continuous optimization. 
                  Our 98% client satisfaction rate speaks to our commitment to success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-slate mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Located in the heart of Innovation City, our office is designed 
              to foster creativity and collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Card className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Tech Street, Innovation City, IC 12345
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-dark-slate mb-6">
                Why Visit Us?
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2"></div>
                  <span className="text-light-slate">
                    Face-to-face collaboration for complex projects
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-marketing-red rounded-full mt-2"></div>
                  <span className="text-light-slate">
                    Tour our modern development and marketing facilities
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-2"></div>
                  <span className="text-light-slate">
                    Meet our team of experts in person
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-green rounded-full mt-2"></div>
                  <span className="text-light-slate">
                    Experience our collaborative work environment
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-dark-slate mb-3">Office Hours</h4>
                <div className="space-y-2 text-light-slate">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
