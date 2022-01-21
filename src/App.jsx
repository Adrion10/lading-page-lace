import "./App.css";
import bg3 from "./assets/bg3.jpg";
import bg2 from "./assets/bg2.jpg";
import bg1 from "./assets/bg1.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Diving" },
  { url: "#", title: "Explorer" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={bg3} />
      <Slider
        imageSrc={bg1}
        title={"Underwater feels like Home"}
        subtitle={"We make adventures that others only dream"}
      />
      <Slider
        imageSrc={bg2}
        title={"Plan Your Diving Trip with Us"}
        subtitle={"Contact us and make your dream come true"}
        flipped={true}
      />
    </div>
  );
}

export default App;
