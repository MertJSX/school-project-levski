import "./navbar.scss"
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const Navbar = () => {
  return (
    <div className="navbar-comp">
      <ul>
        <li className="nav-title">Левски</li>
        <Link to="/"><li><HomeIcon className="icon"/>Начало</li></Link>
        <Link to="/about"><li><InfoIcon className="icon"/>За Левски</li></Link>
        <Link to="/story"><li><AutoStoriesIcon className="icon"/>История</li></Link>
        <Link to="/developer"><li><DashboardIcon className="icon"/>Info</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
