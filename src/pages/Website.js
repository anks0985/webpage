import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
const Container = ({ children, className = '' }) => (
    <div className={`container mx-auto px-4 ${className}`}>
        {children}
    </div>
);
const SectionTitle = ({ subtitle, title, alignment = 'left' }) => (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : ''}`}>
        <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-[#E16B3B] rounded-full mr-3"></div>
            <span className="text-sm uppercase tracking-wider">
                {subtitle}
            </span>
        </div>
        <h2 className="text-4xl md:text-5xl ">
            {title}
        </h2>
    </div>
);
const HeroSection = () => {
    return (
        <div id="home" className="relative bg-white pt-20">
            <Container>
                <div className="w-full mb-16">
                    <h1 className="text-7xl mb-6 ">
                        Your AI Powered <span style={{ color: "#e16b3b" }}>Application Suite </span><br />for your LMS
                    </h1>
                </div>
            </Container>
            <div className="w-full overflow-hidden">
                <img
                    src="/assets/images/website/banner.png"
                    alt="Hero Image"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};
const AboutSection = () => {
    return (
        <section id="about" className="pt-24 bg-white pb-20">
            <Container>
                <div className="flex items-center mb-6">
                    <div className="w-2 h-2 bg-[#E16B3B] rounded-full mr-3"></div>
                    <span className="text-sm uppercase tracking-wider">
                        About Us
                    </span>
                </div>
                <div className="grid md:grid-cols-1 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl mb-6 leading-tight">
                            Empowering Education Through AI-Driven Solutions.
                        </h2>
                    </div>
                    <div className='border-l-2 border-solid p-4 border-[#E16B3B]'>
                        <p className="text-2xl pb-4">
                            At InstructoHub, we are revolutionizing education by empowering educators, students, and administrators through AI-driven innovation. Our AI-powered application suite seamlessly integrates with any Learning Management System (LMS), enabling teachers and instructional designers to build courses effortlessly—transforming weeks of work into hours.</p>
                        <p className="text-2xl pb-4">We enhance student learning experiences by bringing adaptability into the LMS, ensuring personalized learning paths using the same course content. Additionally, our intelligent tools provide administrators and managers with real-time insights, allowing them to monitor, control, and track the impact of AI on their institution's learning ecosystem.</p>
                        <p className="text-2xl pb-4">With InstructoHub, education becomes smarter, faster, and more efficient—shaping the future of learning.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
const ServicesSection = () => {
    const services = [
        {
            title: "Teachers...",
            description: 'Automating course creation and administrative tasks, freeing educators to focus on impactful teaching.',
            image: "/assets/images/website/teachers.png"
        },
        {
            title: "Students...",
            description: 'Delivering personalized, AI-driven learning experiences that adapt to individual needs for better outcomes.',
            image: "/assets/images/website/student.png"
        },
        {
            title: "Admin...",
            description: 'Providing centralized insights and automation to optimize institutional efficiency and decision-making.',
            image: "/assets/images/website/admin.png"
        }
    ];
    return (
        <section id="mission" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-8">
                    <div className="w-2 h-2 bg-[#E16B3B] rounded-full mr-3"></div>
                    <span className="text-sm uppercase tracking-wider">
                        OUR MISSION
                    </span>
                </div>
                <h2 className="text-5xl mb-6 leading-tight">
                    Solving Education's Key Challenges for:
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 p-8 flex flex-col justify-end transition-opacity duration-300">
                                <h3 className="text-4xl text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-2xl text-gray-300 mb-6">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-white text-lg font-medium group/link"
                                >
                                    View More
                                    <ArrowUpRight className="ml-2 w-5 h-5 text-[#E16B3B] transition-transform duration-300 group-hover/link:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const ProductsSection = () => {
    const originalIndustries = [
        {
            "number": "01",
            "title": "InstructoGen",
            "tagline": "Empower Educators, Effortlessly",
            "description": "Create quality courses from simple inputs with AI assistance while maintaining full control over curriculum-aligned content.",
            "image": "/assets/images/website/p1.png",
            "id": "InstructoGen"
        },
        {
            "number": "02",
            "title": "InstructoBoost",
            "tagline": "Turn Any Course into an AI-Powered Learning Hub",
            "description": "Enhance any course with AI-driven quizzes, assignments and discussions that work in InstructoHub or other LMS systems.",
            "image": "/assets/images/website/p2.png",
            "id": "InstructoBoost"
        },
        {
            "number": "03",
            "title": "InstructoEcho",
            "tagline": "Your 24/7 Smart Learning Companion",
            "description": "Always-available AI support that provides course-specific assistance without judgment whenever students need help.",
            "image": "/assets/images/website/p3.jpg",
            "id": "InstructoEcho"
        },
        {
            "number": "04",
            "title": "InstructoPulse",
            "tagline": "Learn by Doing with AI-Powered Adaptation",
            "description": "Personalized learning through adaptive exercises that respond to individual progress within specific LMS modules.",
            "image": "/assets/images/website/product4.png",
            "id": "InstructoPulse"
        },
        {
            "number": "05",
            "title": "InstructoGrade",
            "tagline": "Cuts Grading Time Drastically",
            "description": "Speed up assessment with instant rubric-aligned grading suggestions while maintaining complete teacher oversight.",
            "image": "/assets/images/website/p5.png",
            "id": "InstructoGrade"
        },
        {
            "number": "06",
            "title": "InstructoNex",
            "tagline": "AI Management, Fully in Your Control",
            "description": "Control AI features through institutional settings for courses, user tokens, model selection, and custom API needs.",
            "image": "/assets/images/website/product3.png",
            "id": "InstructoNex"
        }
    ];
    const extendedItems = [
        ...originalIndustries,
        ...originalIndustries,
        ...originalIndustries,
        ...originalIndustries,
        ...originalIndustries
    ].map((item, index) => ({
        ...item,
        uniqueId: `${item.number}-${index}`
    }));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sliderRef = useRef(null);
    const getSlideWidth = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < 768 ? 100 : 100 / 3;
        }
        return 100 / 3;
    };
    const [slideWidth, setSlideWidth] = useState(getSlideWidth());
    useEffect(() => {
        const handleResize = () => {
            setSlideWidth(getSlideWidth());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const moveSlider = (direction) => {
        if (isTransitioning || !sliderRef.current) return;
        setIsTransitioning(true);
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < extendedItems.length - (window.innerWidth < 768 ? 1 : 2)) {
            setCurrentIndex(newIndex);
            const slider = sliderRef.current;
            slider.style.transition = 'transform 500ms ease-in-out';
            slider.style.transform = `translateX(-${slideWidth * newIndex}%)`;
        }
    };
    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };
    useEffect(() => {
        let intervalId;
        if (isAutoPlaying && !isTransitioning) {
            intervalId = setInterval(() => {
                if (currentIndex < extendedItems.length - (window.innerWidth < 768 ? 1 : 3)) {
                    moveSlider(1);
                } else {
                    setCurrentIndex(0);
                    const slider = sliderRef.current;
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                }
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [isAutoPlaying, isTransitioning, currentIndex]);

    const handleProductClick = (productId) => {
        window.location.href = `#/products#${productId}`;
    };

    return (
        <section id="products" className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="md:w-1/4">
                        <div className="mb-4">
                            <div className="flex items-center mb-4">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                <span className="text-sm uppercase tracking-wider">
                                    PRODUCT SUITE
                                </span>
                            </div>
                            <h2 className="text-5xl mb-6 leading-tight">
                                Overview
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl mb-6 md:mb-8">
                            Explore our AI-powered solutions designed to enhance every aspect of education.
                            From automating course creation to improving student engagement and streamlining
                            administration, our tools bring efficiency, intelligence, and innovation to your LMS experience.
                        </p>
                        <button className="w-full md:w-auto px-6 md:px-8 py-3 text-sm font-semibold border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
                            onClick={() => window.location.href = '#/products'}
                        >
                            SEE MORE
                        </button>
                        <div className="flex gap-4 mt-6 md:mt-8 justify-center md:justify-start">
                            <button
                                onClick={() => moveSlider(-1)}
                                disabled={isTransitioning || currentIndex === 0}
                                className="p-2 rounded-full border border-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => moveSlider(1)}
                                disabled={isTransitioning || currentIndex >= extendedItems.length - (window.innerWidth < 768 ? 1 : 3)}
                                className="p-2 rounded-full border border-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="flex"
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedItems.map((industry) => (
                                <div
                                    key={industry.uniqueId}
                                    className="flex-shrink-0 w-full md:w-1/3 px-2 md:px-4"
                                    style={{ width: `${slideWidth}%` }}
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                >
                                    <div
                                        className="group border-l-2 border-solid p-4 border-orange-500 h-full cursor-pointer hover:bg-gray-50 transition-colors duration-300 flex flex-col"
                                        onClick={() => handleProductClick(industry.id)}
                                    >
                                        <div className="text-orange-500 text-sm font-semibold mb-4">
                                            [{industry.number}]
                                        </div>
                                        <div className="relative overflow-hidden mb-4">
                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                                                <div className="text-white text-center font-bold text-xl md:text-2xl px-4 py-3 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">{industry.tagline}</div>
                                            </div>
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold mb-4">{industry.title}</h4>
                                        <div className="border-t border-gray-200 my-4"></div>
                                        <p className="text-sm md:text-base">{industry.description}</p>
                                        <div className="mt-auto pt-4 text-right">
                                            <span className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-300 inline-flex items-center">
                                                View More
                                                <ChevronRight className="h-4 w-4 ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const ParallaxSection = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: `url('/assets/images/website/parallax.png')`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <Container className="relative h-full flex items-center">
                <div className="max-w-3xl">
                    <p className="font-serif text-3xl md:text-4xl leading-relaxed text-white italic">
                        "Our goal is to enhance learning, empower educators, and create long-term value through AI-driven innovation in education space."
                    </p>
                    <div className="mt-8">
                        <button className="px-8 py-3 bg-white rounded-full hover:bg-[#E16B3B] hover:text-white transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};
const ValuesSection = () => {
    const values = [
        {
            "title": "Bloom's Taxonomy Integration",
            "description": "Align educational activities with Bloom's Taxonomy for structured, progressive learning. Ensure skill development through well-defined cognitive levels, fostering critical thinking and mastery."
        },
        {
            "title": "Curriculum Mapping",
            "description": "Map courses to curriculum frameworks, ensuring key learning objectives are met. Maintain alignment with academic standards while allowing flexibility for diverse instructional needs."
        },
        {
            "title": "Learning Objective Validation",
            "description": "Validate learning objectives for clarity and alignment with learning outcomes. Ensure objectives are measurable, relevant, and effectively support student progress and course goals."
        },
        {
            "title": "Personalized Learning Experience",
            "description": "Provide AI-driven, adaptive content tailored to each student's learning style, pace, and needs. Enhance engagement, retention, and mastery through customized, dynamic educational experiences."
        }
    ];
    return (
        <section id="values" className="py-24 bg-[#F7F7F7]">
            <Container>
                <SectionTitle
                    subtitle="Key Features"
                    title="Core Capabilities & Innovations"
                />
                <div className="grid md:grid-cols-2 gap-12">
                    {values.map((value, index) => (
                        <div key={index} className="group border-l-2 border-solid p-4 border-[#E16B3B]">
                            <h4 className="text-xl font-bold mb-4">
                                {value.title}
                            </h4>
                            <p className="mb-6">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Working with this team has been transformative for our business. Their expertise and dedication are unmatched.",
            author: "John Smith",
            position: "CEO, Tech Corp"
        },
        {
            quote: "The strategic insights and solutions provided have helped us achieve remarkable growth in our market.",
            author: "Sarah Johnson",
            position: "Director, Innovation Inc"
        },
        {
            quote: "Their commitment to excellence and customer success makes them an invaluable partner for any business.",
            author: "Michael Brown",
            position: "Founder, StartUp Co"
        }
    ];
    return (
        <section id="testimonials" className="py-24 bg-white">
            <Container>
                <SectionTitle
                    subtitle="Testimonials"
                    title="What Our Clients Say"
                />
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="mb-6 italic">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-medium ">{testimonial.author}</p>
                                <p className="text-sm ">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
const Website = () => {
    return (
        <div style={{ fontFamily: 'PT Serif', color: "#1B3942" }} className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ProductsSection />
                <ParallaxSection />
                <ValuesSection />
                {/* <TestimonialsSection /> */}
            </main>
            <Footer />
        </div>
    );
};
export default Website;