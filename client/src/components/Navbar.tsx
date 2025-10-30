import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../assets/system2.png";
// import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/mission", label: "Mission & Vision" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={logo} // 🖼️ path to your logo inside /public
              alt="SystemSloom Logo"
              // width={150} // adjust size
              // height={50}
              // // priority
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 font-medium transition-colors ${location === item.href
                      ? "text-tech-blue"
                      : "text-dark-slate hover:text-tech-blue"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-tech-blue to-accent-purple text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-dark-slate hover:text-tech-blue">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 text-lg font-medium transition-colors ${location === item.href
                          ? "text-tech-blue"
                          : "text-dark-slate hover:text-tech-blue"
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-tech-blue to-accent-purple text-white">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
