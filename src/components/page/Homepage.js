import CallToAction from "../sections/CallToAction";
import Specials from "../sections/Specials";
import Testimonials from "../sections/Testmonials";
import About from "./About";

function Homepage() {
  return (
    <main className="main">
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Homepage;
