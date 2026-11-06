import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../assets/img/weblogo.svg';
import menu from '../assets/img/menu.svg';
import closeIcon from '../assets/img/close.svg';
import arrowDown from '../assets/img/arrow-down.svg';
import arrowUp from '../assets/img/arrow-up.svg';
import {ThemeToggle} from "./ThemeToggle";
const PROJECT_LINKS = [
  { id: 'socially', label: 'Socially' },
  { id: 'warlords', label: 'Romania Warlords' },
  { id: 'vendify', label: 'Vendify' },
  { id: 'casa-rosa', label: 'Casa Rosa' },
  { id: 'projects', label: 'All projects' },
];
const PROJECT_IDS = PROJECT_LINKS.map((link) => link.id);
const NAV_IDS = ["home", "about", "experience", "contact", ...PROJECT_IDS];
const DESKTOP_HOVER = "(min-width: 992px) and (hover: hover)";
const linkFromHash = () => {
  const id = window.location.hash.replace("#", "");
  return NAV_IDS.includes(id) ? id : null;
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState(linkFromHash);
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [darkHold, setDarkHold] = useState(false);
  const dropRef = useRef(null);
  const dropBoxRef = useRef(null);
  useLayoutEffect(() => {
    const drop = dropRef.current;
    const box = dropBoxRef.current;
    if (!drop || !box) return undefined;
    const measure = () => drop.style.setProperty("--list-h", `${box.offsetHeight}px`);
    measure();
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (observer) observer.observe(box);
    window.addEventListener("resize", measure);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (projectsOpen) {
      setDarkHold(true);
      return undefined;
    }
    const timer = window.setTimeout(() => setDarkHold(false), 300);
    return () => window.clearTimeout(timer);
  }, [projectsOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    closeMenu();
    setProjectsOpen(false);
  }

  const closeMenu = () => setToggled(false);
  useEffect(() => {
    if (!toggled && !window.matchMedia(DESKTOP_HOVER).matches) setProjectsOpen(false);
  }, [toggled]);
  const onProjectsLinkClick = (event) => {
    if (window.matchMedia(DESKTOP_HOVER).matches) {
      onUpdateActiveLink('projects');
    } else {
      event.preventDefault();
      setProjectsOpen((open) => !open);
    }
  }

  const linkClass = (id) => (activeLink === id ? 'active navbar-link' : 'navbar-link');
  const onProjectsEnter = () => {
    if (window.matchMedia(DESKTOP_HOVER).matches) setProjectsOpen(true);
  }

  const onProjectsLeave = () => {
    if (window.matchMedia(DESKTOP_HOVER).matches) setProjectsOpen(false);
  }

  const onProjectsBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setProjectsOpen(false);
  }

  const onProjectsKeyDown = (event) => {
    if (event.key === 'Escape') setProjectsOpen(false);
  }

  return (
      <Navbar expand="lg" expanded={toggled} onToggle={setToggled} className={`${scrolled ? "scrolled" : toggled ? "toggled" : ""}${toggled ? " menu-open" : ""}${projectsOpen ? " projects-open" : ""}${darkHold ? " dark-hold" : ""}`}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <h3 className="navbar-logo">ERNST</h3>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label={toggled ? "Close menu" : "Open menu"}>
              <img className="toggler-menu" src={menu} alt="" />
              <img className="toggler-close" src={closeIcon} alt="" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={linkClass('home')} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={linkClass('about')} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#experience" className={linkClass('experience')} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>

              <div
                className={`nav-projects${projectsOpen ? ' open' : ''}${PROJECT_IDS.includes(activeLink) ? ' has-active' : ''}`}
                onMouseEnter={onProjectsEnter}
                onMouseLeave={onProjectsLeave}
                onBlur={onProjectsBlur}
                onKeyDown={onProjectsKeyDown}
              >
                <div className="nav-projects-row">
                  <Nav.Link href="#projects" className={PROJECT_IDS.includes(activeLink) ? 'active navbar-link' : 'navbar-link'} onClick={onProjectsLinkClick}>Projects</Nav.Link>
                  <button
                    type="button"
                    className="nav-arrow"
                    aria-label="Projects menu"
                    aria-haspopup="true"
                    aria-expanded={projectsOpen}
                    onClick={() => setProjectsOpen(!projectsOpen)}
                  >
                    <img className="nav-arrow-down" src={arrowDown} alt="" />
                    <img className="nav-arrow-up" src={arrowUp} alt="" />
                  </button>
                </div>
                <div className="nav-dropdown" ref={dropRef}>
                  <div className="nav-dropdown-box" ref={dropBoxRef}>
                    {PROJECT_LINKS.map((link) => (
                      <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={activeLink === link.id ? 'nav-dropdown-link active' : 'nav-dropdown-link'}
                        onClick={() => { onUpdateActiveLink(link.id); setProjectsOpen(false); }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <Nav.Link href="#contact" className={linkClass('contact')} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}