"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const next = saved ? saved === "dark" : true;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Rahul Kumar, home"><b>RK<span>.</span></b><em>Rahul Kumar</em></a>
        <div className="availability header-availability"><i /> Available for high-impact roles</div>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
        <div className="header-actions">
          <a className="button button-small" href="/documents/rahul-kumar-resume.pdf" download>Download CV</a>
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}><Icon name={dark ? "sun" : "moon"} /></button>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu"><Icon name={open ? "close" : "menu"} /></button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`}>{link}<Icon name="arrow" /></a>)}
        </nav>
        <a className="button" href="/documents/rahul-kumar-resume.pdf" download><Icon name="download" /> Download résumé</a>
      </div>
    </header>
  );
}
