import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="call-to-action">
      <div className="call-to-action-container container">
        <section className="hero-text">
          <div className="display-title">
            <h1 className="title">Little Lemon</h1>
            <h2 className="sub-title">Chicago</h2>
          </div>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/bookings">
            <button className="btn btn-primary" aria-label="On Click">
              Reserve a Table
            </button>
          </Link>
        </section>
        <img
          className="hero-image"
          src={require("../../assets/restaurantfood.jpeg")}
          alt="restaurant food"
        />
      </div>
    </div>
  );
}

export default CallToAction;
