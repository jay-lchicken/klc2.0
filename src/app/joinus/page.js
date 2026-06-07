"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Heart,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Workshops", href: "/workshops" },
  { label: "Impact", href: "/impact" },
];

const stats = [
  { value: "50+", label: "Active volunteers", icon: Users },
  { value: "500+", label: "Service hours", icon: Heart },
  { value: "15+", label: "Workshops supported", icon: Award },
];

const benefits = [
  {
    title: "Make new friends",
    text: "Connect with students who care about teaching, technology, and community.",
    icon: Users,
  },
  {
    title: "Give back meaningfully",
    text: "Help younger learners build confidence with coding in a supportive setting.",
    icon: Heart,
  },
  {
    title: "Build your portfolio",
    text: "Earn service hours while developing facilitation and leadership experience.",
    icon: Award,
  },
];

const steps = [
  "Fill in the volunteer interest form",
  "Get notified about upcoming events",
  "Support workshops and receive service hours",
];

const formUrl = "https://forms.kidslearncode.org/s/cmo514vz50005p901kosltb7x";

export default function JoinUs() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="join-page">
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
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={formUrl} className="figma-nav-button">
          Apply
          <ArrowRight size={16} aria-hidden="true" />
        </a>

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
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={formUrl} onClick={() => setMobileOpen(false)}>
            Apply
          </a>
        </div>
      )}

      <section className="join-hero">
        <div className="join-hero-copy">

          <h1>Help kids discover code with confidence.</h1>
          <p>
            If you are a Secondary School student who wants to make a difference,
            join our volunteer list and get notified about upcoming KLC workshops.
          </p>
          <div className="figma-actions">
            <a href={formUrl} className="figma-primary">
              Join Us
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="mailto:volunteer@kidslearncode.org" className="figma-secondary">
              <Mail size={18} aria-hidden="true" />
              Ask a question
            </a>
          </div>
        </div>

        <div className="join-hero-panel" aria-label="Volunteer impact preview">
          <div className="join-panel-card join-panel-main">
            <div>
              <h2>Teach. Guide. Encourage.</h2>
            </div>
            <p>
              Support younger learners during free coding workshops and build a
              service portfolio while giving back.
            </p>
          </div>

          <div className="join-panel-card join-panel-small bottom">
            <MessageCircle size={22} aria-hidden="true" />
            <strong>Student-led team</strong>
          </div>
        </div>
      </section>

      <section className="join-stats" aria-label="Volunteer stats">
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

      <section className="join-content">
        <div className="join-section-heading">
          <div className="figma-pill dark">Why volunteer</div>
          <h2>Do meaningful work with people who care.</h2>
          <p>
            Volunteers help make workshops calmer, warmer, and more personal for every
            learner. Service hours are provided for eligible events.
          </p>
        </div>

        <div className="join-benefit-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article key={benefit.title} className="join-benefit-card">
                <div className="join-benefit-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="join-process">
        <div>
          <div className="figma-pill">How it works</div>
          <h2>Three simple steps to get involved.</h2>
        </div>
        <div className="join-step-list">
          {steps.map((step, index) => (
            <div key={step} className="join-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
              <CheckCircle2 size={20} aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="join-cta">
        <div>
          <div className="figma-pill">Ready?</div>
          <h2>Join our volunteering list.</h2>
          <p>
            Your response will be kept confidential. We will contact you when there are
            workshops or events that need volunteers.
          </p>
        </div>
        <div className="join-cta-actions">
          <a href={formUrl} className="figma-primary">
            Open form
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="mailto:volunteer@kidslearncode.org" className="figma-secondary">
            volunteer@kidslearncode.org
          </a>
        </div>
      </section>
    </main>
  );
}
