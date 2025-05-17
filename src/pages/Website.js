import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Bookmark, Star, Clock, Zap, Award, Shield } from 'lucide-react';
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
                    src="https://static.instructohub.com/staticfiles/assets/images/website/banner.png"
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
            image: "https://static.instructohub.com/staticfiles/assets/images/website/teachers.png"
        },
        {
            title: "Students...",
            description: 'Delivering personalized, AI-driven learning experiences that adapt to individual needs for better outcomes.',
            image: "https://static.instructohub.com/staticfiles/assets/images/website/student.png"
        },
        {
            title: "Admin...",
            description: 'Providing centralized insights and automation to optimize institutional efficiency and decision-making.',
            image: "https://static.instructohub.com/staticfiles/assets/images/website/admin.png"
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
    const features = [
        {
            id: "InstructoGen",
            number: "01",
            title: "InstructoGen – Empower Educators, Effortlessly",
            tagline: "AI-Powered Course Creator",
            description: "Designing a high-quality course has never been easier. With InstructoGen, educators can generate structured, curriculum-aligned content with just a few inputs—while retaining complete control.",
            icon: Star,
            color: "#E16B3B",
            features: [
                "Choose from proven methodologies like Bloom's Taxonomy or customize your own",
                "Define modules, topics, and lessons with ease",
                "Fine-tune AI-generated content with teacher-driven prompts",
                "Seamlessly enrich courses with AI-suggested images, videos, and media",
                "Intuitive, educator-friendly interface with no technical complexity"
            ]
        },
        {
            id: "InstructoBoost",
            number: "02",
            title: "InstructoBoost – Turn Any Course into an AI-Powered Learning Hub",
            tagline: "AI-Based Course Enhancer",
            icon: Zap,
            color: "#1B3942",
            description: "Supercharge existing courses with engaging AI-driven activities. Whether it's a course built using InstructoGen or an existing LMS course, instructors can instantly enhance their content with quizzes, assignments, and discussions—perfectly aligned with learning objectives.",
            features: [
                "Launch the InstructoBoost inside Canvas and other popular LMS platforms",
                "Generate quizzes, assignments, and discussions that align with learning objectives",
                "Enhance existing courses without rebuilding from scratch",
                "Transform static content into interactive learning experiences",
                "Increase student engagement and participation with AI-powered activities"
            ]
        },
        {
            id: "InstructoEcho",
            number: "03",
            title: "InstructoEcho – Your 24/7 Smart Learning",
            tagline: "Student Assistant",
            icon: Clock,
            color: "#E16B3B",
            description: "Students deserve instant, judgment-free support—whenever they need it. Our AI-powered Chatbot is context-aware, ensuring responses remain relevant to the course where it's launched.",
            features: [
                "Provide private and secure question-answering for students",
                "Eliminate peer pressure while gaining real-time assistance",
                "Clarify concepts and answer common queries instantly",
                "Reduce repetitive questions for educators",
                "Support diverse learning needs and paces"
            ]
        },
        {
            id: "InstructoPulse",
            number: "04",
            title: "InstructoPulse – Learn by Doing with AI-Powered Adaptation",
            tagline: "Practice Mode",
            icon: Bookmark,
            color: "#1B3942",
            description: "Traditional study methods fall short in personalization. InstructoPulse dynamically adjusts to student responses, providing context-based Q&A exercises tailored to LMS modules, pages, and activities.",
            features: [
                "The AI adapts based on accuracy and response time",
                "Provides interactive, personalized learning experiences",
                "Enables conversational AI discussions to deepen understanding",
                "Makes learning more engaging and effective",
                "Reinforces concepts through active practice"
            ]
        },
        {
            id: "InstructoGrade",
            number: "05",
            title: "InstructoGrade – Cuts Grading Time Drastically",
            tagline: "Auto Grader",
            icon: Award,
            color: "#E16B3B",
            description: "Grading shouldn't be a bottleneck. InstructoGrade eliminates the tediousness of manual assessment by providing instant, rubric-based grading suggestions with teacher review capabilities.",
            features: [
                "Evidence-based marking suggestions for teacher final review and approval",
                "Review AI-generated grading insights with a user-friendly interface",
                "Make adjustments where needed without spending hours reviewing submissions",
                "Focus on meaningful feedback while AI handles routine assessment",
                "Process large volumes of submissions efficiently"
            ]
        },
        {
            id: "InstructoNex",
            number: "06",
            title: "InstructoNex – AI Management, Fully in Your Control",
            tagline: "Admin Control Panel",
            icon: Shield,
            color: "#1B3942",
            description: "With centralized AI controls, administrators can customize AI settings for their institution. Enable AI for specific courses, set per-user AI token limits, choose preferred AI models, and even integrate custom AI APIs—all from one powerful dashboard.",
            features: [
                "Gain insights into feature adoption, ROI, and overall efficiency",
                "Ensure your AI strategy delivers real impact",
                "Monitor usage metrics across departments and courses",
                "Implement institution-wide AI policies consistently",
                "Make data-driven decisions about educational technology"
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState('next');
    const [isAnimating, setIsAnimating] = useState(false);
    const carouselRef = useRef(null);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 600);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isPaused, currentIndex]);

    const goToSlide = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(index > currentIndex ? 'next' : 'prev');
        setCurrentIndex(index);
    };

    const currentProduct = features[currentIndex];
    const IconComponent = currentProduct.icon;

    return (
        <div id="products" className="container mx-auto py-12 px-4">
            <div className="mb-12 text-center">
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
            </div>

            <div
                className="relative overflow-hidden rounded-xl shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${currentProduct.color}22, ${currentProduct.color}11)` }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                ref={carouselRef}
            >
                <div
                    key={currentProduct.id}
                    className={`p-8 md:p-12 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-8 md:mb-0">
                            <div className="flex flex-col items-center md:items-start">
                                <div
                                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110"
                                    style={{ backgroundColor: currentProduct.color }}
                                >
                                    <IconComponent size={48} color="white" />
                                </div>
                                <h3 className="text-4xl font-bold mb-3 text-center md:text-left" style={{ color: "#1B3942" }}>{currentProduct.title.split(' – ')[0]}</h3>
                                <p className="text-2xl mb-4 text-center md:text-left" style={{ color: currentProduct.color }}>{currentProduct.tagline}</p>
                            </div>
                        </div>

                        <div className="md:w-3/4 md:pl-12">
                            <div>
                                <p className="text-xl mb-8 leading-relaxed">{currentProduct.description}</p>

                                <div
                                    className="rounded-lg p-6"
                                    style={{ borderLeft: `4px solid ${currentProduct.color}`, backgroundColor: `${currentProduct.color}0A` }}
                                >
                                    <h4 className="font-bold text-lg mb-4" style={{ color: "#1B3942" }}>KEY FEATURES</h4>
                                    <ul className="space-y-4">
                                        {currentProduct.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                                                <span
                                                    className="inline-flex min-w-[1.5rem] w-6 h-6 rounded-full mr-3 flex-shrink-0 items-center justify-center text-white text-sm"
                                                    style={{ backgroundColor: currentProduct.color }}
                                                >
                                                    {idx + 1}
                                                </span>
                                                <span className="text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {features.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8' : ''}`}
                            style={{ backgroundColor: idx === currentIndex ? "#1B3942" : "#E16B3B33" }}
                            aria-label={`Go to product ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
                {features.map((product, idx) => (
                    <button
                        key={product.id}
                        onClick={() => goToSlide(idx)}
                        className={`p-4 rounded-lg transition-all duration-300 flex flex-col items-center ${idx === currentIndex ? 'text-white shadow-lg transform scale-105' : 'bg-white hover:shadow-md'
                            }`}
                        style={{
                            backgroundColor: idx === currentIndex ? "#1B3942" : "white"
                        }}
                    >
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2`}
                            style={{
                                backgroundColor: idx === currentIndex ? "white" : `${product.color}22`,
                                color: idx === currentIndex ? product.color : "inherit"
                            }}
                        >
                            {React.createElement(product.icon, {
                                size: 20,
                                color: idx === currentIndex ? product.color : product.color
                            })}
                        </div>
                        <span className="text-xs font-semibold text-center">{product.title.split(' – ')[0]}</span>
                    </button>
                ))}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
        </div>
    );
};
const ParallaxSection = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: `url('https://static.instructohub.com/staticfiles/assets/images/website/parallax.png')`,
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