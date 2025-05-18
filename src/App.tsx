import React from 'react';
import './App.css';

// Replace with your own photo in the public folder and update the path below
const avatarUrl = process.env.PUBLIC_URL + '/avatar.jpg';

const education = [
  {
    school: 'University of Example',
    date: '2018 - 2022',
    desc: 'B.Sc. in Computer Science. Graduated with honors, specialized in web development and UI/UX design.'
  },
  {
    school: 'Example High School',
    date: '2016 - 2018',
    desc: 'High School Diploma, Science stream.'
  }
];

const experience = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    date: '2022 - Present',
    desc: 'Building modern web apps with React, collaborating with designers, and improving user experience.'
  },
  {
    title: 'Intern Web Developer',
    company: 'Webify Agency',
    date: '2021 - 2022',
    desc: 'Assisted in developing client websites and learned best practices in responsive design.'
  }
];

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Git', 'Figma'
];

const projects = [
  {
    title: 'Personal Blog',
    desc: 'A modern blog platform built with React and Node.js.',
    github: 'https://github.com/yourusername/personal-blog',
    demo: 'https://yourblog.com'
  },
  {
    title: 'Portfolio Website',
    desc: 'My own portfolio website to showcase my work and skills.',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com'
  }
];

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <aside className="sidebar sticky-sidebar">
        <img src={avatarUrl} alt="Avatar" className="avatar" />
        <h1>Your Name</h1>
        <div className="title">Web Developer</div>
        <div className="info">
          <div className="info-item"><span className="info-label">Email:</span> your.email@example.com</div>
          <div className="info-item"><span className="info-label">Phone:</span> +1 234 567 8901</div>
          <div className="info-item"><span className="info-label">Location:</span> Your City, Country</div>
        </div>
        <div className="social">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Education */}
        <section className="section">
          <h2>Education</h2>
          <div className="timeline">
            {education.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-title">{item.school}</div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-title">{item.title} @ {item.company}</div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((skill, idx) => (
              <span className="skill-badge" key={idx}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-title">{proj.title}</div>
                <div className="project-desc">{proj.desc}</div>
                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="section">
          <h2>Contact</h2>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
