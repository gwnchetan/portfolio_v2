import type { FormEvent } from 'react'
import './ContactSection.scss'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 14 14 4M5 4h9v9" />
    </svg>
  )
}

function ContactSection() {
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = String(data.get('subject'))
    const body = [
      `Name: ${String(data.get('name'))}`,
      `Email: ${String(data.get('email'))}`,
      '',
      String(data.get('message')),
    ].join('\n')

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-container contact-container">
          <span className="contact-index"><i />05 . CONTACT</span>

          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-heading-lockup">
                <h2 id="contact-title">
                  <span>Let’s</span>
                  <span>Connect</span>
                </h2>
                <svg className="contact-heading-spark contact-heading-spark--left" viewBox="0 0 34 34" aria-hidden="true">
                  <path d="m4 8 7 7m8-12v10m10-4-7 7" />
                </svg>
                <svg className="contact-smile" viewBox="0 0 52 52" aria-hidden="true">
                  <circle cx="26" cy="26" r="22" />
                  <path d="M17 29c1.5 5 5 8 9 8s7.5-3 9-8M18 19h.1m16 0h.1" />
                </svg>
                <svg className="contact-heading-underline" viewBox="0 0 430 32" aria-hidden="true">
                  <path d="M5 23C104 8 275 4 425 12" />
                </svg>
                <aside className="contact-ideas-note">
                  Ideas
                  <br />Projects
                  <br />Opportunities
                  <br />Just say hi!
                  <svg viewBox="0 0 50 76" aria-hidden="true">
                    <path d="M8 3c30 19 37 39 28 67m-12-9 12 9 8-13" />
                  </svg>
                </aside>
              </div>

              <p className="contact-intro">
                I’m always open to <span>new opportunities,</span>
                <br className="contact-desktop-break" />
                interesting projects or just a friendly
                <br className="contact-desktop-break" />
                chat about technology.
              </p>

              <div className="contact-social-links" aria-label="Contact links">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-social-card">
                  <span className="contact-social-icon contact-social-icon--github" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.31 2.05 3.02 1.45.1-.72.39-1.2.7-1.48-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.63 5.24-5.13 5.51.4.35.75 1.03.75 2.08V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                  </span>
                  <span className="contact-social-copy"><strong>GitHub</strong><small>Check my code</small></span>
                  <ArrowUpRight />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="contact-social-card">
                  <span className="contact-social-icon contact-social-icon--linkedin" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29s-1.61 1.1-1.61 2.22V18H10V9.4h2.56v1.17h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07Z" />
                    </svg>
                  </span>
                  <span className="contact-social-copy"><strong>LinkedIn</strong><small>Let’s connect</small></span>
                  <ArrowUpRight />
                </a>
                <a href="#contact-form" className="contact-social-card">
                  <span className="contact-social-icon contact-social-icon--email" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span className="contact-social-copy"><strong>Email</strong><small>Drop a message</small></span>
                  <ArrowUpRight />
                </a>
              </div>

              <aside className="contact-availability">
                <div className="contact-availability-title">
                  <span className="contact-availability-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32">
                      <rect x="5" y="11" width="22" height="16" rx="2" />
                      <path d="M11 11V7h10v4m-16 6h22m-13-2v4h4v-4" />
                    </svg>
                  </span>
                  <h3>Currently<br /><span>Looking For</span></h3>
                  <svg className="contact-availability-arrow" viewBox="0 0 50 40" aria-hidden="true">
                    <path d="M3 31c12 5 26-2 36-22m-10 4 10-4 2 11" />
                    <path d="m43 4 0 7m5-3-5 3" />
                  </svg>
                </div>
                <div className="contact-availability-copy">
                  <p>Internship / Entry Level Opportunities<br />in Web Development, Software Development<br />or related roles.</p>
                  <ul>
                    <li><span aria-hidden="true">⌖</span>Based in India</li>
                    <li><span aria-hidden="true">⌁</span>Open to Remote / Hybrid</li>
                    <li><span aria-hidden="true">✦</span>Eager to Learn &amp; Contribute</li>
                  </ul>
                </div>
                <svg className="contact-availability-spark contact-availability-spark--one" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1v7m0 4v7M1 10h7m4 0h7" /></svg>
                <svg className="contact-availability-spark contact-availability-spark--two" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1v7m0 4v7M1 10h7m4 0h7" /></svg>
              </aside>
            </div>

            <div className="contact-form-wrap">
              <svg className="contact-flight-path" viewBox="0 0 520 106" aria-hidden="true">
                <path d="M5 84c47-34 68-35 102-8s51 26 79 0 46-37 81-14 48 23 76-4 45-41 78-33" />
                <path className="contact-paper-plane" d="m428 17 74-14-39 67-14-20-21-7 60-34-39 41" />
                <path className="contact-flight-spark" d="m397 24 10 8m3-18 2 10m-20 3 10 1" />
              </svg>
              <aside className="contact-form-note" aria-hidden="true">
                Good
                <br />Conversations
                <br />Lead to
                <br /><span>Great Things.</span>
              </aside>

              <form className="contact-form" id="contact-form" onSubmit={sendMessage}>
                <div className="contact-form-heading">
                  <span className="contact-form-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32">
                      <rect x="4" y="7" width="24" height="18" rx="2" />
                      <path d="m5 9 11 9 11-9" />
                    </svg>
                  </span>
                  <div>
                    <h3>Send Me a Message</h3>
                    <p>Have a project in mind, a question, or just want to say hi?<br />Feel free to reach out. I’ll try to get back to you as soon as possible!</p>
                  </div>
                  <span className="contact-response-time"><i />Usually replies soon</span>
                  <svg className="contact-form-spark" viewBox="0 0 28 28" aria-hidden="true"><path d="m5 5 6 6m8-10v8m7-3-6 6" /></svg>
                </div>

                <div className="contact-form-row">
                  <label>
                    <span>Your Name</span>
                    <span className="contact-input-wrap">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.4 2.8-6 7-6s7 2.6 7 6" /></svg>
                      <input name="name" type="text" placeholder="John Doe" autoComplete="name" required />
                    </span>
                  </label>
                  <label>
                    <span>Your Email</span>
                    <span className="contact-input-wrap">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="1.5" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>
                      <input name="email" type="email" placeholder="john@example.com" autoComplete="email" required />
                    </span>
                  </label>
                </div>
                <label className="contact-form-field">
                  <span>Subject</span>
                  <span className="contact-input-wrap">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h9a2 2 0 0 1 2 2v2M16 19H7a2 2 0 0 1-2-2v-2m4-3h7a2 2 0 0 0 2-2V8m-2-2 2 2 2-2M8 18l-2-2-2 2" /></svg>
                    <input name="subject" type="text" placeholder="Let’s work together" required />
                  </span>
                </label>
                <label className="contact-form-field">
                  <span>Message</span>
                  <span className="contact-input-wrap contact-input-wrap--message">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.4-3.2A7.5 7.5 0 1 1 20 11.5Z" /></svg>
                    <textarea name="message" placeholder="Write your message here..." required />
                  </span>
                </label>
                <div className="contact-form-submit-row">
                  <button type="submit">Send Message <ArrowUpRight /></button>
                  <aside className="contact-signoff" aria-hidden="true">
                    <svg viewBox="0 0 56 38"><path d="M53 3C46 26 25 35 4 24m12-7-12 7 9 8" /></svg>
                    <span>Looking forward<br />to hearing from you!</span>
                  </aside>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-container site-footer-inner">
          <div className="site-footer-about">
            <div className="site-footer-brand"><i />CHETAN</div>
            <p>A BG graduate and a developer who loves turning<br />ideas into real and useful products.</p>
            <div className="site-footer-socials" aria-label="Social links">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.31 2.05 3.02 1.45.1-.72.39-1.2.7-1.48-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.63 5.24-5.13 5.51.4.35.75 1.03.75 2.08V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" /></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29s-1.61 1.1-1.61 2.22V18H10V9.4h2.56v1.17h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07Z" /></svg>
              </a>
              <a href="#contact-form" aria-label="Send an email"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg></a>
              <a href="#projects" aria-label="View projects"><svg viewBox="0 0 24 24"><path d="M7 8h10a4 4 0 0 1 3.8 2.8l1.1 3.7a2.6 2.6 0 0 1-4.2 2.7l-2-1.7H8.3l-2 1.7a2.6 2.6 0 0 1-4.2-2.7l1.1-3.7A4 4 0 0 1 7 8Z" /><path d="M7 10v5m-2.5-2.5h5m7-1h.1m2.5 2h.1" /></svg></a>
            </div>
          </div>
          <aside className="site-footer-handnote" aria-hidden="true">
            Keep
            <br />Building
            <svg viewBox="0 0 62 30"><path d="M3 24c18-9 36-13 56-17m-8 0 8 0-2 8" /></svg>
          </aside>
          <nav className="site-footer-links" aria-label="Quick links">
            <strong>Quick Links</strong>
            {quickLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </nav>
          <div className="site-footer-made">
            <h2>Made with<br /><span>Curi<span>o</span>sity.</span></h2>
            <svg className="site-footer-crown" viewBox="0 0 38 32" aria-hidden="true"><path d="m3 8 7 16h18l7-16-10 8-6-13-6 13L3 8Zm7 20h18" /></svg>
            <p>Designed with care. Built to learn,<br />create, and keep improving.</p>
          </div>
          <a className="site-footer-top" href="#home"><span>↑</span> Back to Top</a>
          <div className="site-footer-bottom">
            <span>© 2026 Chetan. All rights reserved.</span>
            <span>Same Place. More Projects Soon...</span>
          </div>
        </div>
        <svg className="site-footer-spark" viewBox="0 0 26 26" aria-hidden="true"><path d="M13 1v9m0 6v9M1 13h9m6 0h9" /></svg>
      </footer>
    </>
  )
}

export default ContactSection
