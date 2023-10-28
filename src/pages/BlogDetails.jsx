import { useEffect, useState } from "react";
import Layout from "../layout/layout";
import blogData from "../data/blogs.json"
import { useLocation, useNavigate } from "react-router-dom";
import wildcardBlogImage from '../assets/images/blogs/wildcard.png'

const BlogDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [blog, setBlog] = useState(null)

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

  useEffect(() => { 
    let found = false
    blogData.forEach(blog => { 
      if (convertToSlug(blog.name) === location.pathname.split('/blog/')[1]) { 
        setBlog(blog)
        found = true
      }
    })
    if (!found) { 
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Layout>
    <div className="blogDetails">
      <img
        src={getBlogImage(blog?.image)}
        className="blogCoverImage"
      />
      <div className="textContent">
        <div className="title">
          {blog?.name}
        </div>
        <div
          className="blogBody"
          dangerouslySetInnerHTML={{ __html: blog?.description }}
        />
      </div>
    </div>
  </Layout>;
};

export default BlogDetails;
