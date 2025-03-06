import React, { useState } from 'react';
import { Mail, MapPin, Menu, Twitter, Facebook, Linkedin, Youtube, ChevronDown } from 'lucide-react';
const Container = ({ children, className = '' }) => (
    <div className={`container mx-auto px-4 ${className}`}>
        {children}
    </div>
);
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Mission', href: '#mission' },
        { label: 'Products', href: '#products' },
        { label: 'Features', href: '#values' },
        // { label: 'Testimonials', href: '#testimonials' },
    ];
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
        setIsMobileMenuOpen(false);
    };
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <div className="w-full">
                <div className="h-12 md:block hidden" />
                <div className='h-16' />
            </div>
            <header className="w-full fixed top-0 z-50">
                <div className="bg-gray-50 py-3 hidden md:block">
                    <Container>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-8">
                                <a href="mailto:info@instructohub.com" className="flex items-center gap-2 hover:text-[#E16B3B]">
                                    <Mail size={16} />
                                    <span>info@instructohub.com</span>
                                </a>
                                {/* <a href="tel:+123456789123" className="flex items-center gap-2 hover:text-[#E16B3B]">
                                    <Phone size={16} />
                                    <span>+91 924 323 3145</span>
                                </a> */}
                                <a href="#" className="flex items-center gap-2 hover:text-[#E16B3B]">
                                    <MapPin size={16} />
                                    <span>Noida, UP, India</span>
                                </a>
                            </div>
                            <div className="flex gap-6">
                                <Twitter className="w-4 h-4 cursor-pointer hover:text-[#E16B3B]" />
                                <Facebook className="w-4 h-4 cursor-pointer hover:text-[#E16B3B]" />
                                <Linkedin className="w-4 h-4 cursor-pointer hover:text-[#E16B3B]" />
                                <Youtube className="w-4 h-4 cursor-pointer hover:text-[#E16B3B]" />
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='bg-white border-b py-3 shadow-lg'>
                    <Container>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <button
                                    className="md:hidden"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <Menu className="w-6 h-6" />
                                </button>
                                <a href="/" className="text-2xl font-bold">
                                    <img src="/assets/images/website/Instructo_hub_logo.png" alt="Logo" className="h-5" />
                                </a>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                                {menuItems.map((item) => (
                                    <div key={item.label} className="relative group">
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleClick(e, item.href)}
                                            className="flex items-center gap-1 hover:text-[#E16B3B] py-2"
                                        >
                                            {item.label}
                                            {item.subItems && <ChevronDown size={16} />}
                                        </a>
                                    </div>
                                ))}
                            </nav>
                            <div className="flex items-center gap-6">
                                <button
                                    className="hidden md:block px-6 py-2 bg-[#E16B3B] text-white rounded-full hover:bg-orange-600"
                                    onClick={openModal}
                                >
                                    View in action
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        {menuItems.map((item) => (
                            <div key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="block px-4 py-3 hover:bg-gray-50"
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </header>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                        onClick={closeModal}
                    />
                    <div className="flex min-h-screen items-center justify-center p-4">
                        <div className="relative w-full max-w-5xl rounded-lg bg-white">
                            <div className="relative w-full pt-[56.25%]">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/ctwUsXpSIFo"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Header;