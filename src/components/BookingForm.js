import { useNavigate } from "react-router";
import { submitAPI } from "../BookingAPI";

function BookingForm(props) {
  const navigate = useNavigate();

  function changeHandler(e) {
    const func = (prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    });
    props.setFormData(func);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (props.formData.guests < 1 || props.formData.guests > 10) {
      console.log("Please recheck guest value, must be between 1 and 10.");
      return;
    }

    props.dispatchAvailableTimeUpdate({
      type: "booked",
      date: props.formData.date,
      time: props.formData.time,
    });
    let response = submitAPI(props.formData);
    if (!response) {
      alert("Submission failed. Please try again.");
      return;
    }

    props.setSubmittedFormData({ ...props.formData });
    props.setFormData((prev) => ({
      date: props.todayStr,
      time: props.availableTimes[0],
      guests: 2,
      occasion: "None",
      email: "",
    }));
    navigate("/bookings-confirm");
  }

  return (
    <form className="booking-form" onSubmit={submitHandler}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        defaultValue={props.todayStr}
        onChange={changeHandler}
        min={props.todayStr}
        onBlur={(e) => {
          e.target.reportValidity();
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        role="time-select"
        defaultValue={props.availableTimes[0]}
        onChange={changeHandler}
      >
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        role="guests"
        placeholder="2"
        min="1"
        max="10"
        name="guests"
        onChange={changeHandler}
        onBlur={(e) => {
          e.target.reportValidity();
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        defaultValue={"None"}
        onChange={changeHandler}
      >
        <option key="none">None</option>
        <option key="bday">Birthday</option>
        <option key="anniversary">Anniversary</option>
        <option key="engagement">Engagement</option>
        <option key="other">Other</option>
      </select>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        defaultValue={props.formData.email}
        onChange={changeHandler}
        required
        onBlur={(e) => {
          e.target.reportValidity();
        }}
      />
      <button type="submit" className="btn btn-primary" aria-label="On Click">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
