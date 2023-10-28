import { useRef, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { HashLink } from "react-router-hash-link"
import { RiMenu5Line } from "react-icons/ri"
import { AiOutlineRight } from "react-icons/ai"

const Navbar = () => {
  const location = useLocation()
  const smHeader = useRef(null)
  const smHeaderBtn = useRef(null)

  const toggleSmHeader = () => {
    if (smHeader.current) {
      if (smHeader.current.classList.contains("active")) {
        smHeader.current.classList.remove("active")
        smHeaderBtn.current.classList.remove("active")
      } else {
        smHeader.current.classList.add("active")
        smHeaderBtn.current.classList.add("active")
      }
    }
  }

  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -100
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
  }

  useEffect(() => {
    smHeader.current.classList.remove("active")
    smHeaderBtn.current.classList.remove("active")
  }, [location.hash])

  return (
    <div className="HeaderBar--root">
      <div className="content">
        <div className="mainArea">
          <NavLink className="logobox" to="/">
            <img src={logo} alt="" className="logo_img" />
          </NavLink>
          <ul className="navs">
            <li>
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="aboutLink"
                className="navLink"
                to="/#about"
              >
                About Me
              </HashLink>
            </li>
            {/* <li>
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="projectsLink"
                className="navLink"
                to="/#projects"
              >
                Projects
              </HashLink>
            </li> */}
            <li>
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="blogLink"
                className="navLink"
                to="/#blog"
              >
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="contactLink"
                className="navLink"
                to="/#contact"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav_btn">
        <button
          ref={smHeaderBtn}
          onClick={toggleSmHeader}
          className="btn btn-primary"
        >
          <RiMenu5Line className="normal" color="#fff" size={25} />
          <AiOutlineRight className="open" color="#fff" size={25} />
        </button>
        <div ref={smHeader} className="navs__sm">
          <div className="nav__box">
            <div className="links">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="aboutLinkMobile"
                className="link"
                to="/#about"
              >
                <span>About Me</span>
              </HashLink>
              {/* <HashLink
                scroll={el => scrollWithOffset(el)}
                id="projectsLinkMobile"
                className="link"
                to="/#projects"
              >
                <span>Projects</span>
              </HashLink> */}
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="blogLinkMobile"
                className="link"
                to="/#blog"
              >
                <span>Blog</span>
              </HashLink>
              <HashLink
                scroll={el => scrollWithOffset(el)}
                id="contactLinkMobile"
                className="link"
                to="/#contact"
              >
                <span>Contact</span>
              </HashLink>
            </div>
            <div className="footer">
              <p>Copyright © Margarita. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
