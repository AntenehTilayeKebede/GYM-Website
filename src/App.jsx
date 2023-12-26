import Hero from "./components/Hero/Hero";
import "./App.css";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonals from "./components/Testimonals/Testimonals";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonals />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
