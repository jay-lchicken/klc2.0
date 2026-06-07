"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  GraduationCap,
  Menu,
  PlayCircle,
  School,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const partners = [
  {
    name: "Formbricks",
    href: "https://formbricks.com",
    logo: "/footerlogo.e272c0f1.svg",
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Impact", href: "#stats" },
  {label: "Track your hours",href: "https://p2.kidslearncode.org"}
];

const stats = [
  { value: "300+", label: "Students taught", icon: Users },
  { value: "10+", label: "Schools reached", icon: School },
  { value: "70%", label: "Enjoyment rate", icon: Sparkles },
  { value: "4", label: "Years running", icon: GraduationCap },
];

const courses = [
  {
    title: "Scratch Basics",
    level: "Beginner",
    age: "Ages 7-9",
    image: "/ScratchSample.png",
    icon: Code2,
    description: "Build interactive stories, animations, and games with visual programming.",
    outcomes: ["Loops and conditions", "Creative projects", "Game mechanics"],
  },
  {
    title: "Python Fundamentals",
    level: "Intermediate",
    age: "Ages 10-12",
    image: "/PythonSample.png",
    icon: BookOpen,
    description: "Learn text-based coding through puzzles, useful scripts, and mini-games.",
    outcomes: ["Variables and functions", "Debugging practice", "Text-based games"],
  },
  {
    title: "AI & Game Dev",
    level: "Advanced",
    age: "Ages 10-12",
    image: "/media.png",
    icon: Brain,
    description: "Explore AI concepts and game development through guided challenges.",
    outcomes: ["AI creativity", "Game engines", "Project showcase"],
  },
];

const aboutCards = [
  "Free workshops for every child",
  "Student mentors who make coding approachable",
  "Project-based lessons with real outcomes",
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="figma-page">
      <header className="figma-nav">
        <Link href="/" className="figma-brand" aria-label="Kids Learn Code home">
          <Image
            src="/logov2.png"
            alt="Kids Learn Code"
            width={100}
            height={30}
            priority
          />
        </Link>

        <nav className="figma-nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Link href="/joinus" className="figma-nav-button">
          Join Us
          <ArrowRight size={16} aria-hidden="true" />
        </Link>

        <button
          className="figma-menu-button"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen && (
        <div className="figma-mobile-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <Link href="/joinus" onClick={() => setMobileOpen(false)}>
            Join Us
          </Link>
        </div>
      )}

      <section className="figma-hero" id="home">
        <div className="figma-hero-copy">

          <h1>Developing young creators through code.</h1>
          <p>
            Kids Learn Code helps children build confidence with Scratch, Python, AI,
            and game development through free hands-on workshops.
          </p>
          <div className="figma-actions">
            <Link href="/joinus" className="figma-primary">
              Volunteer with us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#courses" className="figma-secondary">
              <PlayCircle size={18} aria-hidden="true" />
              View courses
            </a>
          </div>
        </div>

        <div className="figma-hero-art" aria-label="Kids Learn Code learning preview">
          <div className="figma-code-window">
            <div className="figma-window-dots">
              <span />
              <span />
              <span />
            </div>
            <pre>{`if curious:
  create()
  share()
  learn_more()`}</pre>
          </div>

          <div className="figma-photo-card">
            <Image
              src="/rulangworkshop.png"
              alt="Kids Learn Code"
              width={560}
              height={420}
              className="figma-photo"
              priority
            />
          </div>

          <div className="figma-floating-card figma-floating-top">
            <Code2 size={20} aria-hidden="true" />
            <span>Build real projects</span>
          </div>
          <div className="figma-floating-card figma-floating-bottom">
            <GraduationCap size={20} aria-hidden="true" />
            <span>Present with confidence</span>
          </div>
        </div>
      </section>

      <section className="figma-stats" id="stats" aria-label="Kids Learn Code impact">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article key={stat.label} className="figma-stat-card">
              <Icon size={24} aria-hidden="true" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          );
        })}
      </section>

      <section className="figma-about" id="about">
        <div className="figma-section-copy">
          <div className="figma-pill dark">About Us</div>
          <h2>Making code feel friendly, creative, and possible.</h2>
          <p>
            We aim to engage and ignite kids&apos; passion for coding in an evolving
            world. Every session is practical, playful, and built around the belief
            that access to technology education should be free.
          </p>
          <div className="figma-check-list">
            {aboutCards.map((item) => (
              <div key={item}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="figma-about-panel">
          <div className="figma-about-number">01</div>
          <h3>Learn by building</h3>
          <p>
            Students turn each concept into something visible: a story, a tool,
            a game, or a showcase project.
          </p>
        </div>
      </section>

      <section className="figma-courses" id="courses">
        <div className="figma-section-header">
          <div className="figma-pill">Courses</div>
          <h2>Choose a path and start creating.</h2>
          <p>
            The Figma design breaks learning into clear course cards, so each learner
            can quickly understand what they will make and where to begin.
          </p>
        </div>

        <div className="figma-course-grid">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article key={course.title} className="figma-course-card">
                <div className="figma-course-image">
                  <Image
                    src={course.image}
                    alt=""
                    width={420}
                    height={260}
                    className="figma-course-photo"
                  />
                </div>
                <div className="figma-course-body">
                  <div className="figma-course-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="figma-course-tags">
                    <span>{course.age}</span>
                    <span>{course.level}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <ul>
                    {course.outcomes.map((outcome) => (
                      <li key={outcome}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="figma-footer">
        <div className="figma-footer-main">
          <div>
            <Image
              src="/Kids Learn Code (130 x 50 px)-2.png"
              alt="Kids Learn Code"
              width={130}
              height={50}
            />
            <p>Allowing all students to learn coding for free.</p>
          </div>
          <Link href="/joinus" className="figma-primary">
            Register interest
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="figma-partners" aria-label="Kids Learn Code partners">
          <span>Our Partner</span>
          <div className="figma-partner-list">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="figma-partner-logo"
                aria-label={`${partner.name} website`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={190}
                  height={42}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
