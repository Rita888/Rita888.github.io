import PropTypes from "prop-types"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="containerbox">{props.children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}