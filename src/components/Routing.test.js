import { InitializeTimes, updateTimes } from "./Routing";

describe("test initializeTimes function", () => {
  test("returns the expected array", () => {
    let initialArray = InitializeTimes(new Date());
    expect(initialArray.length).toBeGreaterThan(0);
  });
});

describe("test updateTimes function", () => {
  test("returns a initial time array with initialized action", () => {
    let timesArray = updateTimes([], {
      type: "initialized",
      date: new Date(),
    });
    expect(timesArray.length).toBeGreaterThan(0);
  });

  test("returns the updated time array with booked slots removed", () => {
    let updatedArray = updateTimes(["17:00", "18:00", "19:30"], {
      type: "booked",
      time: "18:00",
    });
    expect(updatedArray).not.toContain("18:00");
  });

  test("catch error message when unknown action is called", () => {
    function testThrow() {
      updateTimes([], {
        type: "canceled",
      });
    }
    expect(testThrow).toThrow("Unknown action");
  });
});
