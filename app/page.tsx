import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";

const skillGroups = [
  { number: "01", title: "Frontend core", skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { number: "02", title: "Interface", skills: ["Material UI", "Bootstrap", "React Bootstrap", "Responsive design", "Design systems"] },
  { number: "03", title: "Quality", skills: ["Unit testing", "Accessibility", "Performance", "API integration", "Defect analysis"] },
  { number: "04", title: "Workflow", skills: ["GitHub", "GitLab", "Bitbucket", "Jira", "Postman", "Sonar"] },
];

const experience = [
  {
    date: "SEP 2024 — PRESENT",
    location: "Bengaluru, India",
    company: "Infinite Computer Solutions",
    role: "Software Engineer · Verizon",
    points: [
      "Develop and maintain responsive customer-facing interfaces for Verizon web experiences.",
      "Build reusable UI components, integrate client-side APIs, and write unit tests.",
      "Partner with backend and QA teams on feature validation, defect fixes, and performance tuning.",
    ],
  },
  {
    date: "APR 2019 — AUG 2024",
    location: "Bengaluru, India",
    company: "eServeCloud Solution Pvt. Ltd.",
    role: "Frontend Engineer",
    points: [
      "Built user-facing screens with React, JavaScript, HTML, CSS, Bootstrap, and Material UI.",
      "Translated functional specifications into maintainable interface solutions.",
      "Delivered products across customer engagement, e-learning, assessment, and commerce domains.",
    ],
  },
];

const projects = [
  { number: "01", title: "eServeCloud", type: "Customer engagement platform", body: "An omnichannel customer engagement platform connecting cloud applications so businesses can acquire and serve customers through a unified interface.", tags: ["React", "Material UI", "APIs"] },
  { number: "02", title: "e-Learning", type: "Learning management", body: "A responsive learning solution for session, batch, class, and user management—turning complex administration into clear, reusable workflows.", tags: ["React", "Bootstrap", "JavaScript"] },
  { number: "03", title: "e-Assessment", type: "Online testing", body: "An online test generation tool that enables educators and corporate trainers to create, publish, and conduct structured assessments.", tags: ["React", "HTML/CSS", "Reusable UI"] },
];

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><div className="section-index">{index} / {eyebrow}</div><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero shell">
          <div className="hero-copy reveal">
            <div className="availability hero-availability"><i /> Available for new projects &amp; opportunities</div>
            <p className="hero-intro">Hi, I&apos;m</p>
            <h1>Rahul Kumar</h1>
            <h2>Software Engineer</h2>
            <p className="hero-lede">I build responsive, reliable, and maintainable web applications using React, Next.js, TypeScript, and modern JavaScript—with a focus on reusable components and clean user experiences.</p>
            <div className="hero-actions"><a className="button" href="#projects">Explore selected work <Icon name="arrow" /></a><a className="button button-secondary" href="/documents/rahul-kumar-resume.pdf" download><Icon name="download" /> Download résumé</a></div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/rahulmca94/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              <a href="https://github.com/rahulkr94" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
              <a href="mailto:rahulmca94@gmail.com"><Icon name="mail" /> Email</a>
            </div>
          </div>
          <div className="studio-card reveal" aria-label="Frontend engineering workspace illustration">
            <div className="window-bar"><div><i /><i /><i /></div><span>src/components/Shell.tsx</span><b>PRODUCTION</b></div>
            <div className="code-block" aria-hidden="true">
              <span><i>01</i><b>type</b> ProductExperience = &#123;</span>
              <span><i>02</i>&nbsp;&nbsp;responsive: <em>true</em>;</span>
              <span><i>03</i>&nbsp;&nbsp;accessible: <em>true</em>;</span>
              <span><i>04</i>&nbsp;&nbsp;maintainable: <em>true</em>;</span>
              <span><i>05</i>&#125;;</span>
              <span className="code-space"><i>07</i><b>export const</b> build =</span>
              <span><i>08</i>&nbsp;&nbsp;craft(ProductExperience);</span>
            </div>
            <div className="system-row"><span><i /> System ready</span><span>React</span><span>TypeScript</span><span>A11y</span></div>
            <div className="orbit orbit-one">UI</div><div className="orbit orbit-two">TS</div>
          </div>
        </section>

        <section className="metrics shell" aria-label="Career highlights">
          <div><strong>7+ years</strong><span>Building product interfaces</span></div>
          <div><strong>React &amp; Next.js</strong><span>Primary frontend stack</span></div>
          <div><strong>5 product domains</strong><span>Telecom, SaaS, learning, assessment &amp; commerce</span></div>
        </section>

        <section className="section shell about" id="about">
          <div className="profile-card">
            <div className="portrait"><Image src="/images/rahul-kumar-portrait.jpg" alt="Rahul Kumar, Software Engineer" width={896} height={1200} sizes="(max-width: 720px) calc(100vw - 66px), (max-width: 1020px) 240px, 340px" /></div>
            <div className="profile-meta"><span>Rahul Kumar</span><small>Software Engineer · Bengaluru</small></div>
            <div className="availability"><i /> Available for meaningful work</div>
          </div>
          <div className="about-copy">
            <p className="section-index">01 / ABOUT ME</p>
            <h2>Building reliable interfaces with clarity and consistency.</h2>
            <p className="lead">I enjoy shaping complex requirements into experiences that feel simple. My work spans telecom, customer engagement, online learning, assessment, and commerce products.</p>
            <p>I work closely with product owners, backend engineers, designers, and QA teams—balancing reusable architecture, usability, performance, testing, and delivery.</p>
            <div className="discipline-grid">
              {["Reusable UI systems", "Responsive engineering", "Accessible experiences", "API integration", "Quality & testing", "Cross-team delivery"].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills"><div className="shell">
          <SectionHeading index="02" eyebrow="MY SKILLS" title="Tools I use to build and ship product interfaces." copy="A focused, résumé-backed toolkit—not a wall of logos." />
          <div className="skill-grid">{skillGroups.map(group => <article key={group.title}><span>{group.number}</span><h3>{group.title}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
        </div></section>

        <section className="section shell" id="projects">
          <SectionHeading index="03" eyebrow="FEATURED PROJECTS" title="Product work grounded in real user needs." copy="A selection of platforms and interfaces from more than seven years of frontend delivery." />
          <article className="featured-project">
            <div className="product-visual" aria-label="Abstract Verizon customer portal preview">
              <div className="product-nav"><b>V</b><span>Overview</span><span>Plans</span><span>Devices</span><i /></div>
              <div className="product-body"><div><small>YOUR PLAN</small><strong>Wireless, made for you.</strong><p>5G • Unlimited • Flexible</p><button>View account</button></div><div className="chart"><span>Network usage</span><div className="bars">{[42,68,54,85,72,92,64].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div></div>
            </div>
            <div className="project-story"><div className="project-meta"><span>FEATURED CASE STUDY</span><span>2024—PRESENT</span></div><h3>Verizon digital experiences</h3><p>Developing and maintaining responsive customer-facing interfaces, reusable UI components, client-side API integrations, unit tests, and defect fixes for Verizon web experiences.</p><ul><li><Icon name="check" /> Responsive, reusable UI</li><li><Icon name="check" /> API integration &amp; data handling</li><li><Icon name="check" /> Unit tests &amp; performance tuning</li></ul><div className="tag-row"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Unit testing</span></div></div>
          </article>
          <div className="project-grid">{projects.map(project => <article key={project.title}><div className="project-number">{project.number}</div><small>{project.type}</small><h3>{project.title}</h3><p>{project.body}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section className="section experience-section" id="experience"><div className="shell">
          <SectionHeading index="04" eyebrow="EXPERIENCE" title="Seven years of turning requirements into reliable products." />
          <div className="timeline">{experience.map((job, i) => <article key={job.company}><div className="timeline-date"><span>{job.date}</span><small><Icon name="map" size={14} /> {job.location}</small></div><div className="timeline-role"><i>{String(i + 1).padStart(2, "0")}</i><h3>{job.company}</h3><p>{job.role}</p></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div>
          <div className="education"><div><span>EDUCATION</span><h3>Master of Computer Applications</h3><p>IGNOU · 2018</p></div><div><span>FOUNDATION</span><h3>B.Sc. in Physics</h3><p>V.K.S.U Ara · 2014</p></div></div>
        </div></section>

        <section className="section shell github-section">
          <div><p className="section-index">05 / OPEN SOURCE</p><h2>Code beyond the case studies.</h2><p>I use GitHub to explore ideas, practice modern frontend patterns, and keep improving the systems behind the interface.</p><a className="button button-dark" href="https://github.com/rahulkr94" target="_blank" rel="noreferrer"><Icon name="github" /> Visit GitHub profile <Icon name="external" /></a></div>
          <div className="repo-panel"><div className="repo-head"><span>github.com/rahulkr94</span><i>PUBLIC PROFILE</i></div><div className="commit-list"><span><i>01</i> Component architecture</span><span><i>02</i> Responsive patterns</span><span><i>03</i> JavaScript experiments</span><span><i>04</i> Interface craftsmanship</span></div></div>
        </section>

        <section className="contact shell" id="contact">
          <div className="contact-copy"><p className="section-index">06 / LET&apos;S TALK</p><h2>Have a complex interface to build?</h2><p>I&apos;m open to software engineering opportunities where thoughtful UI, reusable systems, and reliable delivery matter.</p><div className="contact-links"><a href="mailto:rahulmca94@gmail.com"><Icon name="mail" /> rahulmca94@gmail.com</a><a href="https://www.linkedin.com/in/rahulmca94/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a><a href="https://github.com/rahulkr94" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a></div></div>
          <ContactForm />
        </section>
      </main>
      <footer><div className="shell footer-inner"><div className="footer-identity"><strong>Rahul Kumar</strong><span>Software Engineer · Bengaluru, India</span><small>© {new Date().getFullYear()}. All rights reserved.</small></div><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
