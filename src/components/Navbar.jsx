import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';
import { FileText, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Expertise', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header-clean ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-badge-clean">
            <span>MI</span>
          </div>
          <div className="logo-text-group">
            <span className="logo-name">{personalData.name}</span>
            <span className="logo-sub">{personalData.role}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-nav-desktop">
          <ul className="navbar-link-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link-item ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-end-actions">
          <div className="nav-avail-tag">
            <span className="avail-dot-mini"></span>
            <span>Available for Hire</span>
          </div>

          <button 
            type="button" 
            className="btn btn-primary btn-sm"
            onClick={onOpenResume}
            id="nav-resume-btn"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-hamburger-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-inner">
            <ul className="mobile-links-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`mobile-link-entry ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-bottom">
              <button 
                type="button" 
                className="btn btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <FileText size={16} />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
