import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";
import { fetchAPI } from "../BookingAPI";

import Homepage from "./page/Homepage";
import About from "./page/About";
import Menu from "./page/Menu";

import BookingPage from "./page/BookingPage";
import BookingConfirm from "./page/BookingConfirm";
import Order from "./page/Order";
import Login from "./page/Login";

export const InitializeTimes = (date) => {
  let timesArray = fetchAPI(date);
  return timesArray;
};

export const updateTimes = (state, action) => {
  if (action.type === "booked")
    return state.filter((slot) => slot !== action.time);
  else if (action.type === "initialized") return InitializeTimes(action.date);
  else {
    throw new Error("Unknown action: " + action.type);
  }
};

function Routing() {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  let initialTimes = InitializeTimes(today); //today
  const [availableTimes, dispatchAvailableTimeUpdate] = useReducer(
    updateTimes,
    initialTimes
  );

  const [formData, setFormData] = useState({
    date: todayStr,
    time: availableTimes[0],
    guests: 2,
    occasion: "None",
    email: "",
  });

  const [submittedFormData, setSubmittedFormData] = useState({});

  return (
    <Routes>
       <Route path="/" element={<Homepage />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route
        path="/bookings"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatchAvailableTimeUpdate={dispatchAvailableTimeUpdate}
            formData={formData}
            setFormData={setFormData}
            todayStr={todayStr}
            setSubmittedFormData={setSubmittedFormData}
          />
        }
      ></Route>
      <Route
        path="/bookings-confirm"
        element={<BookingConfirm submittedFormData={submittedFormData} />}
      ></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default Routing;
