import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-md m-auto p-2">
      <Navbar />
      <Home />
      <Contact />
      <Blogs />
      <About />
    </div>
  );
}

export default App;
