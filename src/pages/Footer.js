import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
const Container = ({ children, className = '' }) => (
    <div className={`container mx-auto px-4 ${className}`}>
        {children}
    </div>
);
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerLinks = {
        navLinks: [
            { label: 'Home', href: '#home' },
            { label: 'About Us', href: '#about' },
            { label: 'Mission', href: '#mission' },
            { label: 'Products', href: '#products' },
            { label: 'Features', href: '#values' },
        ],
        contactInfo: [
            { icon: <MapPin size={18} />, label: 'Noida, UP, India' },
            { icon: <Mail size={18} />, label: 'info@instructohub.com' },
        ],
        socialLinks: [
            { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/InstructoH75197" },
            { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/people/InstructoHub/61572722776722/" },
            { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/instructohub" },
            { icon: <Youtube size={20} />, label: "Youtube", href: "https://www.youtube.com/@Instructo-Hub" }
        ]
    };
    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <footer className="bg-[#1B3942] text-white border-t-4 border-[#E16B3B]">
            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <img src="https://static.instructohub.com/staticfiles/assets/images/website/Instructo_hub_logo_white.png" alt="Instructo hub Logo" className="mb-6 max-w-[180px]" />
                            <p className="text-gray-300 mt-4">
                                Empowering education through innovative learning solutions.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                {footerLinks.socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="bg-[#E16B3B] p-2 rounded-full text-white hover:bg-[#f17c4d] transition-colors"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-16 after:bg-[#E16B3B]">
                                Quick Links
                            </h3>
                            <nav className="space-y-3">
                                {footerLinks.navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className="block text-gray-300 hover:text-[#E16B3B] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-16 after:bg-[#E16B3B]">
                                Contact Us
                            </h3>
                            <div className="space-y-4">
                                {footerLinks.contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="text-[#E16B3B] mr-3 mt-1">
                                            {item.icon}
                                        </div>
                                        <span className="text-gray-300">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-16 after:bg-[#E16B3B]">
                                Newsletter
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Subscribe to our newsletter for the latest updates
                            </p>
                            <form className="mt-4">
                                <div className="flex flex-col space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="px-4 py-2 bg-[#2A4A54] text-white rounded border border-gray-700 focus:outline-none focus:border-[#E16B3B]"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#E16B3B] text-white rounded hover:bg-[#f17c4d] transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-300">
                            © {currentYear} Instructo Hub, All Rights Reserved
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-sm text-gray-300 hover:text-[#E16B3B] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-[#E16B3B] transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-[#E16B3B] transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;