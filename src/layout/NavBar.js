import "./NavBar.css";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../assets/img/brand/weblogo.svg';
import menu from '../assets/img/icons/menu.svg';
import closeIcon from '../assets/img/icons/close.svg';
import arrowDown from '../assets/img/icons/arrow-down.svg';
import arrowUp from '../assets/img/icons/arrow-up.svg';
import {useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {ThemeToggle} from "./ThemeToggle";
const PROJECT_LINKS = [
  { id: 'socially', label: 'Socially' },
  { id: 'warlords', label: 'Romania Warlords' },
  { id: 'vendify', label: 'Vendify' },
  { id: 'casa-rosa', label: 'Casa Rosa' },
  { id: 'projects', label: 'All projects' },
];
const PROJECT_IDS = PROJECT_LINKS.map((link) => link.id);
const PAGE_IDS = { "/about": "about", "/experience": "experience", "/projects": "projects" };
const HOME_IDS = ["home", "contact", "about", "experience", "projects"];
const DESKTOP_HOVER = "(min-width: 992px) and (hover: hover)";
const linkFromLocation = ({ pathname, hash }) => {
  const id = hash.replace("#", "");
  if (id === "contact") return "contact";
  if (PAGE_IDS[pathname]) return PROJECT_IDS.includes(id) ? id : PAGE_IDS[pathname];
  if (pathname === "/" && !id) return "home";
  return pathname === "/" && HOME_IDS.includes(id) ? id : null;
};

export const NavBar = () => {
  const location = useLocation();
  const scrollHome = () => {
    if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [activeLink, setActiveLink] = useState(() => linkFromLocation(location));
  useEffect(() => {
    setActiveLink(linkFromLocation(location));
  }, [location]);
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
          <Navbar.Brand as={HashLink} to="/" onClick={() => { onUpdateActiveLink(null); scrollHome(); }}>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <HashLink to="/" className="navbar-logo-link" onClick={() => { onUpdateActiveLink(null); scrollHome(); }}><h3 className="navbar-logo">ERNST</h3></HashLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label={toggled ? "Close menu" : "Open menu"}>
              <img className="toggler-menu" src={menu} alt="" />
              <img className="toggler-close" src={closeIcon} alt="" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/" className={linkClass('home')} onClick={() => { onUpdateActiveLink('home'); scrollHome(); }}>Home</Nav.Link>
              <Nav.Link as={HashLink} to="/about" className={linkClass('about')} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link as={HashLink} to="/experience" className={linkClass('experience')} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>

              <div
                className={`nav-projects${projectsOpen ? ' open' : ''}${PROJECT_IDS.includes(activeLink) ? ' has-active' : ''}`}
                onMouseEnter={onProjectsEnter}
                onMouseLeave={onProjectsLeave}
                onBlur={onProjectsBlur}
                onKeyDown={onProjectsKeyDown}
              >
                <div className="nav-projects-row">
                  <Nav.Link as={HashLink} to="/projects" className={PROJECT_IDS.includes(activeLink) ? 'active navbar-link' : 'navbar-link'} onClick={onProjectsLinkClick}>Projects</Nav.Link>
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
                      <HashLink
                        key={link.id}
                        to={link.id === 'projects' ? '/projects' : `/projects#${link.id}`}
                        className={activeLink === link.id ? 'nav-dropdown-link active' : 'nav-dropdown-link'}
                        onClick={() => { onUpdateActiveLink(link.id); setProjectsOpen(false); }}
                      >
                        {link.label}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>

              <Nav.Link as={HashLink} smooth to="#contact" className={linkClass('contact')} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}
