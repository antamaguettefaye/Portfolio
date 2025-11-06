import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Cpu, Database, Sparkles, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import './index.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
const [currentProject, setCurrentProject] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      title: "Logiciel de Facturation Électronique",
      type: "Projet en entreprise - NORD-SUD Technology",
      period: "Avril - Juillet 2025",
      description: "Participation au développement d'un système complet de facturation électronique avec gestion des commandes, génération automatique de factures (proforma & finales), bons de commande/livraison.",
      tech: ["Symfony ", "MySQL"],

      features: [
        "Ajout et gestion des commandes",
        "Génération de factures proforma",
        "Processus de paiement intégré",
        "Intégration Orange Money & PayPal",
        "Signature électronique via l’API SentTrust",
        "Travail en équipe Agile/Scrum"
      ],
      color: "from-purple-500 to-pink-500",
      icon: ""
    },
    {
      title: "Gestion Intelligente des Déchets Urbains",
      type: "Projet IoT & Web",
      period: "2024-2025",
      description: "Système de surveillance en temps réel des bacs à déchets avec capteurs connectés et plateforme web pour optimiser la collecte à Dakar.",
      tech: ["Node.js", "Angular", "MongoDB", "Arduino", "HC-SR04", "WebSocket"],
      features: [
        "Capteurs à ultrasons pour mesurer le remplissage",
        "Dashboard administrateur en temps réel",
        "Notifications automatiques aux conducteurs",
        "Système de pointage RFID pour gardiens",
        "Géolocalisation des alertes citoyennes",
        "Optimisation des itinéraires de collecte"
      ],
      color: "from-green-500 to-emerald-500",
      icon: ""
    },
    {
      title: "Système de Pointage Intelligent",
      type: "Projet IoT & Web",
      period: "2024-2025",
      description: "Solution complète de gestion de pointage avec ouverture de porte automatique par carte RFID pour employés et apprenants.",
      tech: ["Node.js", "Angular", "MongoDB", "RFID", "Servomoteur", "Arduino", "WebSocket"],
      features: [
        "Pointage par carte RFID avec ouverture automatique",
        "Enregistrement premier/dernier pointage journalier",
        "Interface vigile avec validation photo",
        "Gestion par département et cohorte",
        "Import CSV pour ajouts multiples",
        "Historique absences et retards (jour/semaine/mois)"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: ""
    },
    {
      title: "MiniBank - Plateforme de Transaction",
      type: "Projet Web Full Stack",
      period: "2024-2025",
      description: "Application web sécurisée de gestion de transactions financières avec système de distributeurs et QR codes.",
      tech: ["Laravel", "MySQL"],
      features: [
        "Création de comptes clients et distributeurs",
        "Système de QR code pour transactions",
        "Transferts sécurisés entre comptes (frais 2%)",
        "Commission automatique distributeurs (1%)",
        "Gestion des dépôts et retraits",
        "Annulation de transactions",
        "Affichage temps réel du solde"
      ],
      color: "from-amber-500 to-orange-500",
      icon: ""
    },
    {
      title: "Système d'Arrosage Intelligent",
      type: "Projet IoT & Web",
      period: "2024-2025",
      description: "Solution automatisée pour pépinière avec contrôle via interface web et programmation selon catégorie de plantes.",
      tech: ["Raspberry Pi", "Node.js", "Angular", "MongoDB","Laravel", "RFID", "Capteurs Sol/Lumière"],
      features: [
        "Authentification par carte RFID ou code",
        "Arrosage manuel via interface web",
        "Programmation d'arrosage automatique selon l'heure voulu ",
        "Surveillance temps réel (humidité, luminosité)",
        "CRUD utilisateurs pour SuperAdmin"
      ],
      color: "from-teal-500 to-green-500",
      icon: ""
    },
    {
      title: "Contrôle Température & Humidité",
      type: "Projet IoT & Web",
      period: "2024-2025",
      description: "Système de surveillance pour magasin de stockage avec déclenchement automatique de ventilation et alertes.",
      tech: ["Node.js", "MongoDB", "Arduino", "DHT Sensor", "LCD", "WebSocket"],
      features: [
        "Collecte automatique de température et d’humidité 3x/jour (10h, 14h, 17h)",
        "Déclenchement auto ventilation si T > 27°C",
        "Affichage LCD et interface web",
        "Dashboard admin avec contrôle ",
        "Historique hebdomadaire des températures",
        "Images dynamiques selon humidité"
      ],
      color: "from-red-500 to-pink-500",
      icon: ""
    },
    {
      title: "École de la Réussite",
      type: "Projet Web Full Stack",
      period: "2024-2025",
      description: "Plateforme complète de gestion scolaire pour 10 000+ élèves avec inscriptions, paiements et suivi des présences.",
      tech: ["PHP (MVC)", "JavaScript", "MySQL", "Bootstrap"],
      features: [
        "Gestion des inscriptions élèves et employés",
       "Système de paiement intégré",
       "Frais d'inscription et mensualités gérés",
            "Module de paie et comptabilité"
      ],
      color: "from-indigo-500 to-purple-500",
      icon: ""
    }
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "Angular", "React", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PHP", "Laravel", "Symfony", "API REST", "WebSocket"],
    database: ["MongoDB", "MySQL", "SQL"],
    iot: ["Arduino", "Raspberry Pi", "ESP32", "Capteurs (DHT, HC-SR04, Sol)", "RFID", "Servomoteurs"],
    tools: ["Git/GitHub", "Trello", "Slack", "VS Code", "Agile/Scrum", "UML"]
  };

  const ScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-lg">
                AF
              </div>
              <span className="font-bold text-xl hidden sm:block">Anta Faye</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => ScrollToSection(section)}
                  className={`capitalize transition-all ${
                    activeSection === section
                      ? 'text-purple-400 font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'home' ? 'Accueil' : section === 'about' ? 'À Propos' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : 'Contact'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => ScrollToSection(section)}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-all capitalize"
                >
                  {section === 'home' ? 'Accueil' : section === 'about' ? 'À Propos' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-6xl font-bold">
                  AF
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Anta Maguette Faye
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300">
                Développeuse Web Full Stack & IoT
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Passionnée par la création d'applications modernes et performantes, avec une double compétence en électronique et développement
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:antamaguettefaye@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Me Contacter</span>
              </a>
              <a
                href="https://github.com/antamaguettefaye"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-lg rounded-full font-semibold hover:bg-slate-700/50 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <button
              onClick={() => ScrollToSection('about')}
              className="animate-bounce mt-12 text-purple-400"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <Sparkles className="text-purple-400" />
                  <span>Profile</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Développeuse web full-stack polyvalente avec une expertise unique alliant développement logiciel et électronique. Diplômée de Simplon Sénégal en développement Full Stack & IoT, j'ai également un BTS en Électronique Industrielle.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Mon approche combine créativité technique et rigueur professionnelle pour concevoir des solutions innovantes qui répondent aux besoins réels des utilisateurs.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <div className="space-y-3">
                  <a href="tel:+221782416550" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Phone size={20} />
                    <span>+221 78 241 65 50</span>
                  </a>
                  <a href="mailto:antamaguettefaye@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail size={20} />
                    <span>antamaguettefaye@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin size={20} />
                    <span>Dakar, Grand Yoff, Sénégal</span>
                  </div>
                  <a href="https://www.linkedin.com/in/anta-maguette-faye-10693b244/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/antamaguettefaye" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6">Expériences</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-lg">Développeuse Full-Stack</h4>
                    <p className="text-purple-400">NORD-SUD Technology</p>
                    <p className="text-sm text-gray-400">Avril 2025 - À ce jour</p>
                    <p className="text-gray-300 mt-2">Développement d'un logiciel de facturation électronique avec intégration de paiements (Orange Money, PayPal). Travail en équipe Agile/Scrum.</p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-bold text-lg">Développeuse Full-Stack</h4>
                    <p className="text-pink-400">Simplon Sénégal</p>
                    <p className="text-sm text-gray-400">Juillet 2024 - Mars 2025</p>
                    <p className="text-gray-300 mt-2">Développement de multiples projets web et IoT : gestion scolaire, système bancaire, arrosage intelligent, gestion des déchets.</p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-bold text-lg">Technicienne Sécurité Électronique</h4>
                    <p className="text-cyan-400">Netsysteme Informatique</p>
                    <p className="text-sm text-gray-400">Décembre 2023 - Avril 2024</p>
                    <p className="text-gray-300 mt-2">Installation, configuration et maintenance de systèmes de surveillance (caméras de sécurité).</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4">Formation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Développement Full Stack & IoT</h4>
                    <p className="text-purple-400">Simplon Sénégal</p>
                    <p className="text-sm text-gray-400">Juillet 2024 - Mars 2025</p>
                  </div>
                  <div>
                    <h4 className="font-bold">BTS Électronique Industrielle</h4>
                    <p className="text-pink-400">CEDT LE G15</p>
                    <p className="text-sm text-gray-400">2022 - Mention Assez Bien</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Certificat en Énergie Solaire</h4>
                    <p className="text-cyan-400">Sénégal-Japon</p>
                    <p className="text-sm text-gray-400">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <Code2 className="text-purple-400" size={32} />
                <h3 className="text-2xl font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-lg text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="text-pink-400" size={32} />
                <h3 className="text-2xl font-bold">Backend & BDD</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-pink-500/20 rounded-lg text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-pink-500/20 rounded-lg text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <Cpu className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold">IoT & Outils</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {skills.iot.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-cyan-500/20 rounded-lg text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-cyan-500/20 rounded-lg text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Projects Section */}

<section id="projects" className="min-h-screen py-20 bg-slate-950/50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Mes Projets
    </h2>
    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
      Découvrez mes réalisations en développement web et IoT, du stage professionnel aux projets académiques
    </p>

    {/* Carousel Container */}
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-visible px-16 md:px-20">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ 
            transform: `translateX(calc(-${currentProject * 100}%))`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full px-6 transition-all duration-700 ${
                index === currentProject 
                  ? 'scale-100 opacity-100' 
                  : 'scale-85 opacity-30 pointer-events-none'
              }`}
            >
              <div className="group bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl bg-gradient-to-r ${project.color} bg-clip-text transition-transform duration-300 group-hover:scale-110`}>
                    {project.icon}
                  </div>
                  <span className="text-sm text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold`}>
                  {project.type}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-purple-400 flex items-center gap-2">
                    <ArrowRight size={18} className="animate-pulse" />
                    Fonctionnalités clés :
                  </h4>
                  <ul className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {project.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-start space-x-2 text-sm text-gray-300 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <ArrowRight size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentProject(prev => (prev === 0 ? projects.length - 1 : prev - 1))}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 z-10 group"
        aria-label="Projet précédent"
      >
        <ArrowRight size={24} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={() => setCurrentProject(prev => (prev === projects.length - 1 ? 0 : prev + 1))}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 z-10 group"
        aria-label="Projet suivant"
      >
        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentProject
                ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Aller au projet ${index + 1}`}
          />
        ))}
      </div>

     
    </div>
  </div>

  <style jsx>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(71, 85, 105, 0.1);
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #a855f7, #ec4899);
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #9333ea, #db2777);
    }
  `}</style>
</section>

     
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-slate-950/50 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Travaillons Ensemble
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Je suis ouverte pour de nouvelles opportunités. N'hésitez pas à me contacter !
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:antamaguettefaye@gmail.com"
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <Mail className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">antamaguettefaye@gmail.com</p>
            </a>

            <a
              href="tel:+221782416550"
              className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all group"
            >
              <Phone className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-gray-300">+221 78 241 65 50</p>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/antamaguettefaye"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-slate-800/50 backdrop-blur-lg rounded-full font-semibold hover:bg-slate-700/50 transition-all transform hover:scale-105 border border-slate-700"
            >
              <Github size={24} />
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/anta-maguette-faye-10693b244/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-lg rounded-full font-semibold hover:from-blue-600/30 hover:to-blue-500/30 transition-all transform hover:scale-105 border border-blue-500/30"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
              <ExternalLink size={16} />
            </a>

            <a
              href="mailto:antamaguettefaye@gmail.com"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              <Mail size={24} />
              <span>Envoyer un Email</span>
            </a>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Localisation</h3>
              <p className="text-gray-300">Dakar, Grand Yoff, Sénégal</p>
              <p className="text-gray-400 text-sm mt-2">N'hésitez pas à me contacter pour échanger de projets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Anta Maguette Faye. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/antamaguettefaye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anta-maguette-faye-10693b244/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:antamaguettefaye@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
<style jsx>{`
  /* ... ton CSS existant ... */

  /* 📱 Ajustements pour mobile */
  @media (max-width: 768px) {
    /* Réduction de la largeur du container du carrousel */
    #projects .max-w-5xl {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    /* Réduction des marges internes */
    #projects .group {
      padding: 1.5rem !important;
    }

    /* Réduction de la taille des titres et textes */
    #projects h3 {
      font-size: 1.25rem !important; /* au lieu de 2xl */
    }

    #projects p {
      font-size: 0.9rem !important;
    }

    /* Réduction du texte de type et période */
    #projects span.text-sm {
      font-size: 0.75rem !important;
    }

    /* Réduction du padding du carrousel */
    #projects .overflow-visible {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }

    /* Les boutons flèches deviennent plus petits et se déplacent un peu vers l’intérieur */
    #projects button[aria-label="Projet précédent"],
    #projects button[aria-label="Projet suivant"] {
      padding: 0.5rem !important;
      transform: scale(0.8);
    }

    /* Réduction des dots (indicateurs) */
    #projects .flex.justify-center.gap-3 button {
      width: 8px !important;
      height: 8px !important;
    }

    #projects .flex.justify-center.gap-3 button.w-12 {
      width: 20px !important;
    }

  }

  @media (max-width: 480px) {
    /* encore plus compact sur petit écran */
    #projects h2 {
      font-size: 1.8rem !important;
    }

    #projects p.text-center {
      font-size: 0.85rem !important;
    }

    #projects .group {
      padding: 1rem !important;
    }

    /* Empêcher les éléments de sortir de l’écran */
    #projects .flex-shrink-0 {
      width: 100% !important;
    }

    /* Centrer le contenu et réduire l'espace */
    #projects .group .flex.items-start.justify-between {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    #projects .group h3 {
      text-align: left;
    }
  }
`}</style>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}