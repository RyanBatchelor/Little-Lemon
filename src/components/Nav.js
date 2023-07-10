import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <nav className={props.className}>
        <ul>
          <li>
            <Link to="/home" onClick={props.resetHamburger}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={props.resetHamburger}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={props.resetHamburger}>
              MENU
            </Link>
          </li>
          <li>
            <Link to="/bookings" onClick={props.resetHamburger}>
              RESERVATIONS
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={props.resetHamburger}>
              ORDER ONLINE
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={props.resetHamburger}>
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
