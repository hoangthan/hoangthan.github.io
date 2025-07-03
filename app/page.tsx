"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  Award,
  Calendar,
  Database,
  Server,
  Wrench,
  Settings,
  Zap,
  Smartphone,
  ExternalLink,
  Instagram,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-teal-600",
      skills: ["Android/Jetpack Compose", "Flutter", "Kotlin", "Java", "Dart"],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "bg-blue-600",
      skills: ["Spring Boot", "RESTful APIs", "GraphQL", "Microservices"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "bg-slate-700",
      skills: ["MySQL", "PostgreSQL", "Realm", "Firebase", "SQLite"],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "bg-cyan-500",
      skills: ["Git", "Jira", "Firebase", "Fastlane", "GitHub Actions"],
    },
    {
      title: "Architecture & Patterns",
      icon: Settings,
      color: "bg-blue-700",
      skills: ["MVVM", "Clean Architecture", "OOP", "SOLID", "Reactive Programming"],
    },
    {
      title: "Methodologies",
      icon: Zap,
      color: "bg-teal-500",
      skills: ["Agile/Scrum", "TDD", "Code Review", "CI/CD", "Performance Optimization"],
    },
  ]

  const experiences = [
    {
      company: "GFT x Commercial Bank of Dubai",
      role: "Senior Mobile Developer",
      period: "Jan 2025 – present",
      description:
        "Developed a Flutter-based SME application from scratch with BLoC state management, authentication features, and client collaboration.",
      technologies: ["BloC", "UAE Pass", "Cloudflare Turnstile", "GetIt", "Flutter Localizations", "Dio", "Retrofit"],
      highlights: [
        "Developed Flutter-based SME application from scratch",
        "Implemented BLoC state management for predictable workflow",
        "Collaborated with clients for requirements gathering",
        "Implemented comprehensive authentication features including Login, Biometric, Secured Storage, Data Signing, Data Encryption/Decryption",
        "Identified and fixed bugs to enhance app stability and user experience",
      ],
    },
    {
      company: "GFT x GxBank",
      role: "Senior Android Engineer",
      period: "Mar 2024 – Dec 2024",
      description:
        "Led development of award-winning Onboarding flow, implemented modern UI with Kotlin Compose, and achieved 95%+ test coverage.",
      technologies: ["Kotlin Compose", "JUnit", "Turbine", "Mockito", "API-driven UI"],
      highlights: [
        "Won 'Best eKYC and Customer Onboarding Technology Implementation' award",
        "Implemented modern UI architecture using Kotlin Compose",
        "Achieved exceptional test coverage (95%+ for business logic, 84% overall)",
        "Spearheaded project modularization by developing independent SDKs for each product",
        "Implemented comprehensive analytics tracking across UI elements",
        "Engineered dynamic form rendering system using API-driven UI generation",
      ],
      links: [
        {
          name: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=my.com.gxbank.app",
        },
      ],
    },
    {
      company: "Kickoff by Zuju",
      role: "Senior Android Developer (Contract)",
      period: "2022 – 2024",
      description:
        "Built complex features with native animations, implemented real-time data sources, and led team members while optimizing app performance.",
      technologies: [
        "Native Animator",
        "Rive Animation",
        "PreferenceDataStore",
        "Google Tink",
        "GraphQL",
        "AWS AppSync",
        "Ktor Socket",
        "Leak Canary",
      ],
      highlights: [
        "Built and developed new features: Battle Screen, League Screen, Match Details Screen, Prediction Screen, Phone Verification Screen, Onboarding Screen, Ranking Screen",
        "Implemented complex animations by native animator, integrated Rive animation to play Lottie's animation files",
        "Transformed SharedPreference to PreferenceDataStore, encrypted sensitive data with Google Tink",
        "Automated working process with Github Action and Jira API",
        "Customized Gradle task to support multiple GraphQL schema files",
        "Separated sub-modules, distributed as third party library to reduce source size and build time",
        "Integrated realtime datasource from different sources: AWS AppSync, Ktor socket connection",
        "Applied caching mechanism with Network Bound Resource pattern for smooth and fast UI",
        "Led and guided internship members",
        "Participated in full SDLC: Daily Standup, Sprint Planning, Backlog Session, Estimating, Retrospective",
      ],
      links: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/kickoffbyzuju/",
        },
      ],
    },
    {
      company: "Bitcastle",
      role: "Senior Android Developer / Team Leader",
      period: "2021 – 2022",
      description:
        "Led team development, applied clean architecture, and reduced app crashes to under 4% while managing deployment automation.",
      technologies: [
        "Clean Architecture",
        "Coroutine/Flow",
        "Leak Canary",
        "Firebase Crashlytics",
        "Fastlane",
        "Proguard",
        "JUnit4",
        "Wrike",
      ],
      highlights: [
        "Built code base, reviewed code, led team and researched new technology and library",
        "Released app, managed Play Store, collected user feedback, fixed issues",
        "Applied clean architecture and modularization to separate modules into small parts for SDK re-integration",
        "Implemented authentication flow, authentication screens, realtime price screen, user's balance chart with realtime data, notification screen",
        "Reduced app crash percentage to under 4% using Leak Canary and Android Studio Profiler",
        "Optimized app performance by integrating Coroutine/Flow for background tasks",
        "Built custom navigation screen mechanism to avoid crashes and improve syntax",
        "Managed team tasks using Wrike for task management",
        "Automated deployment process by integrating Fastlane",
        "Obfuscated code to prevent reverse engineering using Proguard",
      ],
      links: [
        {
          name: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=com.llc.bitcastle",
        },
      ],
    },
    {
      company: "CheX",
      role: "Senior Android Developer",
      period: "2019 – 2021",
      description:
        "Applied clean architecture and MVVM, implemented authentication flows, and achieved 80%+ test coverage in domain layer.",
      technologies: ["MVVM", "RxAndroid", "Realm", "JUnit4", "Proguard", "Deploy Gate", "Backlog"],
      highlights: [
        "Built code base, reviewed code, performed task estimating, conducted daily team meetings",
        "Applied clean architecture and MVVM to make the app easy to update",
        "Implemented authentication flow, refresh token mechanism",
        "Implemented features: download multiple files, unzip, file management screen",
        "Implemented data flow, synchronized data between server and local database (Realm)",
        "Handled multiple threads using RxAndroid, moved intensive tasks away from main thread",
        "Implemented features: capture image, attach image, play video, generate thumbnail by reducing image size",
        "Implemented feature to track changes in local database, allowing users to restore to original data version",
        "Delivered updates via Deploy Gate for QA/Tester review",
        "Achieved 80%+ test coverage in domain layer using JUnit4",
        "Collaborated with 6 developers and 2 QA members",
        "Used Backlog for task management",
      ],
      links: [
        {
          name: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=jp.co.ysl.chex",
        },
      ],
    },
    {
      company: "PDing",
      role: "Mobile Technical Lead (Side Project)",
      period: "2024",
      description:
        "Led mobile development team in delivering a Flutter-based social media platform enabling direct influencer-fan engagement.",
      technologies: ["Flutter", "Kotlin Spring Boot", "GetStream", "In-App-Purchases", "CometChat"],
      highlights: [
        "Led mobile development team for social media platform enabling direct influencer-fan engagement",
        "Joined backend development with Kotlin Spring Boot",
        "Architected and implemented core features: real-time chat, multimedia messaging, voice/video calls, and monetization through In-App-Purchases",
        "Drove end-to-end project management: translating stakeholder requirements into technical specifications, feature analysis, task breakdown, and sprint planning",
        "Led API design and backend architecture, guided backend team on data flow implementation and troubleshooting",
        "Successfully migrated video calling infrastructure from CometChat to GetStream, improving service reliability and reducing operational costs",
        "Managed full mobile app lifecycle, published to both Google Play Store and Apple App Store",
      ],
      links: [
        {
          name: "Visit Website",
          url: "https://www.pd-ing.com/en",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Steve Hoang
            </h1>
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {["About", "Experience"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100">
              <img
                src="/images/profile-avatar.jpg"
                alt="Steve Hoang - Senior Android Developer"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Steve Hoang
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 mb-6 font-light">Senior Android Developer</p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Senior mobile developer with 7+ years of expertise in Android and Flutter development. Specialized in
              reverse engineering, security implementation, and performance optimization. Proven track record of leading
              award-winning mobile applications from architecture design to production deployment, with deep knowledge
              in clean code principles and scalable mobile solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex justify-center space-x-8 text-slate-600"
          >
            <a
              href="mailto:hoangthan345@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>hoangthan345@gmail.com</span>
            </a>
            <a
              href="tel:+84-362834343"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>+84-362834343</span>
            </a>
            <a
              href="http://linkedin.com/in/thanhq/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Technical Skills</h2>
            <p className="text-slate-500 text-lg">Comprehensive expertise across the mobile development stack</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-slate-600 text-lg">My professional journey and shipped applications</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-slate-800 mb-1">{exp.company}</CardTitle>
                        <CardDescription className="text-blue-600 font-semibold text-base">{exp.role}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-slate-600 flex items-start">
                            <Award className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={exp.links ? "mb-4" : ""}>
                      <h4 className="font-semibold text-slate-800 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {exp.links && (
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Project Links:</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                            >
                              <span>{link.name}</span>
                              {link.name === "Instagram" ? (
                                <Instagram className="w-4 h-4" />
                              ) : (
                                <ExternalLink className="w-4 h-4" />
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
