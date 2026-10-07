import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <a href="#hero" className="brand-link">
          <div className="brand-initials">MI</div>
          <span className="brand-name">{personalData.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action & Status */}
        <div className="header-actions">
          <div className="avail-badge">
            <span className="avail-dot"></span>
            <span>Available</span>
          </div>

          <button 
            type="button" 
            className="btn btn-yellow btn-sm"
            onClick={onOpenResume}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="mobile-btn"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-content">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-item"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="btn btn-yellow w-full mt-2"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
            >
              <FileText size={15} />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
