import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";
import * as router from "react-router";

describe("Happy path", () => {
  test("Renders every components", () => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => jest.fn());
    render(
      <>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatchAvailableTimeUpdate={jest.fn()}
          formData={{
            date: "2023-05-01",
            time: "17:00",
            guests: 2,
            occasion: "None",
            email: "2@2",
          }}
          setFormData={jest.fn()}
          todayStr={"2023-05-01"}
          setSubmittedFormData={jest.fn()}
        />
      </>
    );
    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Make Your Reservation")).toBeInTheDocument();

    expect(screen.getByDisplayValue("2@2")).toBeInTheDocument();
  });

  test("Verify default value is selected then change the select", () => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => jest.fn());
    render(
      <>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatchAvailableTimeUpdate={jest.fn()}
          formData={{
            date: "2023-05-01",
            time: "17:00",
            guests: 2,
            occasion: "None",
            email: "2@2",
          }}
          setFormData={jest.fn()}
          todayStr={"2023-05-01"}
          setSubmittedFormData={jest.fn()}
        />
      </>
    );
    expect(screen.getByDisplayValue("17:00")).toBeInTheDocument();

    const selectElement = screen.getByRole("time-select");
    fireEvent.change(selectElement, { target: { value: "18:00" } });

    expect(screen.getByText("18:00")).toBeInTheDocument();
  });

  test("navigate to confirm page with successful booking", async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
    render(
      <>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatchAvailableTimeUpdate={jest.fn()}
          formData={{
            date: "2023-05-02",
            time: "17:00",
            guests: 2,
            occasion: "None",
            email: "2@2",
          }}
          setFormData={jest.fn()}
          todayStr={"2023-05-02"}
          setSubmittedFormData={jest.fn()}
        />
      </>
    );
    await userEvent.click(screen.getByText("Make Your Reservation"));
    expect(mockNavigate).toHaveBeenCalled();
  });
});

describe("sad path", () => {
  test("fail booking with guest number out of range", async () => {
    const user = userEvent.setup();
    const mockNavigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);

    const TestComponent = () => {
      const [formData, setFormData] = useState({
        date: "2023-05-02",
        time: "17:00",
        guests: 2,
        occasion: "None",
        email: "2@2",
      });
      return (
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatchAvailableTimeUpdate={jest.fn()}
          formData={formData}
          setFormData={setFormData}
          todayStr={"2023-01-01"}
          setSubmittedFormData={jest.fn()}
        />
      );
    };

    render(<TestComponent />);

    await user.type(screen.getByRole("guests"), "11");
    await user.click(screen.getByText("Make Your Reservation"));
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
