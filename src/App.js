import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Counter from "./components/counter";
import UseReducer from "./components/useReducer";
import NotFound from "./components/notfound";
import ErrorBoundary from "./components/errorboundary";
import About from "./components/about";
import Contact from "./components/contact";
import dell from "./images/dell.jpg";
import ThrowError from "./components/throwError";
function App() {
  return (
    <ErrorBoundary>
      <section className="App" style={{ background: `url(${dell})` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/throwError" element={<ThrowError />} />
        </Routes>
      </section>
    </ErrorBoundary>
  );
}
export default App;
