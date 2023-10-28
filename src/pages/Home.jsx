import Layout from "../layout/layout";
import avatar from '../assets/images/hero-image.png'
import aboutMeImage from '../assets/images/aboutMeNature.jpg'
import SkillsAndEducations from "../components/SkillsAndEducations";
import blogData from "../data/blogs.json"
import facebookIcon from '../assets/icons/facebook.svg' 
import instagramIcon from '../assets/icons/instagram.svg' 
import twitterIcon from '../assets/icons/twitter.svg' 
import githubIcon from '../assets/icons/github.svg' 
import { Link } from "react-router-dom";
import wildcardBlogImage from '../assets/images/blogs/wildcard.png'

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
      return wildcardBlogImage
    }
  }
  
  return <Layout>
    <div className="homepage">
      <div className="landingContainer">
        <div className="mainArea">
          <div className="textContent">
            <div className="title">Hello, I&apos;m</div>
            <div className="title">Margarita Margarita</div>
            <div className="otherText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <Link
              to="/files/cv.txt"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
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
            <a href="mailto:margarita@gmail.com" className="contactLink">margarita@gmail.com</a>
            <a href="tel:+9779876543210" className="contactLink">+977 9876543210</a>
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
