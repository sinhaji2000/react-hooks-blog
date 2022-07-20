import { Link } from "react-router-dom"

function Navbar() {
    return <div className="">

      <ul className="navbar" style={styles.navbar}>
        <li className="navbarLI" style={styles.navbarLI}>
          <Link to="/">Home</Link>
        </li>
        <li className="navbarLI" style={styles.navbarLI}>
          <Link to="/create-post"> Create Post</Link>
        </li>
      </ul>
    </div>
  }



  export default Navbar

  const styles = {
    navbar :{
      
      display : 'flex',
      flexwrap: 'nowrap',
     // float: 'right'

    },

    navbarLI :{
      margin : '32px'
    }
    
  }