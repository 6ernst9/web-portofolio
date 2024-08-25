import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../assets/img/weblogo.svg';
import menu from '../assets/img/menu.svg';
import weblogo from '../assets/img/weblogo.png'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

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
  }

  const onUpdateToggle = () => {
      setToggled(!toggled);
  }

  return (
      <Navbar expand={false} className={scrolled ? "scrolled" : toggled ? "toggled" : ""}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <img className="navbar-logo" src={weblogo}/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onUpdateToggle}>
              <img src={menu}/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#socially" className={activeLink === 'socially' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('socially')}>Socially</Nav.Link>
              <Nav.Link href="#letify" className={activeLink === 'letify' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('letify')}>Letify</Nav.Link>
              <Nav.Link href="#chess-royal" className={activeLink === 'chess-royal' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chess-royal')}>Chess Royal</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}