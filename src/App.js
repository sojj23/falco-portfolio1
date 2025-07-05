"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)

  const skillsData = {
    Cybersecurity: [
      "Network Security",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response",
    ],
    Networking: [
      "Network Troubleshooting",
      "Firewall Management",
      "Routing Protocols",
      "Network Monitoring",
      "Router & Switch Config",
    ],
  }

  const certificates = [
    {
      name: "CCNAv7: Switching, Routing, and Wireless Essentials",
      description:
        "Learning the basic network configuration, troubleshooting, understanding common LAN security threats, and configuring and securing basic wireless networks.",
    },
    {
      name: "CCNA: Introduction to Networks",
      description: "A program combines theoretical knowledge with practical skills through hands-on labs and simulation tools, preparing students for entry-level networking roles.",
    },
    {
      name: "Cybersecurity Essentials",
      description:
        "A beginner-friendly course that is perfect for anyone interested in cybersecurity, whether for personal online safety or as a career stepping stone.",
    },
  ]

  const project = {
    title: "Online Cookbook Management System (PNOY DISHCOVERY)",
    description:
      "The platform aims to preserve and promote the rich culinary heritage of the Philippines by organizing, managing, and showcasing a diverse collection of recipes.",
    tech: ["HTML/CSS", "Node.js", "Javascripts"],
    image: "./images/Pnoy.jpg",
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      // Trigger skills animation when skills section is visible
      const skillsSection = document.getElementById("skills")
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="App dark-mode">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">AF</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {["home", "about", "certificates", "projects", "contact"].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-controls">
            <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Arvin</span>
            </h1>
            <p className="hero-subtitle">An aspiring Cybersecurity Analyst and Network</p>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences that make a difference.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection("projects")}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello there! I'm Arvin, an upcoming 4th year Computer Engineering student at Technological Institute of the Philippines - Manila, specializing in Cybersecurity and Networking.
              </p>
              <p>
                My journey in cybersecurity started with a curiosity about emerging digital threats, and it has evolved into a
                career path focused on building robust security solutions and proactive threat detection systems.
              </p>
              <p>
                I'm still learning and growing my skills and knowledge in this career. I have built a solid foundation learning cybersecurit through 
                HTB Academy, THM Academy, and others, finishing labs and challenges that have sharpened my skills.
              </p>
            </div>
            <div className="about-skills">
              <div className="skills-card">
                {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                  <div key={category} className="skills-category">
                    <h3 className="category-title">{category}</h3>
                    <div className="skills-tags">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={`skill-pill ${skillsVisible ? "visible" : ""}`}
                          style={{ animationDelay: `${(categoryIndex * skills.length + skillIndex) * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Now only Certifications */}
      <section id="certificates" className="certificates">
        <div className="container">
          <h2 className="section-title">Certificates</h2>
          <div className="certifications-container">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.name}
                className={`certification-card ${skillsVisible ? "visible" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="certification-header">
                  <span className="certification-icon">🏆</span>
                  <h3 className="certification-name">{certificate.name}</h3>
                </div>
                <p className="certification-description">{certificate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-description">
            I'm open to new opportunities and collaborations. If you have a project in mind or just want to say hi,
            feel free to reach out!
          </p>
          <div className="contact-buttons">
            <a href="mailto:arvinfalco23@gmail.com" className="btn btn-primary">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/arvin-falco-297028372/"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/sojj23" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Arvin Falco. Built with React and passion for cybersecurity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
