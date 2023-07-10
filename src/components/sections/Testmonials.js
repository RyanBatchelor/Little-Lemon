import TestimonialsCard from "../TestimonialsCard";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-container container">
        <h1 className="display-title title">Testimonials</h1>
        <div className="testimonials-cards">
          <TestimonialsCard
            avatar={require("../../assets/sara.png")}
            name="Sara Lopez"
            media_id="Sara72"
            text="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
          />
          <TestimonialsCard
            avatar={require("../../assets/jon.png")}
            name="Jon Do"
            media_id="JohnnyDo"
            text="“We had such a great time celebrating my grandmothers bitthday!”"
          />
          <TestimonialsCard
            avatar={require("../../assets/Olivia.png")}
            name="Olivia Pope"
            media_id="Olivia_P"
            text="“Best Feta Salad in town. Flawless everytime!”"
          />
          <TestimonialsCard
            avatar={require("../../assets/deniz.png")}
            name="Deniz Kaplan"
            media_id="Denny_K123"
            text="“Such a chilled out atmosphere - love it!”"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
