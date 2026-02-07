import React from 'react';
import './App.css';

// Replace with your updated photo in the public folder
const avatarUrl = process.env.PUBLIC_URL + '/avatar.jpg';

// Education
const education = [
  {
    school: 'OFPPT – Digital Development',
    date: '2024 - 2026',
    desc: 'B.Sc. in Digital Development. Specialized in Web Fullstack Development, UI/UX design, and modern web technologies.'
  },
  {
    school: 'Moulay Youssef High School',
    date: '2021 - 2024',
    desc: 'High School Diploma, BAC SVT.'
  }
];

// Experience (updated with your projects & work)
const experience = [
  {
    title: 'Web Developer & Entrepreneur',
    company: 'Self-Employed / RC Apparel & Web Projects',
    date: '2025 - Present',
    desc: 'Managing 15 websites and 15 Pinterest profiles focused on food, recipes, and e-commerce. Building fullstack web applications, optimizing SEO, and handling content creation and social media strategy.'
  },
  {
    title: 'Intern Web Developer',
    company: 'Webify Agency',
    date: '2022 - 2024',
    desc: 'Assisted in developing client websites, implementing responsive design, and learning professional frontend & backend practices.'
  }
];

// Skills (updated)
const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'PHP', 'Python', 'MySQL', 'Git', 'Figma', 'UI/UX Design', 'SEO', 'Content Management'
];

// Projects (updated with your portfolio & websites)
const projects = [
  {
    title: 'RC Apparel Website',
    desc: 'E-commerce website for RC Racing apparel, including branding and custom UI.',
    github: 'https://github.com/yousefbhl',
    demo: 'https://rc-apparel.com'
  },
  {
    title: 'PurRecipe & Food Websites',
    desc: 'Multiple recipe and food content websites managed and maintained professionally.',
    github: 'https://github.com/yousefbhl',
    demo: 'https://purrecipe.com'
  },
  {
    title: 'Portfolio Website',
    desc: 'My personal portfolio showcasing web development projects, skills, and experience.',
    github: 'https://github.com/yousefbhl',
    demo: 'https://youssefbahloul.tech'
  }
];

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <aside className="sidebar sticky-sidebar">
        <img src={avatarUrl} alt="Avatar" className="avatar" />
        <h1>Youssef Bahloul</h1>
        <div className="title">Web Developer & Entrepreneur</div>
        <div className="info">
          <div className="info-item"><span className="info-label">Email:</span> youbahyt@gmail.com</div>
          <div className="info-item"><span className="info-label">Phone:</span> +212 778 81 33 66</div>
          <div className="info-item"><span className="info-label">Location:</span> Casablanca, Morocco</div>
        </div>
        <div className="social">
          <a href="https://github.com/yousefbhl" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/youssef-bahloul-a81578350/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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