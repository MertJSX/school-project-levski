import "./navbar.scss"
import "./navbarMobile.scss"
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const Navbar = () => {
  return (
    <div>
    <div className="navbar-comp">
      <ul>
        <li className="nav-title">Левски</li>
        <Link to="/"><li className="borderAnim"><HomeIcon className="icon"/>Начало</li></Link>
        <Link to="/about"><li className="borderAnim"><InfoIcon className="icon"/>За Левски</li></Link>
        <Link to="/story"><li className="borderAnim"><AutoStoriesIcon className="icon"/>История</li></Link>
        <Link to="/developer"><li className="borderAnim"><DashboardIcon className="icon"/>Info</li></Link>
      </ul>
    </div>
    <div className="navbar-comp-m">
      <h2 className="nav-title-m">Левски</h2>
      <ul>
        <Link to="/"><li><HomeIcon className="icon"/></li></Link>
        <Link to="/about"><li><InfoIcon className="icon"/></li></Link>
        <Link to="/story"><li><AutoStoriesIcon className="icon"/></li></Link>
        <Link to="/developer"><li><DashboardIcon className="icon"/></li></Link>
      </ul>
    </div>
    </div>

  )
}

export default Navbar
