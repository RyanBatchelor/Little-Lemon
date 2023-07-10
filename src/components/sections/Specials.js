import { Link } from "react-router-dom";
import SpecialsCard from "../SpecialsCard";

function Specials() {
  return (
    <div className="specials container">
      <div className="display-title">
        <h1 className="title">This week's Specials</h1>
        <Link to="/menu">
          <button className="btn btn-primary" aria-label="On Click">
            Online Menu
          </button>
        </Link>
      </div>
      <div className="specials-card-wrapper">
        <SpecialsCard
          image={require("../../assets/greek_salad.png")}
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <SpecialsCard
          image={require("../../assets/bruchetta.png")}
          title="Bruchetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        />
        <SpecialsCard
          image={require("../../assets/lemon_dessert.jpg")}
          title="Lemon Dessert"
          price="$5.00"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </div>
  );
}

export default Specials;
