import { useEffect } from "react"
import { withRouter } from "./WithRouter"

const ScrollToTop = props => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.hash, location.pathname])
  return props.children
}

export default withRouter(ScrollToTop)
