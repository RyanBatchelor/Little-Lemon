function TestimonialsCard(props) {
  return (
    <div className="testimonials-card">
      <div className="ratings">
        <img
          className="rating-star"
          src={require("../assets/star.png")}
          alt="one rating star"
        />
        <img
          className="rating-star"
          src={require("../assets/star.png")}
          alt="one rating star"
        />
        <img
          className="rating-star"
          src={require("../assets/star.png")}
          alt="one rating star"
        />
        <img
          className="rating-star"
          src={require("../assets/star.png")}
          alt="one rating star"
        />
        <img
          className="rating-star"
          src={require("../assets/star.png")}
          alt="one rating star"
        />
      </div>
      <div className="testimonial-user">
        <img
          className="avatar"
          src={props.avatar}
          alt={`avatar for ${props.name}`}
        />
        <div className="names">
          <p className="name">{props.name}</p>
          <p className="media-id">{props.media_id}</p>
        </div>
      </div>
      <div className="description">{props.text}</div>
    </div>
  );
}

export default TestimonialsCard;
