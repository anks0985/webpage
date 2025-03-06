import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
const Container = ({ children, className = '' }) => (
  <div className={`container mx-auto px-4 ${className}`}>
    {children}
  </div>
);
const ProductSection = ({ id, title, number, description, features }) => {
  return (
    <div id={id} className="mb-16 scroll-mt-20">
      <div className="flex items-start mb-4">
        <div className="min-w-[3rem] w-12 h-12 aspect-square bg-[#E16B3B] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
          {number}
        </div>
        <h3 className="text-4xl mb-6 leading-tight">{title}</h3>
      </div>
      <div className="ml-16">
        <p className="text-2xl text-[#1B3942] mb-6">{description}</p>
        <div className="border-l-2 border-solid border-[#E16B3B] p-6 bg-gray-50">
          <h4 className="text-lg font-semibold text-[#1B3942] mb-4">KEY FEATURES</h4>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="inline-flex min-w-[1.25rem] w-5 h-5 rounded-full border-4 border-[#1B3942] mr-3 flex-shrink-0"></span>
                <span className="text-xl text-[#1B3942]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const Products = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Transform education with AI-Powered tools";
  const aiPoweredIndex = fullText.indexOf("AI-Powered");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleScrollToAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    };
    handleScrollToAnchor();
    window.addEventListener('hashchange', handleScrollToAnchor);
    return () => {
      window.removeEventListener('hashchange', handleScrollToAnchor);
    };
  }, []);
  const renderColoredText = () => {
    if (animatedText.length <= aiPoweredIndex) {
      return <span className="text-[#1B3942]">{animatedText}</span>;
    } else if (animatedText.length <= aiPoweredIndex + 10) {
      return (
        <>
          <span className="text-[#1B3942]">{animatedText.substring(0, aiPoweredIndex)}</span>
          <span className="text-[#E16B3B]">{animatedText.substring(aiPoweredIndex, animatedText.length)}</span>
        </>
      );
    } else {
      return (
        <>
          <span className="text-[#1B3942]">{animatedText.substring(0, aiPoweredIndex)}</span>
          <span className="text-[#E16B3B]">AI-Powered</span>
          <span className="text-[#1B3942]">{animatedText.substring(aiPoweredIndex + 10)}</span>
        </>
      );
    }
  };
  const features = [
    {
      id: "course-creator",
      number: "01",
      title: "AI Course Creator – Empower Educators, Effortlessly",
      description: "Designing a high-quality course has never been easier. With AI Course Creator, educators can generate structured, curriculum-aligned content with just a few inputs—while retaining complete control.",
      features: [
        "Choose from proven methodologies like Bloom's Taxonomy or customize your own",
        "Define modules, topics, and lessons with ease",
        "Fine-tune AI-generated content with teacher-driven prompts",
        "Seamlessly enrich courses with AI-suggested images, videos, and media",
        "Intuitive, educator-friendly interface with no technical complexity"
      ]
    },
    {
      id: "course-enhancer",
      number: "02",
      title: "Course Enhancer – Turn Any Course into an AI-Powered Learning Hub",
      description: "Supercharge existing courses with engaging AI-driven activities. Whether it's a course built using InstructoHub or an existing LMS course, instructors can instantly enhance their content with quizzes, assignments, and discussions—perfectly aligned with learning objectives.",
      features: [
        "Launch the Course Enhancer inside Canvas and other popular LMS platforms",
        "Generate quizzes, assignments, and discussions that align with learning objectives",
        "Enhance existing courses without rebuilding from scratch",
        "Transform static content into interactive learning experiences",
        "Increase student engagement and participation with AI-powered activities"
      ]
    },
    {
      id: "ai-assistant",
      number: "03",
      title: "AI Assistant – Your 24/7 Smart Learning Companion",
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
      id: "practice-mode",
      number: "04",
      title: "Practice Mode – Learn by Doing with AI-Powered Adaptation",
      description: "Traditional study methods fall short in personalization. Practice Mode dynamically adjusts to student responses, providing context-based Q&A exercises tailored to LMS modules, pages, and activities.",
      features: [
        "The AI adapts based on accuracy and response time",
        "Provides interactive, personalized learning experiences",
        "Enables conversational AI discussions to deepen understanding",
        "Makes learning more engaging and effective",
        "Reinforces concepts through active practice"
      ]
    },
    {
      id: "auto-grading",
      number: "05",
      title: "AI Auto-Grading – Cuts Grading Time Drastically",
      description: "Grading shouldn't be a bottleneck. AI Auto-Grading eliminates the tediousness of manual assessment by providing instant, rubric-based grading suggestions with teacher review capabilities.",
      features: [
        "Evidence-based marking suggestions for teacher final review and approval",
        "Review AI-generated grading insights with a user-friendly interface",
        "Make adjustments where needed without spending hours reviewing submissions",
        "Focus on meaningful feedback while AI handles routine assessment",
        "Process large volumes of submissions efficiently"
      ]
    },
    {
      id: "admin-control",
      number: "06",
      title: "Admin Control Panel – AI Management, Fully in Your Control",
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
  return (
    <div style={{ fontFamily: 'PT Serif', color: "#1B3942" }} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen bg-white">
          <section className="pt-20 pb-16 bg-gray-50">
            <Container>
              <div className="text-center w-full mx-auto">
                <h1 className="text-7xl mb-6">
                  <span className="relative">
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#1B3942] bg-opacity-10"></span>
                    {renderColoredText()}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="text-2xl pt-4">
                  <span className='text-[#1B3942]'>The future of education is adaptive, personalized, and intelligent.</span>
                  <br />
                  <span className='text-[#E16B3B]'>Discover how our AI-powered suite can revolutionize your institution.</span>
                </p>
              </div>
            </Container>
          </section>
          <section className="py-20">
            <Container>
              <div className="flex items-center mb-10">
                <div className="w-2 h-2 bg-[#E16B3B] rounded-full mr-3"></div>
                <span className="text-sm uppercase tracking-wider">
                  Our Products
                </span>
              </div>
              <h2 className="text-5xl mb-8 leading-tight">
                Overview
              </h2>
              <p className="text-2xl mb-12">
                Explore our AI-powered solutions designed to enhance every aspect of education. From automating course creation to improving student engagement and streamlining administration, our tools bring efficiency, intelligence, and innovation to your LMS experience.
              </p>
              <div className="space-y-16">
                {features.map((feature, index) => (
                  <ProductSection
                    key={index}
                    id={feature.id}
                    number={feature.number}
                    title={feature.title}
                    description={feature.description}
                    features={feature.features}
                  />
                ))}
              </div>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Products;