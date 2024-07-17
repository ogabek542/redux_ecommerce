import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from "../../routes/Routers"
import "./layout.css"

const Layout = () => {
  return <>
    <Header/>
    <div>
      <Routers/>
    </div>
    <Footer/>
  </>
}

export default Layout
