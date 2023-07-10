import "@fontsource/karla";
import "@fontsource/markazi-text";

import "./css/App.css";
import "./css/responsive.css";

import Header from "./components/Header";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
