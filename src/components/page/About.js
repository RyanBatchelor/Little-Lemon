function About() {
  return (
    <div className="about container">
      <article className="hero-text">
        <div className="display-title">
          <h1 className="title">Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
        </div>
        <p className="description">
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </article>
      <div className="double-image">
        <img
          src={require("../../assets/Mario_Adrian_1low.jpeg")}
          alt="Mario and Andrian smilling"
          className="double-image-low"
        />
        <img
          src={require("../../assets/Mario_Adrian_2up.jpg")}
          alt="Mario and Andrian having discussion on food"
          className="double-image-up"
        />
      </div>
    </div>
  );
}

export default About;
