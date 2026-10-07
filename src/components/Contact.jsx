import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Building2, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss Your <span className="text-gradient">Next Project</span>
          </h2>
          <p className="section-subtitle">
            Open to full-stack engineering opportunities, scalable React & Node.js development, and enterprise applications.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout-clean">
          {/* Left Column: Direct Info Card */}
          <div className="contact-direct-card pro-card">
            <h3 className="direct-title">Contact Information</h3>
            <p className="direct-sub">
              Feel free to send a direct message or connect via email to discuss web and mobile software development requirements.
            </p>

            {/* Email Box */}
            <div className="contact-field-box">
              <div className="field-icon-wrap">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="field-info">
                <span className="field-label">Direct Email</span>
                <div className="field-row">
                  <a href={`mailto:${personalData.email}`} className="field-value-link">
                    {personalData.email}
                  </a>
                  <button 
                    type="button" 
                    className="field-copy-btn" 
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Organization */}
            <div className="contact-field-box">
              <div className="field-icon-wrap">
                <Building2 size={18} className="text-primary" />
              </div>
              <div className="field-info">
                <span className="field-label">Current Company</span>
                <a 
                  href={personalData.company.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="field-link-external"
                >
                  <span>{personalData.company.name}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Availability Box */}
            <div className="avail-status-box">
              <span className="avail-dot"></span>
              <div>
                <h4 className="avail-title">Available for Hire & Projects</h4>
                <p className="avail-desc">
                  Bringing 3+ years of React, React Native, Node.js, and clean code practices to your team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-container pro-card">
            <h3 className="form-heading">Send a Message</h3>

            {isSent ? (
              <div className="form-success-box">
                <CheckCircle2 size={32} className="text-emerald" />
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I will review your message and reply promptly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="clean-form">
                {errorMsg && (
                  <div className="form-error-msg">
                    {errorMsg}
                  </div>
                )}

                <div className="form-two-cols">
                  <div className="form-input-group">
                    <label htmlFor="name" className="input-label">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith" 
                      className="clean-input"
                      required
                    />
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="email" className="input-label">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com" 
                      className="clean-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="subject" className="input-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity" 
                    className="clean-input"
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="message" className="input-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Maaz, I'd like to discuss a project..." 
                    className="clean-textarea"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-action-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
