import React from 'react';
const Container = ({ children, className = '' }) => (
    <div className={`container mx-auto px-4 ${className}`}>
        {children}
    </div>
);
const Footer = () => {
    const footerLinks = {
        contactInfo: [
            { label: "About Us", href: "#" },
            { label: "Contact Us", href: "#" },
            { label: "Our Consultants", href: "#" },
            { label: "Our Services", href: "#" },
            { label: "FAQ Page", href: "#" }
        ],
        usefulLinks: [
            { label: "Audit & Assurance", href: "#" },
            { label: "Consulting", href: "#" },
            { label: "Risk Advisory", href: "#" },
            { label: "Legal", href: "#" },
            { label: "Tax", href: "#" }
        ],
        socialLinks: [
            { label: "Twitter", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Youtube", href: "#" }
        ]
    };
    return (
        <footer className="bg-[#1B3942] text-white border-t-4 border-[#E16B3B]">
            <Container>
                <div className="py-20">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div>
                            <img src="/assets/images/website/Instructo_hub_logo_white.png" alt="Instructo hub Logo" className="mb-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                            <nav className="space-y-3">
                                {footerLinks.contactInfo.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="block hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Connect</h3>
                            <nav className="space-y-3">
                                {footerLinks.socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="block hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-[#E16B3B]">
                            © 2025 Instructo Hub, All Rights Reserved
                        </p>
                        <p className="text-sm mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors text-[#E16B3B]">
                                Privacy & Cookie Policy
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;