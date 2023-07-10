import TemplatePageHero from "./TemplatePageHero";
import BookingForm from "../BookingForm";

function BookingPage(props) {
  return (
    <div className="reservations container">
      <TemplatePageHero msg="Reservations Now Available" />
      <BookingForm
        availableTimes={props.availableTimes}
        dispatchAvailableTimeUpdate={props.dispatchAvailableTimeUpdate}
        formData={props.formData}
        setFormData={props.setFormData}
        todayStr={props.todayStr}
        setSubmittedFormData={props.setSubmittedFormData}
      />
    </div>
  );
}

export default BookingPage;
