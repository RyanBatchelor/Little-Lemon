import { Link } from "react-router-dom";

function SpecialsCard(props) {
  return (
    <div className="specials-card">
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <div className="highlight-text">{props.price}</div>
        <p className="description">{props.description}</p>

        <Link to="/order">
          <div className="order-delivery">
            <button className="btn" aria-label="On Click">
              Order a delivery
            </button>
            <img
              className="icon"
              src={require("../assets/icon_delivery.png")}
              alt="a delivery icon"
            />
          </div>
        </Link>
      </div>

      <img src={props.image} alt={props.title} className="card-image" />
    </div>
  );
}

export default SpecialsCard;
