import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h2>About</h2>
      <p style={{ color: "white" }}>
        This is an exam project on Counter react Application!
      </p>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
export default About;
