import Layout from "../layout/layout";
import avatar from '../assets/images/Rita-Headshot-removebg-preview.png'
import aboutMeImage from '../assets/images/aboutMeNature.jpg'
import SkillsAndEducations from "../components/SkillsAndEducations";
import blogData from "../data/blogs.json"
import facebookIcon from '../assets/icons/facebook.svg' 
import instagramIcon from '../assets/icons/instagram.svg' 
import twitterIcon from '../assets/icons/twitter.svg' 
import githubIcon from '../assets/icons/github.svg' 
import { Link } from "react-router-dom";
import wildcardBlogImage from '../assets/images/blogs/wildcard.jpg'
import wildcardBlogImage2 from '../assets/images/blogs/wildcard2.jpg'
import wildcardBlogImage3 from '../assets/images/blogs/wildcard3.jpg'

const Home = () => {

  const convertToSlug = Text => {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
  }

  const getBlogImage = imageId => {
    if (imageId === 1) {
      return wildcardBlogImage
    } else {
      if (imageId === 2) {
        return wildcardBlogImage2
      } else {
        return wildcardBlogImage3
      }
    }
  }
  
  return <Layout>
    <div className="homepage">
      <div className="landingContainer">
        <div className="mainArea">
          <div className="textContent">
            <div className="title">Hello, I&apos;m</div>
            <div className="title">Margarita Smoldareva</div>
            <div className="otherText">
            Leading Ecological Innovation from London's Heart. With a passion for sustainability and over nine years of experience, I leverage cutting-edge technology to enhance ecological research, conservation, and management.
            </div>
            <Link
              to="/files/2024_Margarita_Smoldareva_Resume.pdf"
              target="_blank"
              className="primaryButton"
              download={true}
            >
              Download CV
            </Link>
          </div>
          <div className="gradientCircleBorder">
            <div className="transparentBackground">
              <div className="avatarContainer">
                <img src={avatar} className="avatar" />
              </div>
            </div>
          </div>
        </div>
        <div className="slideDown" onClick={() => window.scrollTo(0, 750)}>
          <span className="mouse">
            <span className="move"></span>
          </span>
        </div>
      </div>
      <div className="aboutContainer" id="about">
        {/* <img src={whiteNatureBackground} className="aboutMeBackground" /> */}
        <div className="contentArea">
          <div className="imageArea">
            <img src={aboutMeImage} alt="" className="aboutMeImage" />
          </div>
          <div className="textArea">
            <div className="title">About Me</div>
            <div className="bodyText">
            Through my consultancy, BeeWise.Eco, I specialize in providing comprehensive ecological support for development projects, focusing on biodiversity enhancement and management. My innovation extends to developing IoT devices for real-time species classification, backed by a robust academic foundation in Connected Environments from UCL and Landscape Ecology and GIS from the University of Greenwich, along with various industry-specific certifications.
            </div>
            <SkillsAndEducations />
          </div>
        </div>
      </div>
      <div className="blogsContainer" id='blog'>
        <div className="contentArea">
          <div className="title">Blogs</div>
          <div className="gridContainer">
            {blogData.map((blog, i) => (
              <Link
                to={`/blog/${convertToSlug(blog.name)}`}
                className="blog"
                key={blog.name + i}
              >
                <div className="blogImageContainer">
                  <img src={getBlogImage(blog?.image)} alt="Not Found" className="blogImage" />
                  <div className="publishedOnDate">{blog.publishedOn}</div>
                </div>
                <div className="blogTitle">{blog.name}</div>
                <div className="shortDescription">{blog.shortDescription}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="contactContainer" id="contact">
        <div className="contentArea">
          <div className="title">Let&apos;s Connect</div>
          <div className="contactBody">
            I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </div>
          <div className="contactInfoArea">
            <a href="mailto:rita@beewise.eco" className="contactLink">rita@beewise.eco</a>
            <a href="tel:+447832329687" className="contactLink">+44 7832 329687</a>
          </div>
          <div className="socialIconsArea">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="" className="socialIcon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="" className="socialIcon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="" className="socialIcon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="" className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>;
};

export default Home;
