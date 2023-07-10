import TemplatePageHero from "./TemplatePageHero";

function BookingConfirm(props) {
  return (
    <div className="booking-confirm container">
      <TemplatePageHero msg="Reservation Success!" />
      <div className="booking-details">
        <div className="details-key">
          <p>Date:</p>
          <p>Num of People:</p>
          <p>Arrival time:</p>
          <p>Occasions:</p>
          <p>Contact Email:</p>
        </div>
        <div className="details-value">
          <p>{props.submittedFormData.date}</p>
          <p>{props.submittedFormData.guests}</p>
          <p>{props.submittedFormData.time}</p>
          <p>{props.submittedFormData.occasion}</p>
          <p>{props.submittedFormData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirm;
